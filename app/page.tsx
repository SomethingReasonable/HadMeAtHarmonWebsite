import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import defaultPhoto from '../public/default.jpg'

const sacramento = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export default function Home() {
  return (
    <div className={sacramento.className}>
      <Image
        className='blur-md'
        src={defaultPhoto}
        alt='Engagement Photo'
        layout='fill'
        objectFit='cover'
        quality={100}
      />
      <div className='flex flex-col absolute inset-0 flex items-center justify-center z-10'>
        <p className='text-white text-4xl font-bold'>Had Me At Harmon</p>
        <p className='text-xl'>March/April 2024</p>
      </div>
    </div>
  )
}
