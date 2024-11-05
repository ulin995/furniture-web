"use client"
import React, { useState, useCallback, useEffect } from 'react';
import productData from '@/models/product.json';
import { useRouter } from 'next/navigation';

export default function ProductInfo(params:any) {
    console.log(params)
    const slug = params?.info||[]
    const [crumbs, setCrumbs] = useState<any[]>([])
    const router = useRouter();
    useEffect(()=>{
        let categoryInfo = null, good = null
        productData.find(category => 
            category.goods.find(item => {
                if(item.id === slug[1]){
                    console.log(item)
                    categoryInfo = category
                    good = item
                }
            })
        );
        console.log(categoryInfo, good)
        setCrumbs([categoryInfo?.menuName, good?.title])
    },[])
    // 所有商品图片数据，按组分类
    const productImageGroups = [
        {
          main: "/images/furniture-img/p-01.png",
          thumbnails: [
            {
              img: "/images/furniture-img/p-06.png",
              modelName: "Living Room"
            },
            {
              img: "/images/furniture-img/p-07.png",
              modelName: "Storage"
            },
            {
              img: "/images/furniture-img/p-08.png",
              modelName: "Seating"
            }
          ]
        },
        {
            main: "/images/furniture-img/p-02.png",
          thumbnails: [
            {
              img: "/images/furniture-img/p-09.png",
              modelName: "Storage"
            },
            {
              img: "/images/furniture-img/p-10.png",
              modelName: "Kitchen"
            },
            {
              img: "/images/furniture-img/p-11.png",
              modelName: "Dining Room"
            }
          ]
        },
        {
          main: "/images/furniture-img/p-03.png",
          thumbnails: [
            {
              img: "/images/furniture-img/p-12.png",
              modelName: "Living Room"
            },
            {
              img: "/images/furniture-img/p-06.png",
              modelName: "Bedroom"
            },
            {
              img: "/images/furniture-img/p-07.png",
              modelName: "Office"
            }
          ]
        },
        {
          main: "/images/furniture-img/p-04.png",
          thumbnails: [
            {
              img: "/images/furniture-img/p-08.png",
              modelName: "Entertainment"
            },
            {
              img: "/images/furniture-img/p-09.png",
              modelName: "Storage"
            },
            {
              img: "/images/furniture-img/p-10.png",
              modelName: "Decor"
            }
          ]
        },
        {
          main: "/images/furniture-img/p-05.png",
          thumbnails: [
            {
              img: "/images/furniture-img/p-11.png",
              modelName: "Organization"
            },
            {
              img: "/images/furniture-img/p-12.png",
              modelName: "Multi-function"
            },
            {
              img: "/images/furniture-img/p-06.png",
              modelName: "Bathroom"
            }
          ]
        }
    ];

    // 当前选中的图片组索引
    const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
    // 当前选中的缩略图索引
    const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

    // 切换图片组
    const handleGroupChange = (index: number) => {
        setSelectedGroupIndex(index);
        setSelectedThumbnailIndex(0); // 重置缩略图选择
    };

    // 切换主图
    const handleMainImageChange = (index: number) => {
        setSelectedThumbnailIndex(index);
    };

    // 上一张/下一张主图
    const handlePrevImage = useCallback(() => {
        setSelectedThumbnailIndex(prev => 
            prev === 0 ? 2 : prev - 1
        );
    }, []);

    const handleNextImage = useCallback(() => {
        setSelectedThumbnailIndex(prev => 
            prev === 2 ? 0 : prev + 1
        );
    }, []);

    const productInfo = {
        title: "Modern Leather Sofa",
        subtitle: "Living Room Collection",
        description: "Crafted with premium Italian leather and solid wood frame, this contemporary sofa combines comfort and elegance. Perfect for modern living spaces with its clean lines and durable construction.",
        model: "LS-8867-3S",
        features: [
            "100% genuine Italian leather upholstery",
            "High-density foam cushioning for maximum comfort",
            "Solid hardwood frame construction",
            "Stain-resistant and easy to clean surface",
            "Ergonomic design with proper lumbar support"
        ],
        rating: 5
    };

    const goContact = () => {
        router.push(`/contactUs`);
    }

    return (
        <div className="w-full px-4 py-8 mx-auto max-w-[1440px]">
            {
                crumbs.length > 0 && (
                    <div className='w-full mb-[50px] text-[14px]'><span>{crumbs[0]}</span> <span className='mx-2'>{`>`}</span> <span className='text-[#000144]'>{crumbs[1]}</span></div>
                )
            }
            {/* 使用 flex-wrap 控制换行 */}
            <div className="flex min-[834px]:flex-row flex-col gap-8">
                {/* 图片展示区包装器 */}
                <div className="flex flex-1 min-[834px]:w-[60%]">
                    {/* 左侧缩略图和主图的包装容器 */}
                    <div className="flex gap-8 w-[100%]" > {/* 移除固定高度 */}
                        {/* 左侧缩略图 */}
                        <div className="flex flex-col gap-4 w-[70px] flex-shrink-0 h-[415px] overflow-y-auto justify-center">
                            {productImageGroups.map((group, index) => (
                                <div 
                                    key={index}
                                    className={`cursor-pointer border-2 rounded-lg overflow-hidden flex-shrink-0
                                        ${selectedGroupIndex === index ? 'border-black' : 'border-transparent'}`}
                                    onClick={() => handleGroupChange(index)}
                                >
                                    <img 
                                        src={group.main} 
                                        alt={`Group ${index + 1}`}
                                        className="object-cover w-full aspect-square"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* 主图区域 */}
                        <div className="flex flex-col flex-1">
                            {/* 主图容器 */}
                            <div className="relative w-full overflow-hidden rounded-lg group h-[415px]">
                                <div className="absolute inset-0 flex items-center justify-center px-[30px]">
                                    <img 
                                        src={productImageGroups[selectedGroupIndex].thumbnails[selectedThumbnailIndex].img} 
                                        alt="Main product"
                                        className="object-contain max-w-full max-h-full"
                                    />
                                </div>
                                
                                {/* 左右箭头 - 移除背景色，使用新的箭头样式 */}
                                <button 
                                    onClick={handlePrevImage}
                                    className="absolute flex items-center justify-center w-10 h-10 transition-opacity -translate-y-1/2 left-[0px] top-1/2"
                                >
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        className="text-black hover:text-gray-600"
                                    >
                                        <path 
                                            d="M15 18l-6-6 6-6" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button 
                                    onClick={handleNextImage}
                                    className="absolute flex items-center justify-center w-10 h-10 transition-opacity -translate-y-1/2 right-[0px] top-1/2"
                                >
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        className="text-black hover:text-gray-600"
                                    >
                                        <path 
                                            d="M9 18l6-6-6-6" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* 底部缩略图 */}
                            <div className="flex justify-center gap-1 mt-4">
                                {productImageGroups[selectedGroupIndex].thumbnails.map((img, index) => (
                                    <div className='flex flex-col items-center justify-center flex-1'>
                                        <div 
                                            key={index}
                                            className={`w-[56px] cursor-pointer border-2 rounded-lg overflow-hidden
                                                ${selectedThumbnailIndex === index ? 'border-black' : 'border-transparent'}`}
                                            onClick={() => handleMainImageChange(index)}
                                        >
                                            <img 
                                                src={img.img} 
                                                alt={`Thumbnail ${index + 1}`}
                                                className="object-cover w-full aspect-square"
                                            />
                                        </div>
                                        <div className='w-full text-center px-[5px] text-[14px] text-[#666]'>{img.modelName}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        
                {/* 右侧产品信息 - 允许换行 */}
                <div className="flex-1 min-[834px]:w-[40%]">
                    <h1 className="mb-2 text-3xl font-bold">{productInfo.title}</h1>
                    <p className="mb-4 text-gray-600">{productInfo.subtitle}</p>
                    <p className="mb-6 text-gray-800">{productInfo.description}</p>
                    <p className="mb-6 text-sm text-gray-600">{productInfo.model}</p>
    
                    {/* 评分 */}
                    <div className="flex gap-1 mb-6">
                        {[...Array(productInfo.rating)].map((_, i) => (
                            <span key={i} className="text-2xl text-red-500">★</span>
                        ))}
                    </div>
    
                    {/* 特性列表 */}
                    <div className="mb-8">
                        <h2 className="mb-4 text-xl font-bold">Highlight feature</h2>
                        <ul className="space-y-3">
                            {productInfo.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-2 h-2 mt-2 bg-black rounded-full"></span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
    
                    {/* 购买按钮 */}
                    <button className="w-full min-[834px]:w-auto px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors mr-[20px] max-[834px]:mb-[20px] max-[834px]:mr-[0px]" onClick={goContact}>
                    Consult →
                    </button>
                    <button className="w-full min-[834px]:w-auto px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Download →
                    </button>
                </div>
            </div>
        </div>
    );
}