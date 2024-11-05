// 创建数据
export const allComponents = [
    // blog_1
    {
        type: "blog_1",
        config: {
            blogLists:{
                value:[
                    {
                        photo:'/images/blog_01.png',
                        title:'New Mac is here !',
                        description:'The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...',
                    },
                    {
                        photo:'/images/blog_02.png',
                        title:'New Mac is here !',
                        description:'The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...',
                    },
                    {
                        photo:'/images/blog_06.png',
                        title:'New Mac is here !',
                        description:'The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...',
                    },
                    {
                        photo:'/images/blog_03.png',
                        title:'New Mac is here !',
                        description:'The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...',
                    },
                    {
                        photo:'/images/blog_04.png',
                        title:'New Mac is here !',
                        description:'The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...',
                    },
                    {
                        photo:'/images/blog_05.png',
                        title:'New Mac is here !',
                        description:'The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...',
                    },
                ]
            }
        },
        name: "Blog_1 Component"
    },
    // blog
    {
        type: "blog",
        config: {
            title:{value:'Lastest articles'},
            subtitle:{value:'All article are verified by 2 experts and validate by the CTO'},
            blogLists:{
                value:[
                    {
                        typeName: 'Video',
                        title: 'Work at home',
                        subtitle: 'Work at home, remote, is the new age of the job, every person can work at home....',
                        photo: '/images/blog_07.png',
                        name: 'Jean Jacques',
                        time: '20 mars 2029 - 6 min read',
                    },
                    {
                        typeName: 'Oui',
                        title: 'test',
                        subtitle: 'The new supercar is here, 543 cv and 140 000$ !!',
                        photo: '/images/blog_07.png',
                        name: 'Jean Jacques',
                        time: '20 mars 2029 - 6 min read',
                    },
                    {
                        typeName: 'Oui',
                        title: 'test',
                        subtitle: 'The new supercar is here, 543 cv and 140 000$ !!',
                        photo: '/images/blog_07.png',
                        name: 'Jean Jacques',
                        time: '20 mars 2029 - 6 min read',
                    },
                    {
                        typeName: 'Oui',
                        title: 'test',
                        subtitle: 'The new supercar is here, 543 cv and 140 000$ !!',
                        photo: '/images/blog_07.png',
                        name: 'Jean Jacques',
                        time: '20 mars 2029 - 6 min read',
                    },
                    {
                        typeName: 'Oui',
                        title: 'test',
                        subtitle: 'The new supercar is here, 543 cv and 140 000$ !!',
                        photo: '/images/blog_07.png',
                        name: 'Jean Jacques',
                        time: '20 mars 2029 - 6 min read',
                    },
                    {
                        typeName: 'Oui',
                        title: 'test',
                        subtitle: 'The new supercar is here, 543 cv and 140 000$ !!',
                        photo: '/images/blog_07.png',
                        name: 'Jean Jacques',
                        time: '20 mars 2029 - 6 min read',
                    }
                ]
            }
        },
        name: "Blog Component"
    },
    // faq
    {
        type: "faq",
        config: {
            title:{value:'FAQs'},
            FaqItems:{
                value:[
                    {
                        question:'What is a home energy rating?',
                        answer:'A home energy rating is an estimated calculation into a homes potential energy usage, which will determine the amount of heating and cooling required to make its occupants comfortable. It produces a star rating dependant on the amount of heating and cooling loads which will be required, from 0 to 10 stars.',
                    },
                    {
                        question:'Why do I need a 6 Star energy rating?',
                        answer:'In most Australian states the government requires that all new homes and apartments (along with certain types of building extensions) built since 2010 be energy rated and achieve a minimum of 6 Stars.',
                    },
                    {
                        question:'What is the general cost of an energy rating?',
                        answer:'Simple energy rating prices vary greatly on the size and type of building, generally an energy rating will cost somewhere between $130 to $700+.',
                    },
                    {
                        question:'What information do I need to supply for an energy rating to be completed??',
                        answer:'The information required to complete a full and comprehensive energy report are the following final working drawings: Site Plan, Floor Plan, Elevations, Sections, Lighting layout and window schedule (including sizes of the existing windows).',
                    },
                    {
                        question:'Does building an extension need an energy rating?',
                        answer:"Depended on the size of the extension you are building there is a chance that it too will need to be energy rated. It's always best to check first before going ahead with construction.",
                    },
                    {
                        question:'What is the general cost of an energy rating?',
                        answer:"Depended on the size of the extension you are building there is a chance that it too will need to be energy rated. It's always best to check first before going ahead with construction.",
                    },
                ]
            },
        },
        name:'Faq Component'
    },
    // faq_1
    {
        type: "faq_1",
        config: {
            title:{value:'Frequently-asked questions'},
            FaqItems:{
                value:[
                    {
                        question:'We already have ongoing projects. Will Valohai easily integrate with them?',
                        answer:'Running existing machine learning projects in Valohai is very simple! Integration only requires adding a valohai.yaml configuration file. Moving projects in and out of Valohai is easy – the integration is only the configuration file.',
                    },{
                        question:'How do you compare to other data science platforms?',
                        answer:"We don’t. Valohai isn’t a data science platform; it's a Machine Learning Management Platform that handles the whole ML pipeline from feature extraction, to training of your model and to deploying it into production in a reproducible manner. Data science platforms offer hosted notebooks and AutoML solutions.",
                    },{
                        question:'Does Valohai charge for computation?',
                        answer:"Depends. Most of our customers use their own cloud and thus pay for usage according to their own agreements. Valohai doesn't charge anything on top of the per-user license fee. If you don't have a cloud provider, you can use our AWS, GCP and Azure accounts, and we'll only charge you for what you use.",
                    }
                ]
            }
        },
        name:'Faq_1 Component'
    },
    // Features_1
    {
        type: "features_1",
        config: {
            title1:{value:'Interactive'},
            title2:{value:'Interactivity between team members is the key of the success.'},
            description:{value:"Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient."},
            LabelItems:{
                value:['Live modifications','Data tracker','24/24 support','Free tips to improve work time']
            },
            image1:{value:'/images/feature_01.png'},
            image2:{value:'/images/feature_02.png'},
            image3:{value:'/images/feature_03.png'},
            image4:{value:'/images/feature_04.png'},
        },
        name:'Features_1 Component'
    },
    // Features
    {
        type: "features",
        config: {
            title:{value:"Manage everything"},
            image:{value:"/images/feature_01.png"},
            InfoItem:{
                value:[
                    {
                        title:'One-look dashboard',
                        description:'Know everything about your business in a single glance with your new dashboard.'
                    },{
                        title:'Orders, managed',
                        description:'All your orders in one place so you can manage your delivery, collection, asap and pre-orders in one place.'
                    },{
                        title:'Email & SMS Notifications',
                        description:'Never miss a new order with notifications via your dashboard, by sound, and to your email and phone.'
                    }
                ]
            },
        },
        name:'Features Component'
    },
    // Footer_1
    {
        type: "footer_1",
        config: {
            FooterItems:{
                value:[
                    "FAQ",
                    "Configuration",
                    "Github",
                    "LinkedIn"
                ]
            }
        },
        name:'Footer_1 Component'
    },
    // Footer
    {
        type: "footer",
        config: {
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
        },
        name:'Footer Component'
    },
    //Header_1
    {
        type: "header_1",
        config: {
            image:{value:'/images/favicon.ico'},
            menus:{
                value:[
                    'Home',
                    'Gallery',
                    'Content',
                    'Contact',
                ]
            },
        },
        name:'Header_1 Component'
    },
    //Header
    {
        type: "header",
        config: {
            header:{value:'Header'},
            menus:{
                value:[
                    "Home",
                    "Watch",
                    "Product",
                    "Contact",
                    "Carrer"
                ]
            },
        },
        name:'Header Component'
    },
    //Hero_1
    {
        type: "hero_1",
        config: {
            title1:{value:'Want to be millionaire ?'},
            title2:{value:'It&#x27;s today or never.'},
            subtitle:{value:'I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely'},
            button1:{value:'Get started'},
            image:{value:'/images/demo_01.png'},
        },
        name:'Hero_1 Component'
    },
    //Hero
    {
        type: "hero",
        config: {
            title1:{value:'Be on'},
            title2:{value:'Time'},
            subtitle:{value:'Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.'},
            button1:{value:'Get Started'},
            button2:{value:'Read More'},
            image:{value:'/images/demo_01.png'},
        },
        name:'Hero Component'
    },
    //JoinUs_1
    {
        type: "joinUs_1",
        config: {
            title:{value:'Used by leading architects, home builders renovators.'},
            subtitle:{value:'Feel confident in choosing the best energy assessor for your energy rating.'},
            button:{value:'Join Us'},
            items:{
                value:[
                    {num:'119',tip:'Energy raters'},
                    {num:'6',tip:'Quotes on average'},
                    {num:'24 hours',tip:'Average turnaround'},
                ]
            },
        },
        name:'JoinUs_1 Component'
    },
    //JoinUs
    {
        type: "joinUs",
        config: {
            button:{value:'Join Us'},
            items:{
                value:[
                    {num:'2179',tip:'Cups of coffee'},
                    {num:'13',tip:'Ongoing contracts'},
                    {num:'31',tip:'Finished projects'},
                    {num:'3',tip:'Years in business'},
                ]
            },
        },
        name:'JoinUs Component'
    },
    //Pricing_1
    {
        type: "pricing_1",
        config: {
            items:{
                value:[
                    {
                        title:'Free',
                        money:'0',
                        date:'month',
                        itemTitle:'Plan include :',
                        button:'Choose plan',
                        list:[
                            {icon:1,value:'All illimited components'},
                            {icon:1,value:'Own custom Tailwind styles'},
                            {icon:1,value:'Unlimited Templates'},
                            {icon:1,value:'Free premium dashboard'},
                            {icon:1,value:'Best ranking'},
                            {icon:2,value:'Premium svg'},
                            {icon:2,value:'My wife'},
                        ]
                    },{
                        title:'Medium',
                        money:'19',
                        date:'month',
                        itemTitle:'Plan include :',
                        button:'Choose plan',
                        list:[
                            {icon:1,value:'All illimited components'},
                            {icon:1,value:'Own custom Tailwind styles'},
                            {icon:1,value:'Unlimited Templates'},
                            {icon:1,value:'Free premium dashboard'},
                            {icon:1,value:'Best ranking'},
                            {icon:2,value:'Premium svg'},
                            {icon:2,value:'My wife'},
                        ]
                    },{
                        title:'Pro',
                        money:'99',
                        date:'month',
                        itemTitle:'Plan include :',
                        button:'Choose plan',
                        list:[
                            {icon:1,value:'All illimited components'},
                            {icon:1,value:'Own custom Tailwind styles'},
                            {icon:1,value:'Unlimited Templates'},
                            {icon:1,value:'Free premium dashboard'},
                            {icon:1,value:'Best ranking'},
                            {icon:2,value:'Premium svg'},
                            {icon:2,value:'My wife'},
                        ]
                    }
                ]
            }
        },
        name:'Pricing_1 Component'
    },
    //Pricing
    {
        type: "pricing",
        config: {
            title:{value:'Zero Commission'},
            description:{value:"Start selling online for free with all the features you need to launch your local delivery and pick-up service, nothing more. We don&#x27;t charge commission or monthly fees, keep all your margin."},
            groupTitle1:{value:"What's included"},
            groupTitle2:{value:"& What's not"},
            groupItems1:{value:[
                "All illimited components",
                "Own custom Tailwind styles",
                "Unlimited Templates",
                "Free premium dashboard",
                "Best ranking",
                "Prenium svg",
                "My wife"
            ]},
            groupItems2:{value:[
                "No Contracts. No monthly, setup, or additional payment processor fees",
                "No 2-week on-boarding, it takes 20 minutes!"
            ]},
            subTitle:{value:'Free'},
            subSta:{value:'$0/mo'},
            tip1:{value:'Card payments:'},
            tip2:{value:'2.9% + 20p per transaction'},
            button:{value:'Create your store'},
        },
        name:'Pricing Component'
    },
    //Team_1
    {
        type: "team_1",
        config: {
            title:{value:'Professional team'},
            subtitle:{value:'Meat the best team in world'},
            items:{value:[
                {
                    image:'/images/demo_profile_01.png',
                    itemTitle:'Patrick Sebastien',
                    identity:'Developpeur',
                    description:'Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.',
                },{
                    image:'/images/demo_profile_02.png',
                    itemTitle:'Charlie',
                    identity:'Lead dev',
                    description:'Charlie, born December 18, 1993 in Challans, is an imitator and pintor.',
                },{
                    image:'/images/demo_profile_03.png',
                    itemTitle:'Thierry Halliday',
                    identity:'CTO',
                    description:'Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist.',
                },
            ]},
        },
        name:'Team_1 Component'
    },
    //Team
    {
        type: "team",
        config: {
            title:{value:'Professional team'},
            subtitle:{value:'Meat the best team in world'},
            teamMember:{value:[
                {
                    img: "/images/demo_profile_01.png",
                    name: "Patrick Sebastien",
                    position: "Developer",
                    description: "atrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator."
                  },
                  {
                    img: "/images/demo_profile_02.png",
                    name: "Jean Castux",
                    position: "Founder",
                    description: "Jean Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy."
                  },
                  {
                    img: "/images/demo_profile_03.png",
                    name: "Thierry Halliday",
                    position: "CTO",
                    description: "Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist."
                  }
            ]}
        },
        name:'Team Component'
    },
    // Testimonial_1
    {
        type: "testimonial_1",
        config: {
            items:{value:[
                {
                    text:'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
                    name:'Jean Miguel',
                    image:'/images/demo_profile_01.png',
                    user:'User of Tail-Kit',
                },{
                    text:'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
                    name:'Jean Miguel',
                    image:'/images/demo_profile_02.png',
                    user:'User of Tail-Kit',
                },{
                    text:'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
                    name:'Jean Miguel',
                    image:'/images/demo_profile_03.png',
                    user:'User of Tail-Kit',
                }
            ]}
        },
        name:'Testimonial_1 Component'
    },
    // Testimonial
    {
        type: "Testimonial",
        config: {
            image:{value:'/images/demo_profile_01.png'},
            text:{value:'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself'},
            name:{value:'Jean Miguel'},
            user:{value:'User of tail-kit'},
        },
        name:'Testimonial Component'
    }
]

// 生成后的数据
export const apiData = [
    {
        "name": "Blog_1 Component",
        "type": "blog_1",
        "config": {
            "blogLists": {
                "value": [
                    {
                        "photo": "/images/blog_01.png",
                        "title": "New Mac is here !",
                        "description": "The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on..."
                    },
                    {
                        "photo": "/images/blog_02.png",
                        "title": "New Mac is here !",
                        "description": "The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on..."
                    },
                    {
                        "photo": "/images/blog_06.png",
                        "title": "New Mac is here !",
                        "description": "The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on..."
                    },
                    {
                        "photo": "/images/blog_03.png",
                        "title": "New Mac is here !",
                        "description": "The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on..."
                    },
                    {
                        "photo": "/images/blog_04.png",
                        "title": "New Mac is here !",
                        "description": "The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on..."
                    },
                    {
                        "photo": "/images/blog_05.png",
                        "title": "New Mac is here !",
                        "description": "The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on..."
                    }
                ]
            }
        },
        "componentCode": "CMP-499U032A7F1C"
    },
    {
        "name": "Blog Component",
        "type": "blog",
        "config": {
            "title": {
                "value": "Lastest articles"
            },
            "subtitle": {
                "value": "All article are verified by 2 experts and validate by the CTO"
            },
            "blogLists": {
                "value": [
                    {
                        "typeName": "Video",
                        "title": "Work at home",
                        "subtitle": "Work at home, remote, is the new age of the job, every person can work at home....",
                        "photo": "/images/blog_07.png",
                        "name": "Jean Jacques",
                        "time": "20 mars 2029 - 6 min read"
                    },
                    {
                        "typeName": "Oui",
                        "title": "test",
                        "subtitle": "The new supercar is here, 543 cv and 140 000$ !!",
                        "photo": "/images/blog_07.png",
                        "name": "Jean Jacques",
                        "time": "20 mars 2029 - 6 min read"
                    },
                    {
                        "typeName": "Oui",
                        "title": "test",
                        "subtitle": "The new supercar is here, 543 cv and 140 000$ !!",
                        "photo": "/images/blog_07.png",
                        "name": "Jean Jacques",
                        "time": "20 mars 2029 - 6 min read"
                    },
                    {
                        "typeName": "Oui",
                        "title": "test",
                        "subtitle": "The new supercar is here, 543 cv and 140 000$ !!",
                        "photo": "/images/blog_07.png",
                        "name": "Jean Jacques",
                        "time": "20 mars 2029 - 6 min read"
                    },
                    {
                        "typeName": "Oui",
                        "title": "test",
                        "subtitle": "The new supercar is here, 543 cv and 140 000$ !!",
                        "photo": "/images/blog_07.png",
                        "name": "Jean Jacques",
                        "time": "20 mars 2029 - 6 min read"
                    },
                    {
                        "typeName": "Oui",
                        "title": "test",
                        "subtitle": "The new supercar is here, 543 cv and 140 000$ !!",
                        "photo": "/images/blog_07.png",
                        "name": "Jean Jacques",
                        "time": "20 mars 2029 - 6 min read"
                    }
                ]
            }
        },
        "componentCode": "CMP-7QUWD74B2ADE"
    },
    {
        "name": "Faq Component",
        "type": "faq",
        "config": {
            "title": {
                "value": "FAQs"
            },
            "FaqItems": {
                "value": [
                    {
                        "question": "What is a home energy rating?",
                        "answer": "A home energy rating is an estimated calculation into a homes potential energy usage, which will determine the amount of heating and cooling required to make its occupants comfortable. It produces a star rating dependant on the amount of heating and cooling loads which will be required, from 0 to 10 stars."
                    },
                    {
                        "question": "Why do I need a 6 Star energy rating?",
                        "answer": "In most Australian states the government requires that all new homes and apartments (along with certain types of building extensions) built since 2010 be energy rated and achieve a minimum of 6 Stars."
                    },
                    {
                        "question": "What is the general cost of an energy rating?",
                        "answer": "Simple energy rating prices vary greatly on the size and type of building, generally an energy rating will cost somewhere between $130 to $700+."
                    },
                    {
                        "question": "What information do I need to supply for an energy rating to be completed??",
                        "answer": "The information required to complete a full and comprehensive energy report are the following final working drawings: Site Plan, Floor Plan, Elevations, Sections, Lighting layout and window schedule (including sizes of the existing windows)."
                    },
                    {
                        "question": "Does building an extension need an energy rating?",
                        "answer": "Depended on the size of the extension you are building there is a chance that it too will need to be energy rated. It's always best to check first before going ahead with construction."
                    },
                    {
                        "question": "What is the general cost of an energy rating?",
                        "answer": "Depended on the size of the extension you are building there is a chance that it too will need to be energy rated. It's always best to check first before going ahead with construction."
                    }
                ]
            }
        },
        "componentCode": "CMP-UC5IAEBDA730"
    },
    {
        "name": "Faq_1 Component",
        "type": "faq_1",
        "config": {
            "title": {
                "value": "Frequently-asked questions"
            },
            "FaqItems": {
                "value": [
                    {
                        "question": "We already have ongoing projects. Will Valohai easily integrate with them?",
                        "answer": "Running existing machine learning projects in Valohai is very simple! Integration only requires adding a valohai.yaml configuration file. Moving projects in and out of Valohai is easy – the integration is only the configuration file."
                    },
                    {
                        "question": "How do you compare to other data science platforms?",
                        "answer": "We don’t. Valohai isn’t a data science platform; it's a Machine Learning Management Platform that handles the whole ML pipeline from feature extraction, to training of your model and to deploying it into production in a reproducible manner. Data science platforms offer hosted notebooks and AutoML solutions."
                    },
                    {
                        "question": "Does Valohai charge for computation?",
                        "answer": "Depends. Most of our customers use their own cloud and thus pay for usage according to their own agreements. Valohai doesn't charge anything on top of the per-user license fee. If you don't have a cloud provider, you can use our AWS, GCP and Azure accounts, and we'll only charge you for what you use."
                    }
                ]
            }
        },
        "componentCode": "CMP-BIZQ17A72E23"
    },
    {
        "name": "Features_1 Component",
        "type": "features_1",
        "config": {
            "title1": {
                "value": "Interactive"
            },
            "title2": {
                "value": "Interactivity between team members is the key of the success."
            },
            "description": {
                "value": "Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient."
            },
            "LabelItems": {
                "value": [
                    "Live modifications",
                    "Data tracker",
                    "24/24 support",
                    "Free tips to improve work time"
                ]
            },
            "image1": {
                "value": "/images/feature_01.png"
            },
            "image2": {
                "value": "/images/feature_02.png"
            },
            "image3": {
                "value": "/images/feature_03.png"
            },
            "image4": {
                "value": "/images/feature_04.png"
            }
        },
        "componentCode": "CMP-IKNZD5EC6F7D"
    },
    {
        "name": "Features Component",
        "type": "features",
        "config": {
            "title": {
                "value": "Manage everything"
            },
            "image": {
                "value": "/images/feature_01.png"
            },
            "InfoItem": {
                "value": [
                    {
                        "title": "One-look dashboard",
                        "description": "Know everything about your business in a single glance with your new dashboard."
                    },
                    {
                        "title": "Orders, managed",
                        "description": "All your orders in one place so you can manage your delivery, collection, asap and pre-orders in one place."
                    },
                    {
                        "title": "Email & SMS Notifications",
                        "description": "Never miss a new order with notifications via your dashboard, by sound, and to your email and phone."
                    }
                ]
            }
        },
        "componentCode": "CMP-WMB4606D37A0"
    },
    {
        "name": "Footer_1 Component",
        "type": "footer_1",
        "config": {
            "FooterItems": {
                "value": [
                    "FAQ",
                    "Configuration",
                    "Github",
                    "LinkedIn"
                ]
            }
        },
        "componentCode": "CMP-38AJ05729CAA"
    },
    {
        "name": "Footer Component",
        "type": "footer",
        "config": {
            "footerTip": {
                "value": "Created by Charlie"
            },
            "FooterItems": {
                "value": [
                    {
                        "footer": "Components",
                        "footerChildren": [
                            "Elements",
                            "Forms",
                            "Commerces",
                            "Navigation"
                        ]
                    },
                    {
                        "footer": "Contacts",
                        "footerChildren": [
                            "Github",
                            "Facebook",
                            "Twitter",
                            "LinkedIn"
                        ]
                    },
                    {
                        "footer": "Customization",
                        "footerChildren": [
                            "Settings",
                            "Themes",
                            "Plugins",
                            "LinkedIn"
                        ]
                    }
                ]
            }
        },
        "componentCode": "CMP-SW7BBC200C7E"
    },
    {
        "name": "Header_1 Component",
        "type": "header_1",
        "config": {
            "image": {
                "value": "/images/favicon.ico"
            },
            "menus": {
                "value": [
                    "Home",
                    "Gallery",
                    "Content",
                    "Contact"
                ]
            }
        },
        "componentCode": "CMP-N8PA22E11578"
    },
    {
        "name": "Header Component",
        "type": "header",
        "config": {
            "header": {
                "value": "Header"
            },
            "menus": {
                "value": [
                    "Home",
                    "Watch",
                    "Product",
                    "Contact",
                    "Carrer"
                ]
            }
        },
        "componentCode": "CMP-RQ2TF85A6F6E"
    },
    {
        "name": "Hero_1 Component",
        "type": "hero_1",
        "config": {
            "title1": {
                "value": "Want to be millionaire ?"
            },
            "title2": {
                "value": "It&#x27;s today or never."
            },
            "subtitle": {
                "value": "I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely"
            },
            "button1": {
                "value": "Get started"
            },
            "image": {
                "value": "/images/demo_01.png"
            }
        },
        "componentCode": "CMP-XIR4AC8E0106"
    },
    {
        "name": "Hero Component",
        "type": "hero",
        "config": {
            "title1": {
                "value": "Be on"
            },
            "title2": {
                "value": "Time"
            },
            "subtitle": {
                "value": "Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place."
            },
            "button1": {
                "value": "Get Started"
            },
            "button2": {
                "value": "Read More"
            },
            "image": {
                "value": "/images/demo_01.png"
            }
        },
        "componentCode": "CMP-OGQ96C7713D6"
    },
    {
        "name": "JoinUs_1 Component",
        "type": "joinUs_1",
        "config": {
            "title": {
                "value": "Used by leading architects, home builders renovators."
            },
            "subtitle": {
                "value": "Feel confident in choosing the best energy assessor for your energy rating."
            },
            "button": {
                "value": "Join Us"
            },
            "items": {
                "value": [
                    {
                        "num": "119",
                        "tip": "Energy raters"
                    },
                    {
                        "num": "6",
                        "tip": "Quotes on average"
                    },
                    {
                        "num": "24 hours",
                        "tip": "Average turnaround"
                    }
                ]
            }
        },
        "componentCode": "CMP-LU85B562D3F8"
    },
    {
        "name": "JoinUs Component",
        "type": "joinUs",
        "config": {
            "button": {
                "value": "Join Us"
            },
            "items": {
                "value": [
                    {
                        "num": "2179",
                        "tip": "Cups of coffee"
                    },
                    {
                        "num": "13",
                        "tip": "Ongoing contracts"
                    },
                    {
                        "num": "31",
                        "tip": "Finished projects"
                    },
                    {
                        "num": "3",
                        "tip": "Years in business"
                    }
                ]
            }
        },
        "componentCode": "CMP-P107F2575E35"
    },
    {
        "name": "Pricing_1 Component",
        "type": "pricing_1",
        "config": {
            "items": {
                "value": [
                    {
                        "title": "Free",
                        "money": "0",
                        "date": "month",
                        "itemTitle": "Plan include :",
                        "button": "Choose plan",
                        "list": [
                            {
                                "icon": 1,
                                "value": "All illimited components"
                            },
                            {
                                "icon": 1,
                                "value": "Own custom Tailwind styles"
                            },
                            {
                                "icon": 1,
                                "value": "Unlimited Templates"
                            },
                            {
                                "icon": 1,
                                "value": "Free premium dashboard"
                            },
                            {
                                "icon": 1,
                                "value": "Best ranking"
                            },
                            {
                                "icon": 2,
                                "value": "Premium svg"
                            },
                            {
                                "icon": 2,
                                "value": "My wife"
                            }
                        ]
                    },
                    {
                        "title": "Medium",
                        "money": "19",
                        "date": "month",
                        "itemTitle": "Plan include :",
                        "button": "Choose plan",
                        "list": [
                            {
                                "icon": 1,
                                "value": "All illimited components"
                            },
                            {
                                "icon": 1,
                                "value": "Own custom Tailwind styles"
                            },
                            {
                                "icon": 1,
                                "value": "Unlimited Templates"
                            },
                            {
                                "icon": 1,
                                "value": "Free premium dashboard"
                            },
                            {
                                "icon": 1,
                                "value": "Best ranking"
                            },
                            {
                                "icon": 2,
                                "value": "Premium svg"
                            },
                            {
                                "icon": 2,
                                "value": "My wife"
                            }
                        ]
                    },
                    {
                        "title": "Pro",
                        "money": "99",
                        "date": "month",
                        "itemTitle": "Plan include :",
                        "button": "Choose plan",
                        "list": [
                            {
                                "icon": 1,
                                "value": "All illimited components"
                            },
                            {
                                "icon": 1,
                                "value": "Own custom Tailwind styles"
                            },
                            {
                                "icon": 1,
                                "value": "Unlimited Templates"
                            },
                            {
                                "icon": 1,
                                "value": "Free premium dashboard"
                            },
                            {
                                "icon": 1,
                                "value": "Best ranking"
                            },
                            {
                                "icon": 2,
                                "value": "Premium svg"
                            },
                            {
                                "icon": 2,
                                "value": "My wife"
                            }
                        ]
                    }
                ]
            }
        },
        "componentCode": "CMP-FRGRA4D2DFFB"
    },
    {
        "name": "Pricing Component",
        "type": "pricing",
        "config": {
            "title": {
                "value": "Zero Commission"
            },
            "description": {
                "value": "Start selling online for free with all the features you need to launch your local delivery and pick-up service, nothing more. We don&#x27;t charge commission or monthly fees, keep all your margin."
            },
            "groupTitle1": {
                "value": "What's included"
            },
            "groupTitle2": {
                "value": "& What's not"
            },
            "groupItems1": {
                "value": [
                    "All illimited components",
                    "Own custom Tailwind styles",
                    "Unlimited Templates",
                    "Free premium dashboard",
                    "Best ranking",
                    "Prenium svg",
                    "My wife"
                ]
            },
            "groupItems2": {
                "value": [
                    "No Contracts. No monthly, setup, or additional payment processor fees",
                    "No 2-week on-boarding, it takes 20 minutes!"
                ]
            },
            "subTitle": {
                "value": "Free"
            },
            "subSta": {
                "value": "$0/mo"
            },
            "tip1": {
                "value": "Card payments:"
            },
            "tip2": {
                "value": "2.9% + 20p per transaction"
            },
            "button": {
                "value": "Create your store"
            }
        },
        "componentCode": "CMP-98LQ8E9AFEBE"
    },
    {
        "name": "Team_1 Component",
        "type": "team_1",
        "config": {
            "title": {
                "value": "Professional team"
            },
            "subtitle": {
                "value": "Meat the best team in world"
            },
            "items": {
                "value": [
                    {
                        "image": "/images/demo_profile_01.png",
                        "itemTitle": "Patrick Sebastien",
                        "identity": "Developpeur",
                        "description": "Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator."
                    },
                    {
                        "image": "/images/demo_profile_02.png",
                        "itemTitle": "Charlie",
                        "identity": "Lead dev",
                        "description": "Charlie, born December 18, 1993 in Challans, is an imitator and pintor."
                    },
                    {
                        "image": "/images/demo_profile_03.png",
                        "itemTitle": "Thierry Halliday",
                        "identity": "CTO",
                        "description": "Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist."
                    }
                ]
            }
        },
        "componentCode": "CMP-PMQUA74EC9B7"
    },
    {
        "name": "Team Component",
        "type": "team",
        "config": {
            "title": {
                "value": "Professional team"
            },
            "subtitle": {
                "value": "Meat the best team in world"
            },
            "teamMember": {
                "value": [
                    {
                        "img": "/images/demo_profile_01.png",
                        "name": "Patrick Sebastien",
                        "position": "Developer",
                        "description": "atrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator."
                    },
                    {
                        "img": "/images/demo_profile_02.png",
                        "name": "Jean Castux",
                        "position": "Founder",
                        "description": "Jean Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy."
                    },
                    {
                        "img": "/images/demo_profile_03.png",
                        "name": "Thierry Halliday",
                        "position": "CTO",
                        "description": "Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist."
                    }
                ]
            }
        },
        "componentCode": "CMP-R43538ECB0AD"
    },
    {
        "name": "Testimonial_1 Component",
        "type": "testimonial_1",
        "config": {
            "items": {
                "value": [
                    {
                        "text": "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
                        "name": "Jean Miguel",
                        "image": "/images/demo_profile_01.png",
                        "user": "User of Tail-Kit"
                    },
                    {
                        "text": "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
                        "name": "Jean Miguel",
                        "image": "/images/demo_profile_02.png",
                        "user": "User of Tail-Kit"
                    },
                    {
                        "text": "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
                        "name": "Jean Miguel",
                        "image": "/images/demo_profile_03.png",
                        "user": "User of Tail-Kit"
                    }
                ]
            }
        },
        "componentCode": "CMP-BHM2ECBE5CD5"
    },
    {
        "name": "Testimonial Component",
        "type": "Testimonial",
        "config": {
            "image": {
                "value": "/images/demo_profile_01.png"
            },
            "text": {
                "value": "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself"
            },
            "name": {
                "value": "Jean Miguel"
            },
            "user": {
                "value": "User of tail-kit"
            }
        },
        "componentCode": "CMP-V2RZAB20748E"
    }
]