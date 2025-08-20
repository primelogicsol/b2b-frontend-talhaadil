import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { warehousData } from '@/lib/data/warehouseData'
function page() {
  return (
    <InsidePage landingPageData={warehousData}/>
  )
}

export default page
