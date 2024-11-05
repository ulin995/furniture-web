"use client"
import React,{ useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation'
import productData from '@/models/product.json';

export default function Product(props:{
    title:{value:string}
}) {
    const router = useRouter()
    // 添加选中菜单状态
    const [selectedMenu, setSelectedMenu] = useState(productData[0]?.menuName);
    const [currentIndex, setCurrentIndex] = useState(0);

    // 根据选中菜单过滤商品数据
    const filteredProducts = useMemo(() => {
        const selectedCategory = productData.find(item => item.menuName === selectedMenu);
        return selectedCategory?.goods || [];
    }, [selectedMenu]);

     // 将过滤后的产品分组，每组6个
     const productGroups = useMemo(() => {
        const groups = [];
        for (let i = 0; i < filteredProducts.length; i += 6) {
            groups.push(filteredProducts.slice(i, i + 6));
        }
        return groups;
    }, [filteredProducts]);

    const totalSlides = productGroups.length;
    
    // 重置当前索引
    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedMenu]);

    // 切换到下一张
    const nextSlide = useCallback(() => {
        setCurrentIndex(current => (current + 1) % totalSlides);
    }, [totalSlides]);

    // 切换到上一张
    const prevSlide = useCallback(() => {
        setCurrentIndex(current => (current - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    // 自动轮播
    useEffect(() => {
        const timer = setInterval(nextSlide, 300000); // 每3秒切换一次

        return () => clearInterval(timer); // 清理定时器
    }, [nextSlide]);

    // 添加鼠标拖动相关状态
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // 鼠标按下
    const handleMouseDown = (e: MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeft(currentIndex);
    };
    // 鼠标移动
    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        
        const x = e.pageX;
        const walk = (startX - x) / 100; // 调整灵敏度
        
        if (Math.abs(walk) >= 1) {
            if (walk > 0 && currentIndex < totalSlides - 1) {
                setCurrentIndex(currentIndex + 1);
            } else if (walk < 0 && currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
            setIsDragging(false);
        }
    };

    // 鼠标释放
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleProductClick = (group: any, product: any) => {
        const category = productData.find(category => 
            category.goods.some(item => item.id === product.id)
        );
        console.log(category)
        console.log(product)
        router.push(`/productInfo/${category?.menuId}/${product.id}`)
    }

    const showMore = () => {
        let key = productData.find(item => item.menuName === selectedMenu)?.key;
        router.push(`/productList/${key}`)
    }

    return (
        <div className="container px-4 py-8 mx-auto max-w-[1440px]" id="products_id">
            <h1 className="mb-8 text-2xl font-bold text-center">{props.title.value}</h1>
            {/* 分类菜单 */}
            <div className="mb-8 overflow-x-auto">
                <div className="flex justify-center gap-6 px-4 min-w-max">
                    {
                        productData.map((item, index) => (
                            <button 
                                key={index} 
                                className={`${
                                    selectedMenu === item.menuName 
                                    ? 'text-black font-bold' 
                                    : 'text-gray-600'
                                } hover:text-black`}
                                onClick={() => setSelectedMenu(item.menuName)}
                            >
                                {item.menuName}
                            </button>
                        ))
                    }
                </div>
            </div>

            {/* 大屏轮播 */}
            <div className="hidden min-[390px]:block">
                {/* 轮播容器 */}
                <div className="relative">
                    <div 
                        className="relative overflow-hidden cursor-grab"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {productGroups.map((group, groupIndex) => (
                                <div 
                                    key={groupIndex} 
                                    className="flex-shrink-0 w-full"
                                >
                                    <div className="grid min-[834px]:grid-cols-3 min-[834px]:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                                        {group.map((product, index) => (
                                            <div 
                                                key={index} 
                                                className="relative overflow-hidden rounded-lg aspect-[4/3] group"
                                                onClick={() => handleProductClick(group,product)}
                                            >
                                                <img 
                                                    src={product.image} 
                                                    alt="Product" 
                                                    className="object-cover w-full h-full"
                                                    draggable="false"
                                                />
                                                {/* 添加遮罩层 */}
                                                <div className="absolute inset-0 flex flex-col items-start justify-end p-4 transition-opacity duration-300 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.8)_100%)]">
                                                    <span className="text-sm text-white/80">{selectedMenu}</span>
                                                    <h3 className="text-lg font-bold text-white">{product.title}</h3>
                                                    <button className="mt-2 text-yellow-400 hover:text-yellow-300">
                                                        Learn More
                                                        <span className="inline-block ml-2">→</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* 指示点 - 移到轮播区域外部 */}
                <div className="flex justify-center gap-2 mt-[30px]">
                    {productGroups.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-[12px] transition-all rounded-full ${
                                index === currentIndex 
                                    ? 'w-[32px] bg-black' 
                                    : 'w-[12px] bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* 产品网格 */}
            <div className="grid grid-cols-1 min-[390px]:hidden">
                {
                    filteredProducts.map((product, index) => (
                        <div className="relative overflow-hidden rounded-lg mb-[15px] group" key={index} onClick={() => handleProductClick(group,product)}>
                            <img src={product?.image} alt="Product" className="object-cover w-full" />
                            {/* 添加遮罩层 */}
                            <div className="absolute inset-0 flex flex-col items-start justify-end p-4 transition-opacity duration-300 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.8)_100%)]">
                                <span className="text-sm text-white/80">{selectedMenu}</span>
                                <h3 className="text-lg font-bold text-white">{product.title}</h3>
                                <button className="mt-2 text-yellow-400 hover:text-yellow-300">
                                    Learn More
                                    <span className="inline-block ml-2">→</span>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="mt-8 text-center">
                <button className="inline-flex items-center gap-2 px-6 py-2 text-white bg-black rounded-[5px]" onClick={showMore}>
                    View More
                    <span>→</span>
                </button>
            </div>
        </div>
    );
}