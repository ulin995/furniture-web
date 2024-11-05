'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonial', href: '/testimonial' },
    { name: 'Pricing Plan', href: '/pricing' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <div className="relative min-h-screen">
      {/* 背景图片和遮罩层 */}
      <div className="absolute inset-0">
        <Image
          src="/images/head_big_bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 导航栏 */}
      <nav className="relative z-50 px-[20px] py-4 max-w-[1440px] mx-auto">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo区域 */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full">
                <img className="w-full" src="/images/ai_logo.png" alt="AIWEBS" />
              </div>
              <span className="text-2xl font-bold text-white">AIWEBS</span>
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden space-x-8 md:flex">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-white transition-colors hover:text-purple-300 hover:font-bold"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <button 
              className="text-white md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* 移动端菜单展开 */}
          {isMenuOpen && (
            <div className="fixed left-0 right-0 top-[72px] py-4 mt-0 md:hidden bg-black/90 z-50">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-2 text-white transition-colors hover:bg-purple-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* 主要内容区域 */}
      <div className="container relative z-10 flex flex-col justify-center items-center px-6 mx-auto text-center text-white min-h-[calc(100vh-200px)]">
        <h1 className="mb-6 text-[3rem] leading-[3rem] min-[800px]:text-[5.5rem] min-[800px]:leading-[5.5rem] font-bold">
          The easiest way to<br />create your website.
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Golio gives you everything you need to create your website in minutes. Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.
        </p>
        <button className="px-8 py-3 text-white font-bold transition-colors bg-black rounded-[7px] hover:bg-purple-500 hover:text-white">
          Let's Work Together →
        </button>
      </div>
      {/* 滚动提示 */}
      <div className="absolute text-sm text-white flex justify-center flex-col items-center transform -translate-x-1/2 bottom-[30px] left-1/2">
          Scroll down
          <div className="mt-2">↓</div>
      </div>
    </div>
  );
};

export default Header3;