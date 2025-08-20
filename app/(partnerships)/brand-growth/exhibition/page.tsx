import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { exhibitionData } from '@/lib/data/exhibitionData'
function page() {
  return (
    <InsidePage landingPageData={exhibitionData}/>
  )
}

export default page
