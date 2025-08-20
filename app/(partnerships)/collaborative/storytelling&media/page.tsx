import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { storytellingMediaData } from '@/lib/data/storytellingMediaData'
function page() {
  return (
    <InsidePage landingPageData={storytellingMediaData}/>
  )
}

export default page
