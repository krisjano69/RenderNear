import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import space from '../components/assets1/space.png';

export default function AboutUsPage() {
  return (
    <div
        style={{
          backgroundImage: `url(${space.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="pb-12 pt-6 h-screen"
      > 
    
        <div className=" mt-40 text-center  ">
          
          <div className="text-white  text-3xl mb-6">
            <span>Please fill the the blank fields</span>
            
          </div>
          
          <div className="flex flex-col items-center ">
      <input
          type="text"
          placeholder="Username "
          className="w-1/4 p-2 border border-gray-300 rounded-lg"
        />
        </div>
            
        <div className="flex flex-col items-center ">
      <input
          type="text"
          placeholder="Password "
          className="w-1/4 p-2 border border-gray-300 rounded-lg mt-2"
        />
        </div>
        <div className="flex flex-col items-center ">
      <input
          type="text"
          placeholder="Email adress "
          className="w-1/4 p-2 border border-gray-300 rounded-lg mt-2"
        />
        </div>
        <div className="flex flex-col items-center ">
      <input
          type="text"
          placeholder="Name "
          className="w-1/4 p-2 border border-gray-300 rounded-lg mt-2"
        />
        </div>
        <div className="flex flex-col items-center ">
      <input
          type="text"
          placeholder="Surname "
          className="w-1/4 p-2 border border-gray-300 rounded-lg mt-2"
        />
        </div>
        
        <div className='flex flex-col items-center'>
          <button className='text-white mt-4 text-xl border border-white-300 rounded-lg w-auto font-semibold'>Create an account</button>
        </div>
          
          
        </div>
        </div>
      );
}
