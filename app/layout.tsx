import "./css/style.css";

import {Inter} from "next/font/google";
import "@/config/firebase-config";
import Navbar from '@/components/Navbar'
import Header3 from '@/components/header_3'
import {navItems} from "@/models/Test";
import { Footer } from 'aiwebs-ui-components'
import Footer3 from '@/components/footer_3'

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});


const footerConfig = {
    footerTip:{value:'Created by Charlie'},
    FooterItems:{
        value:[
            {
                footer:'Components',
                footerChildren:[
                    "Elements",
                    "Forms",
                    "Commerces",
                    "Navigation"
                ]
            },{
                footer:'Contacts',
                footerChildren:[
                    "Github",
                    "Facebook",
                    "Twitter",
                    "LinkedIn"
                ]
            },{
                footer:'Customization',
                footerChildren:[
                    "Settings",
                    "Themes",
                    "Plugins",
                    "LinkedIn"
                ]
            },
        ]
    }
}

const footerConfig3 = {
    title:{value:'Elmar Furniture'},
    footerTip:{value:'We build readymade websites, mobile applications, and elaborate online business services.'},
    footerTip2:{value:'Copyright © 2024 Elmar Furniture. All rights reserved.'},
    footerItems:{
        value:[
            {
                id:1,
                value:{
                    footer:'QUICK LINKS',
                    footerChildren:[
                        {id:1,value:{label:"Portfolio",link:"/portfolio"}},
                        {id:2,value:{label:"About",link:"/about"}},
                        {id:3,value:{label:"Services",link:"/services"}},
                        {id:4,value:{label:"Pricing Plans",link:"/pricing"}},
                        {id:5,value:{label:"Contact",link:"/contact"}}
                    ]
                }
            },{
                id:2,
                value:{
                    footer:'SERVICES',
                    footerChildren:[
                        {id:1,value:{label:"UI/UX Design",link:"/services/ui-ux"}},
                        {id:2,value:{label:"Branding",link:"/services/branding"}},
                        {id:3,value:{label:"Illustration",link:"/services/illustration"}},
                        {id:4,value:{label:"Design Concept",link:"/services/design"}},
                        {id:5,value:{label:"App Design",link:"/services/app"}}
                    ]
                }
            },{
                id:3,
                value:{
                    footer:'SERVICES',
                    footerChildren:[
                        {id:1,value:{label:"UI/UX Design",link:"/services/ui-ux"}},
                        {id:2,value:{label:"Branding",link:"/services/branding"}},
                        {id:3,value:{label:"Illustration",link:"/services/illustration"}},
                        {id:4,value:{label:"Design Concept",link:"/services/design"}},
                        {id:5,value:{label:"App Design",link:"/services/app"}}
                    ]
                }
            }
        ]
    },
    followUs:{
        value:[
            {
                id: 1,
                value: {
                    icon: (<svg width="20" height="20" fill="currentColor" className="text-xl" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>),
                    link: 'https://www.facebook.com/profile.php?id=1000911888888888',
                    label: 'Facebook'
                }
            },
            {
                id: 2,
                value: {
                    icon: (<svg width="20" height="20" fill="currentColor" className="text-xl" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                    </svg>),
                    link: 'https://www.linkedin.com/in/charlie-li-6b1393242/',
                    label: 'LinkedIn'
                }
            },
            {
                id: 3,
                value: {
                    icon: (<svg width="20" height="20" fill="currentColor" className="text-xl" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                    </svg>),
                    link: 'https://twitter.com/charlie_li_11',
                    label: 'Twitter'
                }
            },
            {
                id: 4,
                value: {
                    icon: (<svg width="20" height="20" fill="currentColor" className="text-xl" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zm-502-220q-7 0-76.5-.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"></path>
                    </svg>),
                    link: 'https://www.instagram.com/charlie_li_11/',
                    label: 'Instagram'
                }
            }
        ]
    }
}

export const metadata = {
    title: 'Elmar Furniture',
    description: 'Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.',
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16654510841"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-16654510841');
                    
                    function gtag_report_conversion(key) {
                        var callback = function () {
                        
                        };
                    gtag('event', 'conversion', {
                    'send_to': key,
                    'event_callback': callback});
                    return false;};
                `,
                }}
            />
            <title>Elmar Furniture</title>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body
            className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
        >
        {/* <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip"> */}
        <div className="min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <div className='w-full'>
                {/* <Header3/> */}
                <div className="max-w-[1440px] mx-auto">
                    <Navbar items={navItems}/>
                    <div className='min-h-[calc(100vh-524px)]'>
                        {children}
                    </div>
                </div>
                {/* <Footer {...footerConfig} /> */}
                <Footer3 {...footerConfig3}/>
            </div>
        </div>
        </body>
        </html>
    );
}


