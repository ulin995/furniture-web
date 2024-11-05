import React, { useEffect } from "react";

import ProductInfo from '@/components/productInfo'
import productData from '@/models/product.json'

export async function generateStaticParams() {
  // 生成所有可能的语言和产品路径组合
  const paths:any = [];
  const languages = ['en', 'zh']; // 你支持的语言列表

  // 遍历所有产品数据生成路径
  productData.forEach((category) => {
    category.goods.forEach((product) => {
      languages.forEach((lang) => {
        paths.push({
          lang: lang,
          slug: [category.menuId, product.id]
        });
      });
    });
  });

  return paths;
}
export default function ProductInfoPage({params}:{params:{slug:string[]}}) {
    console.log(params.slug)
    return (
        <div>
            {/* <span>page</span> */}
            {/* <Index/> */}
            <ProductInfo info={params.slug}/>
        </div>
    );
}