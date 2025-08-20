import MainPartnership from "@/components/Pages/PartnershipMain" 
import { coreTradeData } from "@/lib/data/coreTradeData"
export default function Home() {
  return <MainPartnership coreTradeData={coreTradeData} />
}
