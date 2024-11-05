import React from "react";
import CorporateInfo from '@/components/corporateInfo';
export async function generateStaticParams() {
    // 定义所有可能的语言选项
    return [
      { lang: 'en' },
      { lang: 'zh' }
    ]
  }

export default function AboutUsPage() {
    return (
        <main>
            <CorporateInfo/>
        </main>
    )
}