import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <>  
    <Hero />
    <div className='h-[100vh]'>second page</div>
    </>
  )
}
