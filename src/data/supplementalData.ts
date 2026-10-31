import { FAQItem, GalleryItem, TestimonialItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Grand Dining Chamber',
    titleBn: 'গ্র্যান্ড ডাইনিং চেম্বার',
    category: 'interior',
    image: '/src/assets/images/luxe_hero_dining_1793454111259.jpg',
    caption: 'Bespoke walnut paneling, hand-blown crystal chandeliers, and intimate candlelit booth seating.',
    captionBn: 'হাতে খোদাই করা আখরোট কাঠের দেয়াল, ক্রিস্টাল ঝাড়বাতি এবং মোমবাতির আলোয় সাজানো বিশেষ সিটিং।'
  },
  {
    id: 'gal-2',
    title: 'Imperial Wagyu Presentation',
    titleBn: 'ইম্পেরিয়াল ওয়াগিউ প্রেজেন্টেশন',
    category: 'food',
    image: '/src/assets/images/luxe_signature_wagyu_1793454112514.jpg',
    caption: 'Precision searing, artisanal microgreens, and reduced bone marrow jus served on volcanic stone.',
    captionBn: 'ভলকানিক প্লেটে পরিবেশিত নিখুঁত সেয়ার্ড মিট ও তাজা মাইক্রোগ্রিনস।'
  },
  {
    id: 'gal-3',
    title: 'Executive Chef at Work',
    titleBn: 'রান্নাঘরে এক্সিকিউটিভ শেফ',
    category: 'chef',
    image: '/src/assets/images/luxe_executive_chef_1793454114288.jpg',
    caption: 'Master chef Henry Chen applying final botanical touches in the stainless & copper state kitchen.',
    captionBn: 'শেফ হেনরি চেন পরম যত্নে প্রতিটি থালিতে শিল্প ফুটিয়ে তুলছেন।'
  },
  {
    id: 'gal-4',
    title: 'Saffron Crustacean & Oyster Symphony',
    titleBn: 'জাফরান ক্রাস্টাসিয়ান ও লবস্টার সিম্ফনি',
    category: 'food',
    image: '/src/assets/images/luxe_seafood_platter_1793454113707.jpg',
    caption: 'Wild caught seafood harvested sustainably, delicately poached with golden saffron emulsion.',
    captionBn: 'সতেজ সামুদ্রিক লবস্টার ও প্রন, খাঁটি জাফরানের ক্রিমি সসে সাজানো।'
  },
  {
    id: 'gal-5',
    title: 'Noir Gold Sphere Dessert',
    titleBn: 'নোয়ার গোল্ড স্ফিয়ার মিষ্টান্ন',
    category: 'food',
    image: '/src/assets/images/luxe_dessert_chocolat_1793454114805.jpg',
    caption: 'Handcrafted chocolate geometry with 24k gold leaf flakes and spun sugar aura.',
    captionBn: '২৪ ক্যারেট স্বর্ণপাত ও চকলেট ডোম দিয়ে তৈরি শিল্পসম্মত ডেজার্ট।'
  },
  {
    id: 'gal-6',
    title: 'The Sommelier Private Cellar',
    titleBn: 'সোমেলিয়ার প্রাইভেট সেলার',
    category: 'experience',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80',
    caption: 'Over 800 vintage reserves curated in climate-controlled oak cabinets for bespoke tasting journeys.',
    captionBn: '৮০০ এর অধিক বিশেষ ওয়াইন ও বেভারেজের সংরক্ষিত সেলার।'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Ambassador Farhan Chowdhury',
    nameBn: 'ফারহান চৌধুরী',
    role: 'Diplomatic Guest & Fine Dining Patron',
    roleBn: 'কূটনৈতিক অতিথি ও রসনাবিদ',
    rating: 5,
    quote: 'LUXE is unmatched in Dhaka. The atmosphere captures the refined elegance of Parisian dining while the Wagyu tenderloin was simply melt-in-the-mouth perfection.',
    quoteBn: 'ঢাকার বুকে লাক্সের অভিজ্ঞতা সত্যিই অতুলনীয়। পরিবেশের আভিজাত্য এবং ওয়াগিউ টেন্ডারলয়েনের স্বাদ মুখে লেগে থাকার মতো।',
    dishRecommended: 'Imperial A5 Wagyu Tenderloin',
    dishRecommendedBn: 'ইম্পেরিয়াল এ৫ ওয়াগিউ টেন্ডারলয়েন',
    date: 'October 2026'
  },
  {
    id: 't-2',
    name: 'Dr. Samira Rahman',
    nameBn: 'ডা. সামিরা রহমান',
    role: 'Culinary Critic & Lifestyle Writer',
    roleBn: 'ফুড ক্রিটিক ও লাইফস্টাইল লেখক',
    rating: 5,
    quote: 'The level of culinary precision in the Saffron Lobster Thermidor and Golden Sphere dessert sets a new benchmark for luxury gastronomy in Bangladesh.',
    quoteBn: 'জাফরান লবস্টার থার্মিডোর এবং গোল্ডেন স্ফিয়ার ডেজার্টের স্বাদের সূক্ষ্মতা বাংলাদেশে বিলাসবহুল খাবারের নতুন মানদণ্ড স্থাপন করেছে।',
    dishRecommended: 'Royal Saffron Lobster & Tiger Prawns',
    dishRecommendedBn: 'রয়্যাল জাফরান লবস্টার ও টাইগার প্রন',
    date: 'September 2026'
  },
  {
    id: 't-3',
    name: 'Tanvir Ahmed',
    nameBn: 'তানভীর আহমেদ',
    role: 'Managing Director, Horizon Group',
    roleBn: 'ম্যানেজিং ডিরেক্টর, হরিজন গ্রুপ',
    rating: 5,
    quote: 'We hosted an intimate board dinner in the Private Vault. The discrete service, custom wine pairings, and bespoke courses exceeded all expectations.',
    quoteBn: 'আমরা প্রাইভেট ভল্টে একটি বোর্ড ডিনার আয়োজন করেছিলাম। তাদের নিরিবিলি সেবা এবং অসাধারণ খাবার আমাদের প্রত্যাশাকে ছাড়িয়ে গেছে।',
    dishRecommended: 'Chef’s 7-Course Degustation',
    dishRecommendedBn: 'শেফের ৭-কোর্স ডেগাস্টেশন মেনু',
    date: 'October 2026'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'reservations',
    question: 'How far in advance should I reserve a table?',
    questionBn: 'কতদিন আগে টেবিল সংরক্ষণ করা উচিত?',
    answer: 'We recommend reserving at least 48 to 72 hours in advance for evening dinners and weekends. For private dining vaults or the Chef’s Table experience, 1 to 2 weeks prior notice is suggested.',
    answerBn: 'সন্ধ্যার ডিনার ও ছুটির দিনের জন্য অন্তত ৪৮ থেকে ৭২ ঘণ্টা আগে বুকিং করার পরামর্শ দেওয়া হয়। প্রাইভেট ডাইনিং ভল্ট বা শেফস টেবিলের জন্য ১ থেকে ২ সপ্তাহ আগে বুকিং করা ভালো।'
  },
  {
    id: 'faq-2',
    category: 'menu',
    question: 'Do you cater to dietary restrictions and halal requirements?',
    questionBn: 'আপনারা কি বিশেষ খাদ্যাভ্যাস এবং হালাল খাবার পরিবেশন করেন?',
    answer: 'Absolutely. All our meats are 100% certified Halal, sourced from ethical ranches. Our kitchen also prepares dedicated gluten-free, dairy-free, and gourmet vegan courses upon request.',
    answerBn: 'অবশ্যই। আমাদের সমস্ত মাংস ১০০% হালাল সার্টিফাইড। এছাড়া অনুরোধ সাপেক্ষে গ্লুটেন-মুক্ত ও নিরামিষ ভোজনকারীদের জন্য বিশেষ মেনুর ব্যবস্থা রয়েছে।'
  },
  {
    id: 'faq-3',
    category: 'hours',
    question: 'What is the dress code at LUXE RESTAURANT?',
    questionBn: 'লাক্স রেস্তোরাঁর ড্রেস কোড কী?',
    answer: 'We uphold an Elegant Smart Casual or Formal dress code. We politely ask guests to refrain from athletic sportswear, beach sandals, or sleeveless shirts for gentlemen during dinner service.',
    answerBn: 'আমরা মার্জিত স্মার্ট ক্যাজুয়াল বা ফর্মাল পোশাকের পরামর্শ দিই। সন্ধ্যার ডিনারে পুরুষদের স্লিভলেস শার্ট বা সৈকত স্যান্ডেল না পরার অনুরোধ করা হচ্ছে।'
  },
  {
    id: 'faq-4',
    category: 'delivery',
    question: 'How does fine-dining delivery packaging work?',
    questionBn: 'বিলাসবহুল ডেলিভারি প্যাকেজিং কীভাবে সম্পন্ন হয়?',
    answer: 'All takeaway and gourmet delivery orders are sealed in thermal insulated eco-luxury presentation boxes designed to maintain exact serving temperatures and artistic presentation.',
    answerBn: 'আমাদের প্রতিটি পার্সেল বিশেষ তাপ-রোধী বিলাসবহুল বাক্সে প্যাক করা হয় যাতে খাবারের তাপমাত্রা ও পরিবেশনার মান অক্ষুণ্ণ থাকে।'
  },
  {
    id: 'faq-5',
    category: 'events',
    question: 'Can LUXE host private anniversaries or corporate celebrations?',
    questionBn: 'লাক্স কি ব্যক্তিগত বার্ষিকী বা কর্পোরেট অনুষ্ঠানের আয়োজন করতে পারে?',
    answer: 'Yes, our Private Wine Vault seats up to 16 guests and our Grand Hall accommodates buyouts for up to 90 guests, complete with personalized menus and sommelier guidance.',
    answerBn: 'হ্যাঁ, আমাদের প্রাইভেট ওয়াইন ভল্টে ১৬ জন এবং সম্পূর্ণ গ্র্যান্ড হলে ৯০ জন পর্যন্ত অতিথির বিশেষ আয়োজন ও কাস্টমাইজড মেনুর ব্যবস্থা রয়েছে।'
  }
];

export const DEMO_ADMIN_ORDERS = [
  {
    id: 'ORD-8921',
    customer: 'Naveed Karim',
    phone: '+880 1712-345678',
    items: 'Imperial A5 Wagyu (x1), Sparkling Saffron (x2)',
    totalBDT: 6550,
    status: 'In Kitchen',
    statusBn: 'রান্না চলছে',
    type: 'Delivery (Gulshan-2)',
    time: '12 mins ago'
  },
  {
    id: 'ORD-8920',
    customer: 'Tasneem Farooque',
    phone: '+880 1819-987654',
    items: 'Saffron Lobster Thermidor (x2), Mille-Feuille (x2)',
    totalBDT: 10700,
    status: 'Ready for Pickup',
    statusBn: 'সংগ্রহের জন্য প্রস্তুত',
    type: 'Pickup',
    time: '28 mins ago'
  },
  {
    id: 'ORD-8919',
    customer: 'Zubair Hossain',
    phone: '+880 1911-223344',
    items: 'Lamb Shank (x1), Golden Sphere (x1)',
    totalBDT: 4900,
    status: 'Dispatched',
    statusBn: 'ডেলিভারিতে পাঠানো হয়েছে',
    type: 'Delivery (Banani)',
    time: '45 mins ago'
  }
];

export const DEMO_ADMIN_RESERVATIONS = [
  {
    id: 'RES-401',
    guest: 'Shahidul Alam',
    phone: '+880 1711-445566',
    date: 'Tonight',
    time: '08:00 PM',
    guests: 4,
    area: 'Private Vault',
    status: 'Confirmed'
  },
  {
    id: 'RES-402',
    guest: 'Mehreen Kamal',
    phone: '+880 1912-778899',
    date: 'Tonight',
    time: '08:30 PM',
    guests: 2,
    area: 'Garden Terrace',
    status: 'Arrived'
  },
  {
    id: 'RES-403',
    guest: 'Dr. Asaduzzaman',
    phone: '+880 1817-332211',
    date: 'Tomorrow',
    time: '07:30 PM',
    guests: 6,
    area: 'Main Dining',
    status: 'Pending Deposit'
  }
];
