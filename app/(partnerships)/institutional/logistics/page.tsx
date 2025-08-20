import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { logisticsData } from '@/lib/data/logisticsData'
function page() {
  return (
    <InsidePage landingPageData={logisticsData}/>
  )
}

export default page
