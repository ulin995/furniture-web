'use client'

import Image from 'next/image'
import Link from 'next/link'
import {NavItem} from "@/models/Test";
import {useState} from "react";
import { useRouter } from 'next/navigation';
interface NavbarProps {
    items: NavItem[]
}

export default function Navbar({items}: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>('Portfolio');
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        let element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };


    const menuClick = (type: string, label: string) => {
        console.log('menuClick:', type, label);
        if(type === 'parent'){
            setHoveredItem(label);
            if(label === 'Home'){
                router.push(`/home`);
            }else if(label === 'Contact'){
                // scrollToSection('contact_us')
                router.push(`/contactUs`);
            }else if(label === 'About Us'){
                // scrollToSection('corporateInfo_id')
                router.push(`/aboutUs`);
            }
        }else if(type === 'child'){
            let key = '';
            items.forEach((item:any)=>{
                if(item.children){
                    item.children.forEach((child)=>{
                        if(child.label === label){
                            console.log('child:',child.key);
                            key = child.key;
                        }
                    })
                }
            })
            if(key){
                // scrollToSection(key);
                router.push(`/productList/${key}`);
            }
        }
        console.log('menuClick:', type, label);
    }

    return (
        <nav className="relative w-full px-4 py-4 md:px-6 lg:px-4">
            <div className="flex items-center justify-between">
                <Link href="/home" className="flex items-center gap-2">
                    {/* <Image src="https://bdcom.cn/statics/web/fer/upimg/logo_01.svg" alt="AIWEBS" width={32}
                           height={32}/> */}
                    <Image src="/images/furniture-img/logo.png" alt="Elmar Furniture" width={32}
                           height={32}/>


                    <span className="text-xl font-bold">Elmar Furniture</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="items-center hidden gap-8 lg:flex">
                    {items.map((item) => (
                        <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => setHoveredItem(item.label)}
                        onMouseLeave={() => setHoveredItem(null)}
                        >
                        <Link
                            href={item.href}
                            onClick={(e)=>{
                                e.preventDefault();
                                menuClick('parent',item.label);
                                console.log('clicked:', item.label);
                            }}
                            className="relative inline-flex items-center h-16 px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600"
                        >
                            {item.label}
                            {/* 如果有子菜单，显示箭头 */}
                            {item.children && (
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                            )}
                        </Link>

                        {/* 子菜单 */}
                        {item.children && hoveredItem === item.label && (
                            <div className="absolute left-0 z-50 w-56 mt-[-10px] transition-all duration-200 ease-out transform bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                                <div className="py-2">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.label}
                                            href={child.href}
                                            onClick={(e)=>{
                                                e.preventDefault();
                                                menuClick('child',child.label);
                                            }}
                                            className="flex items-center px-5 py-3 text-sm text-gray-600 transition-colors duration-150 hover:bg-gray-50 hover:text-blue-600"
                                        >
                                            {child.label}
                                            <svg 
                                            className="w-4 h-4 ml-auto transition-opacity opacity-0 group-hover:opacity-100" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                            >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M9 5l7 7-7 7"
                                            />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        </div>
                    ))}
                </div>

                {/* <button className="hidden px-6 py-2 text-white bg-black rounded-lg lg:block" onClick={()=>{ scrollToSection('contact_us') }}> */}
                <button className="hidden px-6 py-2 text-white bg-black rounded-lg lg:block" onClick={()=>{ router.push(`/contactUs`)}}>
                    Contact Us
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 right-0 z-50 px-4 py-4 bg-white shadow-lg lg:hidden top-full">
                    <div className="flex flex-col space-y-4">
                        {items.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-gray-600 hover:text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button className="w-full px-6 py-2 text-white bg-black rounded-lg">
                            Contact Us
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}