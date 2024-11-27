import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from "@/components/ui/button";


const Navbar = () => {
  

  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-black backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200 text-white'>
          
          <Link
            href='/'
            className='flex z-40 font-semibold text-white'>
            <span>RenderNear</span>
          </Link>

          
          <div className='flex items-center space-x-4'>
            <Link
              href='/'
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}>
              Home
            </Link>
            <Link
              href='/aboutUs'
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}>
              About us
            </Link>
            <Link
            href='/login'
              className={buttonVariants({
                variant: 'ghost',
                size:'sm'
              })}>
              Log-In
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
