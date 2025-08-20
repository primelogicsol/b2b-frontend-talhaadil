import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { packagingData } from '@/lib/data/packagingData'
function page() {
  return (
    <InsidePage landingPageData={packagingData}/>
  )
}

export default page
