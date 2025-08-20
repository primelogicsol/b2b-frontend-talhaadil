import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { ngoGovernmentData } from '@/lib/data/ngoGovernmentData'
function page() {
  return (
    <InsidePage landingPageData={ngoGovernmentData}/>
  )
}

export default page
