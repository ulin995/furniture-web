import ContactUs from '@/components/contactUs';

import React from "react";

export async function generateStaticParams() {
    // 定义所有可能的语言选项
    return [
      { lang: 'en' },
      { lang: 'zh' }
    ]
  }

export default function ContactUsPage() {
    return (
        <main>
            <ContactUs/>
        </main>
    )
}