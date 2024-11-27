
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <div className="text-center ">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl pb-12 ">
       <span className="text-white"> Find services near you instantly</span> 
      </h1>
      <p className="mt-0 max-w text-white sm:text-lg items-flex-center items-justify ">
        Search for products or services in your area and see them on the map.
      </p>
      <Link
        className={buttonVariants({ size: 'lg', className: 'mt-5 ' })}
        href="#searchBar"
        target="_blank"
        
      ><p className='text-white'>Start Searching</p>
         <ArrowRight className="ml-2 h-5 w-5 text-white" />
      </Link>
    </div>
  );
}
