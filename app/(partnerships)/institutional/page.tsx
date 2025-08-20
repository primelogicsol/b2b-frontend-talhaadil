import { MainPartnership } from "@/components/Pages/PartnershipMain"
import { institutionalData } from "@/lib/data/insitutationalData"
export default function Home() {
  return <MainPartnership pageData={institutionalData} />
}
