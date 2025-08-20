import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { wholesaleData } from '@/lib/data/wholesaleData'
function page() {
  return (
    <InsidePage landingPageData={wholesaleData}/>
  )
}

export default page
