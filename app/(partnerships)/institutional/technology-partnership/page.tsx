import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { technologyData } from '@/lib/data/technologyData'
function page() {
  return (
    <InsidePage landingPageData={technologyData}/>
  )
}

export default page
