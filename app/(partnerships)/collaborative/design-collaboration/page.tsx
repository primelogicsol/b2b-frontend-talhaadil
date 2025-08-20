import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { designCollaborationData } from '@/lib/data/designCollaborationData'
function page() {
  return (
    <InsidePage landingPageData={designCollaborationData}/>
  )
}

export default page
