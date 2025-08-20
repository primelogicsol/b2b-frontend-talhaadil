import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { brickMortarData } from '@/lib/data/brickMortarData'
function page() {
  return (
    <InsidePage landingPageData={brickMortarData}/>
  )
}

export default page
