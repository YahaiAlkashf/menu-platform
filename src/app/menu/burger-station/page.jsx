"use client";
import React, { useState, useMemo, useRef, useEffect } from 'react';

export default function BurgerStationMenu() {
  const categories = [
    { id: 'popular', name: '🔥 الأكثر طلباً' },
    { id: 'beef', name: '🍔 برجر اللحم' },
    { id: 'chicken', name: '🍗 برجر الدجاج' },
    { id: 'sides', name: '🍟 المقبلات' },
    { id: 'drinks', name: '🥤 المشروبات' },
  ];

  const menuItems = [
    // ===== الأكثر طلباً =====
    {
      id: 1, categoryId: 'popular', name: 'تربل بافلو كينج',
      description: '3 شرائح لحم بلدي مشوي، صوص البافلو الحار، جبنة شيدر سائبة، بصل مكرمل وهالابينو',
      price: 240, badge: 'الأكثر مبيعاً',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
    },
    {
      id: 2, categoryId: 'popular', name: 'دوبل تشيز برجر',
      description: 'قطعتين لحم بقري مشوي، دوبل شيدر، مخلل، بصل، وصوص البرجر السري',
      price: 195, badge: 'الأكثر مبيعاً',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80',
    },
    {
      id: 3, categoryId: 'popular', name: 'تشيزي فرايز بركان',
      description: 'بطاطس مقرمشة مغطاة بصوص الجبن الساخن، هالابينو وباربكيو',
      price: 85, badge: 'الأكثر مبيعاً',
      image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&q=80',
    },

    // ===== برجر اللحم =====
    {
      id: 10, categoryId: 'beef', name: 'كلاسيك برجر',
      description: 'شريحة لحم دبل، صوص البرجر الخاص، خس، طماطم، مخلل وجبنة شيدر',
      price: 175,
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80',
    },
    {
      id: 11, categoryId: 'beef', name: 'سموكي بيكون برجر',
      description: 'لحم مشوي على الفحم مع بيكون بقري مدخن، صوص باربكيو وجبنة إيمنتال',
      price: 210, badge: 'جديد',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80',
    },
    {
      id: 12, categoryId: 'beef', name: 'مشروم سويس برجر',
      description: 'لحم بقري مع مشروم سوتيه، جبنة سويس ذائبة، وصوص مايونيز بالثوم',
      price: 190,
      image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80',
    },
    {
      id: 13, categoryId: 'beef', name: 'هالبينو رانش برجر',
      description: 'لحم مشوي، صوص رانش حار، هالابينو مخلل، وجبنة بيبر جاك',
      price: 185,
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&q=80',
    },
    {
      id: 14, categoryId: 'beef', name: 'بي بي كيو رانش برجر',
      description: 'لحم بقري مدخن، صوص باربكيو، حلقات بصل مقرمشة، وجبنة شيدر',
      price: 200,
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80',
    },

    // ===== برجر الدجاج =====
    {
      id: 20, categoryId: 'chicken', name: 'كريسبي زينجر',
      description: 'صدر دجاج مقرمش حار، صوص مايونيز بالثوم، خس كابوتشا وشيدر',
      price: 165, badge: 'الأكثر مبيعاً',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&q=80',
    },
    {
      id: 21, categoryId: 'chicken', name: 'جريلد تشيكن برجر',
      description: 'صدر دجاج مشوي، صوص ثوم ليمون، خس وطماطم وجبنة موزاريلا',
      price: 155,
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&q=80',
    },
    {
      id: 22, categoryId: 'chicken', name: 'بافلو تشيكن برجر',
      description: 'دجاج مقرمش مغطى بصوص بافلو حار، كول سلو وصوص رانش',
      price: 170, badge: 'جديد',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80',
    },
    {
      id: 23, categoryId: 'chicken', name: 'تشيكن سوبريم',
      description: 'قطعتين دجاج مقرمش، جبنة دوبل، مايونيز بالثوم، وخس',
      price: 180,
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80',
    },

    // ===== المقبلات =====
    {
      id: 30, categoryId: 'sides', name: 'بطاطس مقلية',
      description: 'بطاطس مقرمشة ذهبية مع ملح وبهارات خاصة',
      price: 40,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80',
    },
    {
      id: 31, categoryId: 'sides', name: 'تشيزي فرايز',
      description: 'بطاطس مغطاة بصوص الجبن الشيدر الساخن',
      price: 65,
      image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&q=80',
    },
    {
      id: 32, categoryId: 'sides', name: 'أصابع موزاريلا (6 قطع)',
      description: 'أصابع جبنة موزاريلا مقرمشة مع صوص مارينارا',
      price: 70,
      image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=500&q=80',
    },
    {
      id: 33, categoryId: 'sides', name: 'حلقات بصل (8 قطع)',
      description: 'حلقات بصل مقرمشة مع صوص باربكيو',
      price: 55,
      image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80',
    },
    {
      id: 34, categoryId: 'sides', name: 'كول سلو',
      description: 'سلطة كرنب طازج بصوص creamy',
      price: 30,
      image: 'https://images.unsplash.com/photo-1625938145744-e380515399b7?w=500&q=80',
    },

    // ===== المشروبات =====
    {
      id: 40, categoryId: 'drinks', name: 'بيبسي',
      description: 'عبوة كانز 330 مل',
      price: 30,
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80',
    },
    {
      id: 41, categoryId: 'drinks', name: 'كوكاكولا',
      description: 'عبوة كانز 330 مل',
      price: 30,
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=80',
    },
    {
      id: 42, categoryId: 'drinks', name: 'عصير برتقال طازج',
      description: 'كوب 400 مل عصير برتقال طبيعي',
      price: 50, badge: 'طازج',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&q=80',
    },
    {
      id: 43, categoryId: 'drinks', name: 'مياه معدنية',
      description: 'زجاجة 600 مل',
      price: 15,
      image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?w=500&q=80',
    },
  ];

  // ===== State =====
  const [cart, setCart] = useState({});
  const [activeCat, setActiveCat] = useState('popular');
  const [showCart, setShowCart] = useState(false);
  const sectionRefs = useRef({});
  const navRef = useRef(null);

  // ===== Helpers =====
  const addItem = (id) =>
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  const removeItem = (id) =>
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return next;
      next[id] -= 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });

  const deleteItem = (id) =>
    setCart((c) => {
      const next = { ...c };
      delete next[id];
      return next;
    });

  const cartCount = useMemo(
    () => Object.values(cart).reduce((s, q) => s + q, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () =>
      Object.entries(cart).reduce((sum, [id, qty]) => {
        const item = menuItems.find((i) => i.id === Number(id));
        return sum + (item ? item.price * qty : 0);
      }, 0),
    [cart]
  );

  // scroll to category
  const scrollToCat = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 70;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveCat(id);
    }
  };

  // update active category on scroll
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

  // ESC to close + lock scroll when cart drawer open
  useEffect(() => {
    if (!showCart) return;
    const onKey = (e) => e.key === 'Escape' && setShowCart(false);
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [showCart]);

  // ===== WhatsApp message =====
  const buildWhatsAppLink = () => {
    if (cartCount === 0) {
      return `https://wa.me/201112678648?text=${encodeURIComponent(
        'مرحباً، أريد الاستفسار عن المنيو'
      )}`;
    }
    let msg = '🍔 *طلب جديد من Burger Station*\n\n';
    Object.entries(cart).forEach(([id, qty]) => {
      const item = menuItems.find((i) => i.id === Number(id));
      if (item) {
        msg += `• ${item.name} × ${qty} = ${item.price * qty} ج.م\n`;
      }
    });
    msg += `\n💰 *الإجمالي: ${cartTotal} ج.م*\n`;
    msg += `\n📍 من فضلك أكد الطلب والعنوان.`;
    return `https://wa.me/201112678648?text=${encodeURIComponent(msg)}`;
  };

  const clearCart = () => setCart({});

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-40" dir="rtl">
      {/* Header */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/banner.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent flex flex-col justify-end p-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-3xl font-black text-neutral-950 shadow-lg border-2 border-amber-400 overflow-hidden">
              <img src="/images/logo.jpg" alt="Burger Station Logo" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-wide text-white">BURGER STATION</h1>
              <p className="text-amber-400 text-sm font-medium">أقوى طعم للبرجر المشوي على الفحم 🔥</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-neutral-300 mt-2 flex-wrap">
            <span className="flex items-center gap-1 bg-neutral-900/80 px-2.5 py-1 rounded-full border border-neutral-800">
              ⭐ 4.9 (500+)
            </span>
            <span className="flex items-center gap-1 bg-neutral-900/80 px-2.5 py-1 rounded-full border border-neutral-800">
              🕒 30-45 د
            </span>
            <span className="flex items-center gap-1 bg-neutral-900/80 px-2.5 py-1 rounded-full border border-neutral-800 text-emerald-400">
              🟢 مفتوح
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Category Nav */}
      <div
        ref={navRef}
        className="sticky top-0 z-30 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 px-4 py-3"
      >
        <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth max-w-2xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCat === cat.id;
            const count = menuItems.filter((i) => i.categoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => scrollToCat(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat.name}
                <span className={`ms-1 text-[10px] ${isActive ? 'text-neutral-800' : 'text-neutral-500'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu sections */}
      <main className="max-w-2xl mx-auto px-4 mt-6 space-y-8">
        {categories.map((cat) => {
          const items = menuItems.filter((i) => i.categoryId === cat.id);
          return (
            <section
              key={cat.id}
              ref={(el) => (sectionRefs.current[cat.id] = el)}
              id={cat.id}
            >
              <h2 className="text-xl font-black text-amber-400 mb-3 flex items-center gap-2">
                {cat.name}
                <span className="text-xs font-normal text-neutral-500">({items.length})</span>
              </h2>

              <div className="space-y-3">
                {items.map((item) => {
                  const qty = cart[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className="bg-neutral-900/70 border border-neutral-800/80 rounded-2xl p-4 flex gap-4 hover:border-neutral-700 transition-all duration-200 relative overflow-hidden group"
                    >
                      <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-neutral-800">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.badge && (
                          <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col justify-between flex-1 min-w-0">
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-3 gap-2">
                          <span className="text-base font-extrabold text-amber-400 whitespace-nowrap">
                            {item.price}{' '}
                            <span className="text-xs text-neutral-400 font-normal">ج.م</span>
                          </span>

                          {qty === 0 ? (
                            <button
                              onClick={() => addItem(item.id)}
                              className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-neutral-950 text-xs font-bold px-4 py-1.5 rounded-lg transition-all flex items-center gap-1 shadow-md"
                            >
                              <span>إضافة</span>
                              <span className="text-sm font-black">+</span>
                            </button>
                          ) : (
                            <div className="flex items-center gap-1 bg-neutral-800 rounded-lg p-1 border border-neutral-700">
                              <button
                                onClick={() => removeItem(item.id)}
                                aria-label="تقليل"
                                className="w-8 h-8 rounded-md bg-neutral-900 hover:bg-red-600 active:scale-90 text-white font-bold transition-all flex items-center justify-center"
                              >
                                −
                              </button>
                              <span className="w-8 text-center font-extrabold text-amber-400">
                                {qty}
                              </span>
                              <button
                                onClick={() => addItem(item.id)}
                                aria-label="زيادة"
                                className="w-8 h-8 rounded-md bg-amber-500 hover:bg-amber-400 active:scale-90 text-neutral-950 font-bold transition-all flex items-center justify-center"
                              >
                                +
                              </button>
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

     
      {cartCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto">
          <div className="bg-neutral-900/95 backdrop-blur-md border border-neutral-800 rounded-2xl p-3 shadow-2xl shadow-black/60">
            <div className="flex items-center justify-between mb-2 px-1">
              <button
                onClick={clearCart}
                className="text-xs text-red-400 hover:text-red-300 font-bold transition-colors"
              >
                🗑 تفريغ السلة
              </button>
              <span className="text-xs text-neutral-400 font-bold">
                {cartCount} صنف في السلة
              </span>
            </div>
            <button
              onClick={() => setShowCart(true)}
              className="w-full bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-emerald-900/40 flex items-center justify-between transition-all border border-emerald-400/30"
            >
              <div className="flex items-center gap-2">
                <span className="bg-white/20 px-2.5 py-1 rounded-lg text-xs font-extrabold">
                  {cartCount} صنف
                </span>
                <span className="text-sm">عرض الفاتورة وإتمام الطلب</span>
              </div>
              <span className="text-base font-black tracking-wide">
                {cartTotal} ج.م 🧾
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Empty state hint */}
      {cartCount === 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto pointer-events-none">
          <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-xl p-3 text-center text-xs text-neutral-400 shadow-lg">
            🛒 اضغط "إضافة" على أي صنف لبدء الطلب
          </div>
        </div>
      )}

      {/* ===== Cart Drawer ===== */}
      {showCart && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setShowCart(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            style={{ animation: 'fadeIn 0.2s ease-out' }}
          />

          {/* Drawer */}
          <div
            className="fixed bottom-0 left-0 right-0 z-[60] bg-neutral-950 border-t border-neutral-800 rounded-t-3xl shadow-2xl max-h-[88vh] flex flex-col"
            style={{ animation: 'slideUp 0.3s ease-out' }}
          >
            <div className="flex items-center justify-between p-5 border-b border-neutral-800 sticky top-0 bg-neutral-950 z-10 rounded-t-3xl">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧾</span>
                <h2 className="text-lg font-black text-white">فاتورة الطلب</h2>
                <span className="bg-amber-500 text-neutral-950 text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </div>
              <button
                onClick={() => setShowCart(false)}
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 active:scale-90 text-white flex items-center justify-center transition-all"
                aria-label="إغلاق"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {Object.keys(cart).length === 0 ? (
                <div className="text-center py-12">
                  <span className="text-5xl block mb-3">🛒</span>
                  <p className="text-neutral-400 text-sm">السلة فاضية</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="mt-4 text-amber-400 hover:text-amber-300 font-bold text-sm"
                  >
                    ← متابعة التسوق
                  </button>
                </div>
              ) : (
                Object.entries(cart).map(([id, qty]) => {
                  const item = menuItems.find((i) => i.id === Number(id));
                  if (!item) return null;
                  return (
                    <div
                      key={id}
                      className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex gap-3 items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-white truncate">{item.name}</h3>
                        <p className="text-xs text-amber-400 font-bold mt-0.5">
                          {item.price} ج.م × {qty} ={' '}
                          <span className="text-amber-300">{item.price * qty} ج.م</span>
                        </p>
                      </div>

                      {/* Qty controls */}
                      <div className="flex items-center gap-1 bg-neutral-800 rounded-lg p-1 border border-neutral-700 shrink-0">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-7 h-7 rounded-md bg-neutral-900 hover:bg-red-600 active:scale-90 text-white font-bold transition-all flex items-center justify-center text-sm"
                          aria-label="تقليل"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-extrabold text-amber-400">
                          {qty}
                        </span>
                        <button
                          onClick={() => addItem(item.id)}
                          className="w-7 h-7 rounded-md bg-amber-500 hover:bg-amber-400 active:scale-90 text-neutral-950 font-bold transition-all flex items-center justify-center text-sm"
                          aria-label="زيادة"
                        >
                          +
                        </button>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-red-600 active:scale-90 text-neutral-400 hover:text-white flex items-center justify-center transition-all shrink-0"
                        aria-label="حذف الصنف"
                      >
                        🗑
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {cartCount > 0 && (
              <div className="p-4 border-t border-neutral-800 bg-neutral-950 rounded-b-3xl">
                <button
                  onClick={() => setShowCart(false)}
                  className="w-full mb-3 text-sm text-neutral-400 hover:text-amber-400 font-bold py-1 transition-colors"
                >
                  ← متابعة التسوق
                </button>

                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-neutral-400">عدد الأصناف</span>
                  <span className="text-white font-bold">{cartCount}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-neutral-300 font-bold">الإجمالي</span>
                  <span className="text-2xl font-black text-amber-400">
                    {cartTotal} <span className="text-xs text-neutral-400 font-normal">ج.م</span>
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={clearCart}
                    className="px-4 py-3 rounded-xl bg-neutral-800 hover:bg-red-600/20 border border-neutral-700 hover:border-red-600/50 text-neutral-400 hover:text-red-400 font-bold text-sm transition-all"
                  >
                    🗑 تفريغ
                  </button>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 transition-all border border-emerald-400/30"
                  >
                    <span>💬 إرسال الطلب عبر واتساب</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}