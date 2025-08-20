import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { dropshippingData } from '@/lib/data/dropshippingData'
function page() {
  return (
    <InsidePage landingPageData={dropshippingData}/>
  )
}

export default page
