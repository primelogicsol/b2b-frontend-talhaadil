import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { whiteLabelData } from '@/lib/data/whiteLabelData'
function page() {
  return (
    <InsidePage landingPageData={whiteLabelData}/>
  )
}

export default page
