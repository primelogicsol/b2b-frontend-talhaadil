import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { importExportData } from '@/lib/data/importExportData'
function page() {
  return (
    <InsidePage landingPageData={importExportData}/>
  )
}

export default page
