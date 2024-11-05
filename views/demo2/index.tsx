'use client'
import React,{ useEffect } from 'react';
import {allComponents,apiData} from '@/config/all-components'

export default function Footer() {
    useEffect(()=>{
        console.log(JSON.stringify(allComponents))
        getCodeArr()
    },[])

    const getCodeArr = () => {
        console.log(apiData)
        let codeArr:any[] = []
        apiData.forEach((item)=>{
            codeArr.push(item.componentCode)
        })
        console.log(JSON.stringify(codeArr))
    }

    return <div>index</div>
}