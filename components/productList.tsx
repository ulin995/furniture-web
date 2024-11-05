'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 定义分类数据
const categories = [
    {
        key: 'modern',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/><path d="M3 12h18"/><circle cx="12" cy="12" r="3"/></svg>',
        label: 'Modern',
        description: 'Modern minimalist furniture series, combining fashionable design with functionality to create an elegant living space'
    },
    {
        key: 'nature',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3 9l9 4l9-4l-9-7z"/><path d="M3 9v6l9 4l9-4V9"/><path d="M12 15v6"/><path d="M7 8l5-2l5 2"/></svg>',
        label: 'Nature',
        description: 'Natural style furniture series, using eco-friendly materials to integrate natural elements into home design'
    },
    {
        key: 'comfort',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"/><path d="M5 14h14"/><path d="M8 5v3"/><path d="M16 5v3"/><path d="M6 17v2"/><path d="M18 17v2"/></svg>',
        label: 'Comfort',
        description: 'Comfort series furniture, focusing on ergonomic design and quality fabrics for ultimate relaxation'
    },
    {
        key: 'luxury',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L4 9l8 4l8-4l-8-6z"/><path d="M4 9v6l8 4l8-4V9"/><path d="M12 19v3"/><circle cx="12" cy="11" r="2"/><path d="M8 9l4-2l4 2"/></svg>',
        label: 'Luxury',
        description: 'Luxury furniture series, selecting premium materials combined with exquisite craftsmanship'
    },
    {
        key: 'homewares',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><path d="M9 22V12h6v10"/><path d="M13 7h.01"/><path d="M3 9h18"/></svg>',
        label: 'Homewares',
        description: 'Home accessories series, providing multi-functional storage and organization solutions'
    }
];

const categoryFilters = {
    modern: [
      {
        group: 'Style',
        options: [
          { label: 'Minimalist', value: 'minimalist', images: ['01', '03', '05', '08', '11'] },
          { label: 'Industrial', value: 'industrial', images: ['02', '04', '07', '09', '11', '12'] },
          { label: 'Nordic', value: 'nordic', images: ['01', '04', '06', '08', '10', '12'] }
        ]
      },
      {
        group: 'Material',
        options: [
          { label: 'Metal', value: 'metal', images: ['02', '05', '07', '09', '11', '12'] },
          { label: 'Wood', value: 'wood', images: ['01', '03', '06', '08', '10'] },
          { label: 'Mixed', value: 'mixed', images: ['02', '04', '07', '09', '11', '12'] }
        ]
      }
    ],
    nature: [
      {
        group: 'Material',
        options: [
          { label: 'Solid Wood', value: 'solid-wood', images: ['01', '04', '06', '08', '10', '12'] },
          { label: 'Rattan', value: 'rattan', images: ['02', '05', '07', '09', '11'] },
          { label: 'Bamboo', value: 'bamboo', images: ['01', '03', '06', '08', '10', '12'] }
        ]
      },
      {
        group: 'Eco Level',
        options: [
          { label: 'Level One', value: 'eco-1', images: ['02', '04', '07', '09', '11', '12'] },
          { label: 'Level Two', value: 'eco-2', images: ['01', '03', '05', '08', '10'] }
        ]
      }
    ],
    comfort: [
      {
        group: 'Function',
        options: [
          { label: 'Reclinable', value: 'reclinable', images: ['02', '04', '06', '09', '11'] },
          { label: 'Multifunction', value: 'multifunction', images: ['01', '03', '05', '08', '10', '12'] },
          { label: 'Massage', value: 'massage', images: ['02', '05', '07', '09', '11', '12'] }
        ]
      },
      {
        group: 'Upholstery',
        options: [
          { label: 'Leather', value: 'leather', images: ['01', '04', '06', '08', '10', '12'] },
          { label: 'Fabric', value: 'fabric', images: ['02', '05', '07', '09', '11'] },
          { label: 'Velvet', value: 'velvet', images: ['01', '03', '06', '08', '10', '12'] }
        ]
      }
    ],
    luxury: [
      {
        group: 'Style',
        options: [
          { label: 'European', value: 'european', images: ['02', '04', '07', '09', '11'] },
          { label: 'American', value: 'american', images: ['01', '03', '06', '08', '10', '12'] },
          { label: 'Premium', value: 'premium', images: ['02', '05', '07', '09', '11', '12'] }
        ]
      },
      {
        group: 'Material',
        options: [
          { label: 'Premium Leather', value: 'premium-leather', images: ['01', '04', '06', '09', '11'] },
          { label: 'Natural Marble', value: 'marble', images: ['02', '05', '07', '10', '12'] },
          { label: 'Premium Wood', value: 'premium-wood', images: ['01', '03', '06', '08', '11', '12'] }
        ]
      }
    ],
    homewares: [
      {
        group: 'Type',
        options: [
          { label: 'Storage', value: 'storage', images: ['02', '04', '07', '09', '11', '12'] },
          { label: 'Decoration', value: 'decoration', images: ['01', '03', '05', '08', '10'] },
          { label: 'Lighting', value: 'lighting', images: ['02', '05', '07', '09', '11'] }
        ]
      },
      {
        group: 'Room',
        options: [
          { label: 'Living Room', value: 'living-room', images: ['01', '04', '06', '08', '10', '12'] },
          { label: 'Bedroom', value: 'bedroom', images: ['02', '05', '07', '09', '11'] },
          { label: 'Study', value: 'study', images: ['01', '03', '06', '08', '10', '12'] }
        ]
      }
    ]
};

const ProductList = (params:any) => {
    console.log('params:',params.cate[0]);
    let urlCategory = params?.cate[0] || '';
    const [activeCategory, setActiveCategory] = useState(urlCategory||categories[0].key);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [isFilterExpanded, setIsFilterExpanded] = useState(true);
    const [currentImages, setCurrentImages] = useState<string[]>([]);
    const router = useRouter();
    // 获取当前分类的筛选器选项
    const currentFilters = categoryFilters[activeCategory as keyof typeof categoryFilters] || [];
    
    // 获取当前选中分类的信息
    const activeCategoryInfo = categories.find(category => category.key === activeCategory) || categories[0];
  
    // 当分类改变时，重置筛选器选中状态为第一个选项
    useEffect(() => {
      if (currentFilters.length > 0 && currentFilters[0].options.length > 0) {
        const firstOption = currentFilters[0].options[0];
        setSelectedFilter(firstOption.value);
        setCurrentImages(firstOption.images);
      }
    }, [activeCategory]);
  
    // 当筛选器选项改变时，更新图片
    const handleFilterChange = (value: string) => {
      setSelectedFilter(value);
      // 查找选中选项对应的图片
      for (const group of currentFilters) {
        const option = group.options.find(opt => opt.value === value);
        if (option) {
          setCurrentImages(option.images);
          break;
        }
      }
    };
  
    // 生成产品数据
    const products = currentImages.map((imageNum) => ({
      id: imageNum,
      name: `${activeCategoryInfo.label} Product ${imageNum}`,
      series: `Series ${imageNum}`,
      image: `/images/furniture-img/p-${imageNum}.png`,
    }));
  return (
    <div className="container px-4 mx-auto">
      {/* 头部标题和简介 */}
      <div className="py-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">{activeCategoryInfo.label}</h1>
        <p className="text-[#222222] max-w-[70%] mx-auto max-[560px]:max-w-[90%]">
          {activeCategoryInfo.description}
        </p>
      </div>

      {/* 分类标签 */}
      <div className="flex justify-between gap-8 mb-8">
        {categories.map((category) => (
          <div
            key={category.key}
            className={`flex flex-col items-center cursor-pointer ${
              activeCategory === category.key ? 'text-blue-600 font-bold' : 'text-gray-600'
            }`}
            onClick={() => setActiveCategory(category.key)}
          >
            {/* <span className="mb-2 text-[60px] max-[560px]:text-[30px]">{category.icon}</span> */}
            <span 
                className="mb-2 text-[60px] max-[560px]:text-[30px]"
                dangerouslySetInnerHTML={{ __html: category.icon }}
            />
            <span>{category.label}</span>
          </div>
        ))}
      </div>

       {/* 主要内容区 */}
      <div className="flex flex-col min-[834px]:flex-row gap-4 min-[834px]:gap-8">
        {/* 筛选区 */}
        <div className="w-full min-[834px]:w-64">
            {/* 小屏幕下的折叠筛选器 */}
          <div className="block min-[834px]:hidden">
            {/* 筛选器标题栏 */}
            <div 
                onClick={() => setIsFilterExpanded(!isFilterExpanded)}
                className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg cursor-pointer"
            >
                <span className="font-medium">Filter</span>
                <div className={`transform transition-transform duration-300 ${isFilterExpanded ? 'rotate-180' : ''}`}>
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-blue-600"
                >
                    <path 
                    d="M19 9L12 16L5 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    />
                </svg>
                </div>
            </div>

            {/* 筛选器内容 */}
            <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${isFilterExpanded 
                ? 'max-h-[1000px] opacity-100 mt-2' 
                : 'max-h-0 opacity-0'
                }
            `}>
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                {currentFilters.map((group) => (
                    <div key={group.group} className="mb-6 last:mb-0">
                    <h3 className="mb-3 text-sm font-medium text-gray-900">
                        {group.group}
                    </h3>
                    <div className="space-y-3">
                        {group.options.map((option) => (
                        <label key={option.value} className="flex items-center">
                            <input
                            type="radio"
                            name="mobile-filter"
                            value={option.value}
                            checked={selectedFilter === option.value}
                            onChange={(e) => handleFilterChange(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
          </div>

          {/* 大屏幕下的筛选器 */}
          <div className="hidden min-[834px]:block bg-white border border-gray-200 rounded-lg p-4">
            <h2 className="mb-4 text-lg font-medium text-gray-900">Filter</h2>
            
            {currentFilters.map((group) => (
              <div key={group.group} className="mb-6 last:mb-0">
                <h3 className="mb-3 text-sm font-medium text-gray-900">
                  {group.group}
                </h3>
                <div className="space-y-3">
                  {group.options.map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="desktop-filter"
                        value={option.value}
                        checked={selectedFilter === option.value}
                        onChange={(e) => handleFilterChange(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 产品列表 */}
        <div className="grid flex-1 grid-cols-3 max-[834px]:grid-cols-2 max-[560px]:grid-cols-1 gap-6 mb-[30px]">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg cursor-pointer" onClick={()=>router.push(`/productInfo/${'Switch'}/${'food_005'}`)}>
              <img src={product.image} alt={product.name} className="w-full mb-4" />
              <h3 className="mb-2 font-semibold text-center">{product.name}</h3>
              <p className="text-center text-gray-600">{product.series}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;