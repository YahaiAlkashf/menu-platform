"use client";
import React, { useState, useMemo, useRef, useEffect } from 'react';

export default function ElSharkawyMenu() {
  // ===== الأقسام =====
  const categories = [
    { id: 'liver', name: '🥩 الكبدة' },
    { id: 'brain', name: '🧠 المخ' },
    { id: 'mix', name: '🍖 المشكل' },
    { id: 'shrimp', name: '🍤 الجمبري' },
    { id: 'fillet', name: '🐟 الفيليه' },
    { id: 'sandwiches', name: '🥪 السندوتشات' },
    { id: 'rice', name: '🍚 الأرز' },
    { id: 'extras', name: '🥗 إضافات' },
  ];

  // ===== الأصناف =====
  const menuItems = [
    // ===== الكبدة =====
    { id: 10, categoryId: 'liver', name: 'كبدة (كيلو)', description: 'كبدة بلدي مشوية على الفحم', price: 400, image: '/images/menu-images/el-sharkawy/كبدة.jpg' },
    { id: 11, categoryId: 'liver', name: 'كبدة (3/4 كيلو)', description: 'كبدة بلدي مشوية على الفحم', price: 300, image: '/images/menu-images/el-sharkawy/كبدة.jpg' },
    { id: 12, categoryId: 'liver', name: 'كبدة (نص كيلو)', description: 'كبدة بلدي مشوية على الفحم', price: 200, image: '/images/menu-images/el-sharkawy/كبدة.jpg' },
    { id: 13, categoryId: 'liver', name: 'كبدة (ربع كيلو)', description: 'كبدة بلدي مشوية على الفحم', price: 165, image: '/images/menu-images/el-sharkawy/كبدة.jpg' },
    { id: 14, categoryId: 'liver', name: 'كبدة (ثمن كيلو)', description: 'كبدة بلدي مشوية على الفحم', price: 110, image: '/images/menu-images/el-sharkawy/كبدة.jpg' },
    { id: 15, categoryId: 'liver', name: 'كبدة (1/8 كيلو)', description: 'كبدة بلدي مشوية على الفحم', price: 60, image: '/images/menu-images/el-sharkawy/كبدة.jpg' },

    // ===== المخ =====
    { id: 20, categoryId: 'brain', name: 'المخ (كيلو)', description: 'مخ بلدي مشوي على الفحم', price: 950, image: '/images/menu-images/el-sharkawy/مخ.jpg' },
    { id: 21, categoryId: 'brain', name: 'المخ (3/4 كيلو)', description: 'مخ بلدي مشوي على الفحم', price: 715, image: '/images/menu-images/el-sharkawy/مخ.jpg' },
    { id: 22, categoryId: 'brain', name: 'المخ (نص كيلو)', description: 'مخ بلدي مشوي على الفحم', price: 475, image: '/images/menu-images/el-sharkawy/مخ.jpg' },
    { id: 23, categoryId: 'brain', name: 'المخ (ربع كيلو)', description: 'مخ بلدي مشوي على الفحم', price: 360, image: '/images/menu-images/el-sharkawy/مخ.jpg' },
    { id: 24, categoryId: 'brain', name: 'المخ (ثمن كيلو)', description: 'مخ بلدي مشوي على الفحم', price: 245, image: '/images/menu-images/el-sharkawy/مخ.jpg' },
    { id: 25, categoryId: 'brain', name: 'المخ (1/8 كيلو)', description: 'مخ بلدي مشوي على الفحم', price: 125, image: '/images/menu-images/el-sharkawy/مخ.jpg' },

    // ===== المشكل =====
    { id: 30, categoryId: 'mix', name: 'مشكل (كيلو)', description: 'تشكيلة مشويات فاخرة', price: 580, image: '/images/menu-images/el-sharkawy/مشكل.jpg' },
    { id: 31, categoryId: 'mix', name: 'مشكل (3/4 كيلو)', description: 'تشكيلة مشويات فاخرة', price: 435, image: '/images/menu-images/el-sharkawy/مشكل.jpg' },
    { id: 32, categoryId: 'mix', name: 'مشكل (نص كيلو)', description: 'تشكيلة مشويات فاخرة', price: 290, image: '/images/menu-images/el-sharkawy/مشكل.jpg' },
    { id: 33, categoryId: 'mix', name: 'مشكل (ربع كيلو)', description: 'تشكيلة مشويات فاخرة', price: 230, image: '/images/menu-images/el-sharkawy/مشكل.jpg' },
    { id: 34, categoryId: 'mix', name: 'مشكل (ثمن كيلو)', description: 'تشكيلة مشويات فاخرة', price: 150, image: '/images/menu-images/el-sharkawy/مشكل.jpg' },
    { id: 35, categoryId: 'mix', name: 'مشكل (1/8 كيلو)', description: 'تشكيلة مشويات فاخرة', price: 80, image: '/images/menu-images/el-sharkawy/مشكل.jpg' },

    // ===== الجمبري =====
    { id: 40, categoryId: 'shrimp', name: 'جمبري (كيلو)', description: 'جمبري طازج مشوي أو مقلي', price: 1200, image: '/images/menu-images/el-sharkawy/جمبرى.png' },
    { id: 41, categoryId: 'shrimp', name: 'جمبري (3/4 كيلو)', description: 'جمبري طازج مشوي أو مقلي', price: 900, image: '/images/menu-images/el-sharkawy/جمبرى.png' },
    { id: 42, categoryId: 'shrimp', name: 'جمبري (نص كيلو)', description: 'جمبري طازج مشوي أو مقلي', price: 600, image: '/images/menu-images/el-sharkawy/جمبرى.png' },
    { id: 43, categoryId: 'shrimp', name: 'جمبري (ربع كيلو)', description: 'جمبري طازج مشوي أو مقلي', price: 450, image: '/images/menu-images/el-sharkawy/جمبرى.png' },
    { id: 44, categoryId: 'shrimp', name: 'جمبري (ثمن كيلو)', description: 'جمبري طازج مشوي أو مقلي', price: 300, image: '/images/menu-images/el-sharkawy/جمبرى.png' },
    { id: 45, categoryId: 'shrimp', name: 'جمبري (1/8 كيلو)', description: 'جمبري طازج مشوي أو مقلي', price: 100, image: '/images/menu-images/el-sharkawy/جمبرى.png' },

    // ===== الفيليه =====
    { id: 50, categoryId: 'fillet', name: 'فيليه (كيلو)', description: 'فيليه سمك طازج مشوي', price: 450, image: '/images/menu-images/el-sharkawy/فيلية.jpg' },
    { id: 51, categoryId: 'fillet', name: 'فيليه (3/4 كيلو)', description: 'فيليه سمك طازج مشوي', price: 340, image: '/images/menu-images/el-sharkawy/فيلية.jpg' },
    { id: 52, categoryId: 'fillet', name: 'فيليه (نص كيلو)', description: 'فيليه سمك طازج مشوي', price: 225, image: '/images/menu-images/el-sharkawy/فيلية.jpg' },
    { id: 53, categoryId: 'fillet', name: 'فيليه (ربع كيلو)', description: 'فيليه سمك طازج مشوي', price: 195, image: '/images/menu-images/el-sharkawy/فيلية.jpg' },
    { id: 54, categoryId: 'fillet', name: 'فيليه (ثمن كيلو)', description: 'فيليه سمك طازج مشوي', price: 130, image: '/images/menu-images/el-sharkawy/فيلية.jpg' },
    { id: 55, categoryId: 'fillet', name: 'فيليه (1/8 كيلو)', description: 'فيليه سمك طازج مشوي', price: 70, image: '/images/menu-images/el-sharkawy/فيلية.jpg' },

    // ===== السندوتشات =====
    { 
      id: 60, categoryId: 'sandwiches', name: 'ساندوتش كبدة', description: 'كبدة إسكندراني في العيش', 
      variants: [
        { id: '60-m', name: 'عيش مركب', price: 60 },
        { id: '60-b', name: 'عيش بلدي', price: 30 }
      ], 
      image: '/images/menu-images/el-sharkawy/سندوتش كبدة.jpg' 
    },
    { 
      id: 61, categoryId: 'sandwiches', name: 'ساندوتش مخ', description: 'مخ بلدي مشوي في العيش', 
      variants: [
        { id: '61-m', name: 'عيش مركب', price: 130 },
        { id: '61-b', name: 'عيش بلدي', price: 65 }
      ], 
      image: '/images/menu-images/el-sharkawy/سندوتش مخ.jpeg' 
    },
    { 
      id: 62, categoryId: 'sandwiches', name: 'ساندوتش مشكل', description: 'تشكيلة مشويات في العيش', 
      variants: [
        { id: '62-m', name: 'عيش مركب', price: 80 },
        { id: '62-b', name: 'عيش بلدي', price: 40 }
      ], 
      image: '/images/menu-images/el-sharkawy/سندوتش مشكل.jpeg'
    },
    { 
      id: 63, categoryId: 'sandwiches', name: 'ساندوتش جمبري', description: 'جمبري مقلي في العيش', 
      variants: [
        { id: '63-m', name: 'عيش مركب', price: 150 },
        { id: '63-b', name: 'عيش بلدي', price: 75 }
      ], 
      image: '/images/menu-images/el-sharkawy/سندوتش جمبرى.jpg' 
    },
    { 
      id: 64, categoryId: 'sandwiches', name: 'ساندوتش فيليه', description: 'فيليه سمك في العيش', 
      variants: [
        { id: '64-m', name: 'عيش مركب', price: 80 },
        { id: '64-b', name: 'عيش بلدي', price: 40 }
      ], 
      image: '/images/menu-images/el-sharkawy/سندوتش فيلية.jpeg'
    },
    { 
      id: 65, categoryId: 'sandwiches', name: 'ساندوتش كبدة إسكندراني', description: 'لحمة إسكندراني في العيش', 
      variants: [
        { id: '65-m', name: 'عيش مركب', price: 30 },
        { id: '65-b', name: 'عيش بلدي', price: 30 }
      ], 
      image: '/images/menu-images/el-sharkawy/كبدة اسكندرانى.jpg'
    },

    // ===== الأرز =====
    { id: 70, categoryId: 'rice', name: 'أرز بالكبدة', description: 'أرز مبهر مع قطع كبدة', price: 55, image: '/images/menu-images/el-sharkawy/ارز بالكبدة.jpg' },
    { id: 71, categoryId: 'rice', name: 'أرز بالجمبري', description: 'أرز مبهر مع جمبري', price: 95, image: '/images/menu-images/el-sharkawy/أرز بالجمبرى.jpg' },
    { id: 72, categoryId: 'rice', name: 'أرز بالفيليه', description: 'أرز مبهر مع فيليه سمك', price: 75, image: '/images/menu-images/el-sharkawy/ارز فيلية.jpg' },
    { id: 73, categoryId: 'rice', name: 'أرز سادة', description: 'أرز أبيض مسلوق', price: 25, image: '/images/menu-images/el-sharkawy/أرز سادة.jpg' },

    // ===== الإضافات =====
    { id: 90, categoryId: 'extras', name: 'طبق طحينة', description: 'طحينة بلدي', price: 7, image: '/images/menu-images/el-sharkawy/طحينة.jpg' },
    { id: 91, categoryId: 'extras', name: 'طبق سلطة كبدة', description: 'سلطة كبدة إسكندراني', price: 7, image: '/images/menu-images/el-sharkawy/سلطة كبدة.png' },
    { id: 92, categoryId: 'extras', name: 'طبق سلطة خضراء', description: 'خضروات طازجة', price: 7, image: '/images/menu-images/el-sharkawy/سلطة خضراء.png' },
    { id: 93, categoryId: 'extras', name: 'طبق خيار', description: 'خيار بارد', price: 10, image: '/images/menu-images/el-sharkawy/طبق خيار.jpg' },
    { id: 94, categoryId: 'extras', name: 'طبق باذنجان', description: 'باذنجان مشوي', price: 10, image: '/images/menu-images/el-sharkawy/طبق باذنجان.jpg' },
  ];

  // ===== State =====
  const [cart, setCart] = useState({});
  const [activeCat, setActiveCat] = useState('liver');
  const [showCart, setShowCart] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0); // 👈 State البانر
  const sectionRefs = useRef({});
  const navRef = useRef(null);

  // ===== Helpers =====
  const addItem = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeItem = (id) => setCart((c) => {
    const next = { ...c };
    if (!next[id]) return next;
    next[id] -= 1;
    if (next[id] <= 0) delete next[id];
    return next;
  });
  const deleteItem = (id) => setCart((c) => { const next = { ...c }; delete next[id]; return next; });

  const cartCount = useMemo(() => Object.values(cart).reduce((s, q) => s + q, 0), [cart]);
  
  const cartTotal = useMemo(() => Object.entries(cart).reduce((sum, [id, qty]) => {
    let price = 0;
    const item = menuItems.find((i) => i.id === Number(id));
    if (item) {
      price = item.price;
    } else {
      for (const menuItem of menuItems) {
        if (menuItem.variants) {
          const variant = menuItem.variants.find(v => v.id === id);
          if (variant) {
            price = variant.price;
            break;
          }
        }
      }
    }
    return sum + (price * qty);
  }, 0), [cart]);

  const scrollToCat = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveCat(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset + 100;
      let current = categories[0].id;
      for (const cat of categories) {
        const el = sectionRefs.current[cat.id];
        if (el && el.offsetTop <= scrollPos) current = cat.id;
      }
      setActiveCat(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 👈 Effect بتاع السلايدر (بيتحرك كل 4 ثواني)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!showCart) return;
    const onKey = (e) => e.key === 'Escape' && setShowCart(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [showCart]);

  const buildWhatsAppLink = () => {
    if (cartCount === 0) return `https://wa.me/201099919144?text=${encodeURIComponent('مرحباً، أريد الاستفسار عن المنيو')}`;
    let msg = '🥩 *طلب جديد من الشرقاوي*\n\n';
    Object.entries(cart).forEach(([id, qty]) => {
      const item = menuItems.find((i) => i.id === Number(id));
      if (item) {
        msg += `• ${item.name} × ${qty} = ${item.price * qty} ج.م\n`;
      } else {
        for (const menuItem of menuItems) {
          if (menuItem.variants) {
            const variant = menuItem.variants.find(v => v.id === id);
            if (variant) {
              msg += `• ${menuItem.name} (${variant.name}) × ${qty} = ${variant.price * qty} ج.م\n`;
              break;
            }
          }
        }
      }
    });
    msg += `\n💰 *الإجمالي: ${cartTotal} ج.م*\n`;
    msg += `\n📍 من فضلك أكد الطلب والعنوان.`;
    return `https://wa.me/201099919144?text=${encodeURIComponent(msg)}`;
  };

  const clearCart = () => setCart({});

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-40" dir="rtl">
      {/* Header */}
      <div className="relative w-full bg-neutral-950 flex justify-center border-b border-neutral-800">
        {/* === السلايدر بتاع البانرات === */}
        <div className="relative w-full max-w-2xl aspect-[2/1] sm:aspect-[2.5/1] overflow-hidden">
          <img 
            src="/images/menu-images/el-sharkawy/banner1.jpg" 
            alt="Banner 1" 
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${currentBanner === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
          />
          <img 
            src="/images/menu-images/el-sharkawy/banner2.jpg" 
            alt="Banner 2" 
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${currentBanner === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
          />
          
          {/* النقط اللي تحت */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-30">
            <button onClick={() => setCurrentBanner(0)} className={`h-1.5 rounded-full transition-all ${currentBanner === 0 ? 'bg-red-500 w-5' : 'bg-white/50 w-1.5'}`} aria-label="Banner 1"></button>
            <button onClick={() => setCurrentBanner(1)} className={`h-1.5 rounded-full transition-all ${currentBanner === 1 ? 'bg-red-500 w-5' : 'bg-white/50 w-1.5'}`} aria-label="Banner 2"></button>
          </div>
        </div>
      </div>

      {/* === بيانات المطعم (شريط سفلي تحت البانر مباشرة) === */}
      <div className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-red-700 flex items-center justify-center text-2xl font-black text-white shadow-lg border-2 border-red-500 overflow-hidden shrink-0">
              <img src="/images/menu-images/el-sharkawy/logo.jpg" alt="El Sharkawy" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerText = '👨‍🍳'; }} />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-wide text-white">الشرقاوي</h1>
              <p className="text-red-500 text-xs font-medium">   طعم يستحق التجربة  🔥</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 bg-neutral-900 px-2 py-1 rounded-full border border-neutral-800 text-[10px] text-emerald-400 font-bold">🟢 مفتوح</span>
          </div>
        </div>
      </div>
      {/* Sticky Nav */}
      <div ref={navRef} className="sticky top-0 z-30 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 px-4 py-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth max-w-2xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCat === cat.id;
            const count = menuItems.filter((i) => i.categoryId === cat.id).length;
            return (
              <button key={cat.id} onClick={() => scrollToCat(cat.id)} className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${isActive ? 'bg-red-600 text-white shadow-md shadow-red-500/20' : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'}`}>
                {cat.name}
                <span className={`ms-1 text-[10px] ${isActive ? 'text-neutral-200' : 'text-neutral-500'}`}>({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Sections */}
      <main className="max-w-2xl mx-auto px-4 mt-6 space-y-8">
        {categories.map((cat) => {
          const items = menuItems.filter((i) => i.categoryId === cat.id);
          return (
            <section key={cat.id} ref={(el) => (sectionRefs.current[cat.id] = el)} id={cat.id}>
              <h2 className="text-xl font-black text-red-500 mb-3 flex items-center gap-2">
                {cat.name}
                <span className="text-xs font-normal text-neutral-500">({items.length})</span>
              </h2>
              <div className="space-y-3">
                {items.map((item) => {
                  if (item.variants) {
                    return (
                      <div key={item.id} className="bg-neutral-900/70 border border-neutral-800/80 rounded-2xl p-4 flex gap-4 hover:border-neutral-700 transition-all duration-200 relative overflow-hidden group">
                        <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-neutral-800">
                          <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="flex flex-col justify-between flex-1 min-w-0">
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">{item.name}</h3>
                            <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
                          </div>
                          <div className="flex flex-col gap-2 mt-3">
                            {item.variants.map((variant) => {
                              const qty = cart[variant.id] || 0;
                              return (
                                <div key={variant.id} className="flex items-center justify-between gap-2 bg-neutral-800/50 p-2 rounded-xl border border-neutral-700/50">
                                  <div className="flex flex-col">
                                    <span className="text-sm font-bold text-neutral-200">{variant.name}</span>
                                    <span className="text-sm font-extrabold text-red-500">{variant.price} <span className="text-xs text-neutral-400 font-normal">ج.م</span></span>
                                  </div>
                                  {qty === 0 ? (
                                    <button onClick={() => addItem(variant.id)} className="bg-red-600 hover:bg-red-500 active:scale-95 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-all flex items-center gap-1 shadow-md"><span>إضافة</span><span className="text-sm font-black">+</span></button>
                                  ) : (
                                    <div className="flex items-center gap-1 bg-neutral-900 rounded-lg p-1 border border-neutral-700">
                                      <button onClick={() => removeItem(variant.id)} aria-label="تقليل" className="w-8 h-8 rounded-md bg-neutral-800 hover:bg-red-600 active:scale-90 text-white font-bold transition-all flex items-center justify-center">−</button>
                                      <span className="w-8 text-center font-extrabold text-red-500">{qty}</span>
                                      <button onClick={() => addItem(variant.id)} aria-label="زيادة" className="w-8 h-8 rounded-md bg-red-600 hover:bg-red-500 active:scale-90 text-white font-bold transition-all flex items-center justify-center">+</button>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const qty = cart[item.id] || 0;
                  return (
                    <div key={item.id} className="bg-neutral-900/70 border border-neutral-800/80 rounded-2xl p-4 flex gap-4 hover:border-neutral-700 transition-all duration-200 relative overflow-hidden group">
                      <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-neutral-800">
                        <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        {item.badge && <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md">{item.badge}</span>}
                      </div>
                      <div className="flex flex-col justify-between flex-1 min-w-0">
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">{item.name}</h3>
                          <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3 gap-2">
                          <span className="text-base font-extrabold text-red-500 whitespace-nowrap">{item.price} <span className="text-xs text-neutral-400 font-normal">ج.م</span></span>
                          {qty === 0 ? (
                            <button onClick={() => addItem(item.id)} className="bg-red-600 hover:bg-red-500 active:scale-95 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-all flex items-center gap-1 shadow-md"><span>إضافة</span><span className="text-sm font-black">+</span></button>
                          ) : (
                            <div className="flex items-center gap-1 bg-neutral-800 rounded-lg p-1 border border-neutral-700">
                              <button onClick={() => removeItem(item.id)} aria-label="تقليل" className="w-8 h-8 rounded-md bg-neutral-900 hover:bg-red-600 active:scale-90 text-white font-bold transition-all flex items-center justify-center">−</button>
                              <span className="w-8 text-center font-extrabold text-red-500">{qty}</span>
                              <button onClick={() => addItem(item.id)} aria-label="زيادة" className="w-8 h-8 rounded-md bg-red-600 hover:bg-red-500 active:scale-90 text-white font-bold transition-all flex items-center justify-center">+</button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>

      {/* Floating Order Bar */}
      {cartCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto">
          <div className="bg-neutral-900/95 backdrop-blur-md border border-neutral-800 rounded-2xl p-3 shadow-2xl shadow-black/60">
            <div className="flex items-center justify-between mb-2 px-1">
              <button onClick={clearCart} className="text-xs text-red-400 hover:text-red-300 font-bold transition-colors">🗑 تفريغ السلة</button>
              <span className="text-xs text-neutral-400 font-bold">{cartCount} صنف في السلة</span>
            </div>
            <button onClick={() => setShowCart(true)} className="w-full bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-emerald-900/40 flex items-center justify-between transition-all border border-emerald-400/30">
              <div className="flex items-center gap-2">
                <span className="bg-white/20 px-2.5 py-1 rounded-lg text-xs font-extrabold">{cartCount} صنف</span>
                <span className="text-sm">عرض الفاتورة وإتمام الطلب</span>
              </div>
              <span className="text-base font-black tracking-wide">{cartTotal} ج.م 🧾</span>
            </button>
          </div>
        </div>
      )}

      {/* Empty State Hint */}
      {cartCount === 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto pointer-events-none">
          <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-xl p-3 text-center text-xs text-neutral-400 shadow-lg">
            🛒 اضغط "إضافة" على أي صنف لبدء الطلب
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {showCart && (
        <>
          <div onClick={() => setShowCart(false)} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" style={{ animation: 'fadeIn 0.2s ease-out' }} />
          <div className="fixed bottom-0 left-0 right-0 z-[60] bg-neutral-950 border-t border-neutral-800 rounded-t-3xl shadow-2xl max-h-[88vh] flex flex-col" style={{ animation: 'slideUp 0.3s ease-out' }}>
            <div className="flex items-center justify-between p-5 border-b border-neutral-800 sticky top-0 bg-neutral-950 z-10 rounded-t-3xl">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧾</span>
                <h2 className="text-lg font-black text-white">فاتورة الطلب</h2>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{cartCount}</span>
              </div>
              <button onClick={() => setShowCart(false)} className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 active:scale-90 text-white flex items-center justify-center transition-all" aria-label="إغلاق">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {Object.keys(cart).length === 0 ? (
                <div className="text-center py-12">
                  <span className="text-5xl block mb-3">🛒</span>
                  <p className="text-neutral-400 text-sm">السلة فاضية</p>
                  <button onClick={() => setShowCart(false)} className="mt-4 text-red-500 hover:text-red-400 font-bold text-sm">← متابعة التسوق</button>
                </div>
              ) : (
                Object.entries(cart).map(([id, qty]) => {
                  let itemName = '';
                  let itemPrice = 0;
                  let itemImage = '';

                  const item = menuItems.find((i) => i.id === Number(id));
                  if (item) {
                    itemName = item.name;
                    itemPrice = item.price;
                    itemImage = item.image;
                  } else {
                    for (const menuItem of menuItems) {
                      if (menuItem.variants) {
                        const variant = menuItem.variants.find(v => v.id === id);
                        if (variant) {
                          itemName = `${menuItem.name} (${variant.name})`;
                          itemPrice = variant.price;
                          itemImage = menuItem.image;
                          break;
                        }
                      }
                    }
                  }

                  if (!itemName) return null;

                  return (
                    <div key={id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex gap-3 items-center">
                      <img src={itemImage} alt={itemName} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-white truncate">{itemName}</h3>
                        <p className="text-xs text-red-400 font-bold mt-0.5">{itemPrice} ج.م × {qty} = <span className="text-red-300">{itemPrice * qty} ج.م</span></p>
                      </div>
                      <div className="flex items-center gap-1 bg-neutral-800 rounded-lg p-1 border border-neutral-700 shrink-0">
                        <button onClick={() => removeItem(id)} className="w-7 h-7 rounded-md bg-neutral-900 hover:bg-red-600 active:scale-90 text-white font-bold transition-all flex items-center justify-center text-sm">−</button>
                        <span className="w-6 text-center text-sm font-extrabold text-red-500">{qty}</span>
                        <button onClick={() => addItem(id)} className="w-7 h-7 rounded-md bg-red-600 hover:bg-red-500 active:scale-90 text-white font-bold transition-all flex items-center justify-center text-sm">+</button>
                      </div>
                      <button onClick={() => deleteItem(id)} className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-red-600 active:scale-90 text-neutral-400 hover:text-white flex items-center justify-center transition-all shrink-0" aria-label="حذف الصنف">🗑</button>
                    </div>
                  );
                })
              )}
            </div>
            {cartCount > 0 && (
              <div className="p-4 border-t border-neutral-800 bg-neutral-950 rounded-b-3xl">
                <button onClick={() => setShowCart(false)} className="w-full mb-3 text-sm text-neutral-400 hover:text-red-400 font-bold py-1 transition-colors">← متابعة التسوق</button>
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-neutral-400">عدد الأصناف</span>
                  <span className="text-white font-bold">{cartCount}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-neutral-300 font-bold">الإجمالي</span>
                  <span className="text-2xl font-black text-red-500">{cartTotal} <span className="text-xs text-neutral-400 font-normal">ج.م</span></span>
                </div>
                <div className="flex gap-2">
                  <button onClick={clearCart} className="px-4 py-3 rounded-xl bg-neutral-800 hover:bg-red-600/20 border border-neutral-700 hover:border-red-600/50 text-neutral-400 hover:text-red-400 font-bold text-sm transition-all">🗑 تفريغ</button>
                  <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex-1 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 transition-all border border-emerald-400/30">
                    <span>💬 إرسال الطلب عبر واتساب</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* ===== MenuFQ Footer ===== */}
      <div className="w-full mt-12 mb-4 pb-32 flex flex-col items-center justify-center">
        <a 
          href="https://wa.me/201112678648" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800/60 hover:border-[#06b6d4]/50 px-5 py-3 rounded-2xl transition-all duration-300 shadow-lg"
        >
          <span className="text-xs text-neutral-400 font-medium group-hover:text-neutral-300 transition-colors">
            تم التنفيذ بواسطة
          </span>
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="MenuFQ Logo" 
              className="w-10 h-10 rounded-full object-cover border-2 border-[#06b6d4] shadow-[0_0_10px_rgba(6,182,212,0.3)]" 
            />
            <span className="text-lg font-black bg-gradient-to-l from-[#06b6d4] to-[#f59e0b] bg-clip-text text-transparent tracking-wide">
              MenuFQ
            </span>
          </div>
        </a>
      </div>

      {/* Global animations */}
      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>
    </div>
  );
}