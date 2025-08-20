import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { museumInstitutionalsData } from '@/lib/data/museumInstitutionalData'
function page() {
  return (
    <InsidePage landingPageData={museumInstitutionalsData}/>
  )
}

export default page
