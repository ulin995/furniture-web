'use client'

import Image from 'next/image'
import {HeroSection} from "@/models/Test"
import {useEffect, useState} from 'react'

interface HeroProps {
    slides: HeroSection[]
    autoPlayInterval?: number
}

export default function Hero({slides, autoPlayInterval = 5000}: HeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, autoPlayInterval)

        return () => clearInterval(timer)
    }, [slides.length, autoPlayInterval])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    return (
        <section className="
            px-4 py-8                    /* 移动端默认间距 */
            tablet:px-6 tablet:py-12     /* 平板间距 */
            desktop:px-20 desktop:py-20   /* 桌面间距 */
        ">
            <div className="max-w-[1440px] mx-auto grid gap-8 items-center">
                {/* 内容区域 */}
                <div className="
                    space-y-6                          /* 移动端垂直堆叠 */
                    tablet:space-y-0 tablet:flex       /* 平板开始水平排列 */
                    tablet:gap-8 tablet:items-center
                ">
                    <h1 className="
                        text-3xl font-bold text-navy-900 leading-tight    /* 移动端字体 */
                        tablet:text-5xl tablet:w-[60%]                    /* 平板字体和宽度 */
                        desktop:text-6xl                                  /* 桌面字体 */
                    ">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="
                        text-base text-gray-600       /* 移动端字体 */
                        tablet:text-lg tablet:w-[40%] /* 平板字体和宽度 */
                    ">
                        {slides[currentSlide].description}
                    </p>
                </div>

                {/* 图片区域 */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden group">
                    <Image
                        src={slides[currentSlide].image}
                        alt="Hero image"
                        fill
                        className="object-cover transition-transform duration-500"
                        priority
                    />

                    {/*/!* 播放按钮 *!/*/}
                    {/*<div className="absolute inset-0 flex items-center justify-center">*/}
                    {/*    <button className="*/}
                    {/*        w-12 h-12                */}
                    {/*        tablet:w-14 tablet:h-14 */}
                    {/*        desktop:w-16 desktop:h-16 */}
                    {/*        bg-white rounded-full flex items-center justify-center shadow-lg*/}
                    {/*    ">*/}
                    {/*        <svg width="24" height="24" viewBox="0 0 24 24">*/}
                    {/*            <path fill="currentColor" d="M8 5v14l11-7z"/>*/}
                    {/*        </svg>*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                    {/* 左右箭头 - 在移动端隐藏 */}
                    <button
                        onClick={prevSlide}
                        className="
                            hidden                     /* 移动端隐藏 */
                            tablet:block               /* 平板以上显示 */
                            absolute left-4 top-1/2 -translate-y-1/2 
                            bg-white/80 p-2 rounded-full 
                            opacity-0 group-hover:opacity-100 transition-opacity
                        "
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="
                            hidden                     /* 移动端隐藏 */
                            tablet:block               /* 平板以上显示 */
                            absolute right-4 top-1/2 -translate-y-1/2 
                            bg-white/80 p-2 rounded-full 
                            opacity-0 group-hover:opacity-100 transition-opacity
                        "
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                        </svg>
                    </button>

                    {/* 指示器 */}
                    <div className="
                        absolute bottom-4 left-1/2 -translate-x-1/2 
                        flex gap-2
                    ">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`
                                    w-2 h-2 
                                    tablet:w-3 tablet:h-3 
                                    rounded-full transition-all 
                                    ${currentSlide === index
                                    ? 'bg-white w-4 tablet:w-6'
                                    : 'bg-white/50'
                                }
                                `}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}