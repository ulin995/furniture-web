import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer3 = (props:{
    title:{value:string},
    footerTip:{value:string},
    footerTip2:{value:string},
    footerItems:{value:{id:number,value:{footer:string,footerChildren:{id:number,value:{label:string,link:string}}[]}}[]},
    followUs:{value:{id:number,value:{icon:React.ReactNode,label:string,link:string}}[]}
}) => {
  return (
    <footer className="py-16 text-gray-300 bg-navy-900 bg-[#061C3D]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* Logo和简介部分 */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/furniture-img/logo.png" alt="AIWEBS" width={40} height={40} />
              <span className="text-2xl font-bold text-white">{props.title.value}</span>
            </div>
            <p className="mb-6 text-sm">
              {props.footerTip.value}
            </p>
          </div>
            {
                props.footerItems.value.map((item)=>(
                    <div key={item.id}>
                        <h3 className="mb-4 text-lg font-semibold text-white">{item.value.footer}</h3>
                        <ul className="space-y-2">
                            {
                                item.value.footerChildren.map((child)=>(
                                    <li key={child.id}><Link href={child.value.link} className="hover:text-white">{child.value.label}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
          <div>
            {/* <h3 className="mb-4 text-lg font-semibold text-white">FOLLOW US</h3> */}
            <div className="flex flex-col gap-3">
            {
                    props.followUs.value.map((item,index)=>{
                        return  <Link 
                            href={item.value.link} 
                            key={index} 
                            className="inline-flex items-center text-white gap-3 px-4 py-2 bg-[rgba(255,255,255,0.1)] hover:bg-[#0E76A8] rounded-md transition-colors w-fit"
                        >
                            {item.value.icon}
                            <div className="w-[1px] h-4 bg-gray-600"></div>
                            <span className="text-[14px] font-[500]">{item.value.label}</span>
                        </Link>
                    })
                }
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="pt-8 mt-12 text-center border-t border-gray-700">
          <p>{props.footerTip2.value}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;