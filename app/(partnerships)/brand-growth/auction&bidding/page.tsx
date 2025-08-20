import InsidePage from '@/components/Pages/InsidePageMain'
import React from 'react'
import { auctionBiddingData } from '@/lib/data/auctionBiddingData'
function page() {
  return (
    <InsidePage landingPageData={auctionBiddingData}/>
  )
}

export default page
