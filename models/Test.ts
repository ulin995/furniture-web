import { keys } from "lodash";

export interface HeroSection {
    title: string;
    description: string;
    image: string;
}

export interface NavItem {
    label: string;
    href: string;
}

export const navItems = [
    {label: 'Home', href: '/home'},
    // {label: 'Portfolio', href: '/portfolio',children:[
    //     {label: 'Portfolio 1', href: '/portfolio/1'},
    //     {label: 'Portfolio 2', href: '/portfolio/2'}, 
    //     {label: 'Portfolio 3', href: '/portfolio/3'}, 
    // ]},
    // {label: 'Services', href: '/services'},
    // {label: 'Testimonial', href: '/testimonial'},
    // {label: 'Pricing Plan', href: '/pricing'},
    // {label: 'FAQs', href: '/faqs'},
    
    {label: 'Products', href: '/portfolio',children:[
        {label: 'Modern', href: '/portfolio/1',key:'modern'},
        {label: 'Nature', href: '/portfolio/2',key:'nature'}, 
        {label: 'Comfort', href: '/portfolio/3',key:'comfort'}, 
        {label: 'Luxury', href: '/portfolio/3',key:'luxury'}, 
        {label: 'Homewares', href: '/portfolio/3',key:'homewares'}, 
    ]},
    {label: 'About Us', href: '/home'},
    // {label: 'Contact', href: '/services'},
];

export const heroContent = {
    title: 'The easiest way to create your Business',
    description: 'Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.',
    image: '/images/test_background.png',
};