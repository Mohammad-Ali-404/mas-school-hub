import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import TopNav from '@/components/TopNav'
export default function Home() {
  return (
    <main className="">
      <div>
        <TopNav/>
        <Navbar/>
        <Banner/>
      </div>
    </main>
  )
}
