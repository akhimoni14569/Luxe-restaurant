import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, CheckoutData, Language, MenuItem, ReservationData } from '../types';
import { TRANSLATIONS } from '../translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof TRANSLATIONS.en;

  activeTab: string;
  setActiveTab: (tab: string) => void;

  cart: CartItem[];
  addToCart: (item: MenuItem, qty?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;

  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;

  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;

  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  selectedDish: MenuItem | null;
  openDishModal: (item: MenuItem) => void;
  closeDishModal: () => void;

  reservations: ReservationData[];
  addReservation: (res: ReservationData) => string;

  orders: CheckoutData[];
  addOrder: (order: CheckoutData) => string;

  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_RESERVATIONS: ReservationData[] = [
  {
    id: 'RES-LUXE-101',
    name: 'Farhan Chowdhury',
    phone: '+880 1712-345678',
    email: 'farhan@example.com',
    date: '2026-11-05',
    time: '08:00 PM',
    guests: 4,
    area: 'private-vault',
    specialRequests: 'Celebrating 10th wedding anniversary. Wine pairing requested.',
    createdAt: '2 days ago'
  }
];

const INITIAL_ORDERS: CheckoutData[] = [
  {
    id: 'ORD-9842',
    name: 'Farhan Chowdhury',
    phone: '+880 1712-345678',
    email: 'farhan@example.com',
    address: 'House 42, Road 11, Gulshan-2, Dhaka',
    deliveryType: 'delivery',
    paymentMethod: 'card_on_arrival',
    items: [],
    subtotal: 6800,
    tax: 680,
    deliveryFee: 0,
    total: 7480,
    timestamp: 'Yesterday at 8:15 PM'
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('luxe_lang');
    return (saved === 'bn' ? 'bn' : 'en') as Language;
  });

  const [activeTab, setActiveTabState] = useState<string>('home');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('luxe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const [reservations, setReservations] = useState<ReservationData[]>(() => {
    try {
      const saved = localStorage.getItem('luxe_reservations');
      return saved ? JSON.parse(saved) : INITIAL_RESERVATIONS;
    } catch {
      return INITIAL_RESERVATIONS;
    }
  });

  const [orders, setOrders] = useState<CheckoutData[]>(() => {
    try {
      const saved = localStorage.getItem('luxe_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('luxe_lang', language);
    if (language === 'bn') {
      document.documentElement.lang = 'bn';
    } else {
      document.documentElement.lang = 'en';
    }
  }, [language]);

  useEffect(() => {
    localStorage.setItem('luxe_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('luxe_reservations', JSON.stringify(reservations));
  }, [reservations]);

  useEffect(() => {
    localStorage.setItem('luxe_orders', JSON.stringify(orders));
  }, [orders]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'bn' : 'en'));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (item: MenuItem, qty: number = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { item, quantity: qty }];
    });
    showToast(
      language === 'bn' 
        ? `${item.nameBn} কার্টে যোগ করা হয়েছে`
        : `Added ${item.name} to order`
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(i => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(i => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const setActiveTab = (tab: string) => {
    setActiveTabState(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addReservation = (res: ReservationData) => {
    const bookingCode = `RES-${Math.floor(100000 + Math.random() * 900000)}`;
    const newRes = {
      ...res,
      id: bookingCode,
      createdAt: 'Just now'
    };
    setReservations(prev => [newRes, ...prev]);
    return bookingCode;
  };

  const addOrder = (order: CheckoutData) => {
    const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder = {
      ...order,
      id: orderId,
      timestamp: 'Just now'
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return orderId;
  };

  const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = cart.reduce((acc, curr) => acc + curr.item.priceBDT * curr.quantity, 0);
  const tax = Math.round(subtotal * 0.1);
  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 5000 ? 0 : 250;
  const total = subtotal + tax + deliveryFee;

  const t = TRANSLATIONS[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        activeTab,
        setActiveTab,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        tax,
        deliveryFee,
        total,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isCheckoutOpen,
        openCheckout: () => setIsCheckoutOpen(true),
        closeCheckout: () => setIsCheckoutOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        selectedDish,
        openDishModal: (item: MenuItem) => setSelectedDish(item),
        closeDishModal: () => setSelectedDish(null),
        reservations,
        addReservation,
        orders,
        addOrder,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
