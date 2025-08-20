import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { consignmentPageData } from '@/lib/data/consignmentData'
function page() {
  return (
    <InsidePage landingPageData={consignmentPageData}/>
  )
}

export default page
