import VerticalHeroSlider from '@/components/Essentials/VerticalBanner'
import Accordion from '@/components/Material/Accordion'
import Counter from '@/components/Material/Counter'
import PremiumTabs from '@/components/Material/PremiumTabs'
import ScrollSection from '@/components/Section/ScrollSection'
import React from 'react'

function page() {
  return (
    <div>
        <VerticalHeroSlider/>
        <Accordion/>
        <PremiumTabs/>
        <Counter/>
        <Counter/>
        <ScrollSection/>
    </div>
  )
}

export default page