import Hero from '@/components/Hero'
import {HeroSection, navItems} from "@/models/Test";
import Product from '@/components/product';
import ContactUs from '@/components/contactUs';
import CorporateInfo from '@/components/corporateInfo';

import React from "react";
import {Pricing} from "aiwebs-ui-components";

export async function generateStaticParams() {
    // 定义所有可能的语言选项
    return [
      { lang: 'en' },
      { lang: 'zh' }
    ]
  }

const heroSlides: HeroSection[] = [
    {
        title: "Modern Minimalist Furniture Collection",
        description: "Premium materials crafted into elegant living spaces for your modern lifestyle",
        image: "/images/furniture-img/home-banner-01.png"
    },
    {
        title: "Premium Bedroom Furniture Sets",
        description: "Create your perfect sanctuary with our carefully curated bedroom collections",
        image: "/images/furniture-img/home-banner-02.png"
    },
    {
        title: "Complete Living Room Solutions",
        description: "Professionally designed furniture combinations that perfectly balance style and functionality",
        image: "/images/furniture-img/home-banner-03.png"
    }
]

export default function Home() {
    return (
        <main className="min-h-screen">
            
            <Hero slides={heroSlides} autoPlayInterval={5000}/>
            <Product title={{value:"Top Products"}}/>
            <Product title={{value:"Shop by Category"}}/>
            <ContactUs/>
            <CorporateInfo/>
        </main>
    )
}