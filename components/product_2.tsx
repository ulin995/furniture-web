import React from 'react';

interface Product {
  id: number;
  image: string;
  categories: string[];
  title: string;
  description: string;
}

const Product2 = () => {
  const products: Product[] = [
    {
      id: 1,
      image: "/images/product_03.png",
      categories: ["Product", "Cat", "Classic"],
      title: "PMR — online platform & responsive website design",
      description: "Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: 'The Art of Less Doing' and 'The Replaceable Founder'."
    },
    {
      id: 2,
      image: "/images/product_01.png",
      categories: ["Product", "Cat", "Classic"],
      title: "Triniso — responsive eCommerce website design",
      description: "Triniso is a Swiss watch manufacturer of luxurious and affordable watches in the Sierra, a beautiful vineyard region in the south of Switzerland."
    },
    {
      id: 3,
      image: "/images/product_02.png",
      categories: ["Product", "Cat"],
      title: "Symova — responsive website design",
      description: "Symova is a pension fund for medium and large companies in the public transport and tourism sector in Switzerland. They needed a completely new design for their website."
    }
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      {/* 顶部区域 */}
      <div className="flex flex-col items-start justify-between gap-8 mb-16 md:flex-row">
        {/* <h1 className="text-[36px] min-[900px]:text-[56px] font-bold text-[#061C3D]"> */}
        <h1 className="text-[36px] md:text-[56px] font-bold text-[#061C3D]">
          Our Products<br />
          and service
        </h1>
        <div className="max-w-md">
          <p className="mb-4 text-[#42526B] text-[18px]">
            Cras imperdiet est eget nulla fringilla, sit amet volutpat sem tristique. Pellentesque quis augue ac mauris posuere vehicula.
          </p>
          <button className="flex items-center text-[16px] cursor-pointer gap-2 px-4 py-2 transition-colors border border-black hover:bg-black hover:text-white rounded-[7px]">
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* 产品列表 */}
      <div className="space-y-16">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className={`flex flex-col gap-8 ${
              index % 2 === 0 
                ? 'md:flex-row' 
                : 'md:flex-row-reverse'
            }`}
          >
            {/* 产品图片 */}
            <div className="flex-1">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            
            {/* 产品信息 */}
            <div className="flex flex-col justify-center flex-1">
              <div className="flex gap-2 mb-4">
                {product.categories.map((category, idx) => (
                  <span key={idx} className="text-[#061C3D] text-[14px]">
                    {idx > 0 && "/ "}
                    {category}
                  </span>
                ))}
              </div>
              <h2 className="mb-4 text-[24px] leading-[32px] text-[#061C3D] font-bold min-[900px]:text-[32px] min-[900px]:leading-[40px]">{product.title}</h2>
              <p className="mb-6 text-[#42526B] text-[18px]">{product.description}</p>
              <button className="flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors rounded-[7px] bg-[#F0F5FF] w-fit hover:bg-black hover:text-white">
                View Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product2;