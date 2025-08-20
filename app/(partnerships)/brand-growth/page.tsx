import { brandGrowthData } from "@/lib/data/brandGrowth"
import {MainPartnership} from "@/components/Pages/PartnershipMain" 
export default function Home() {
  return <MainPartnership pageData={brandGrowthData} />
}
