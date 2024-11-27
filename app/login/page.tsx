import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import space from '../components/assets1/space.png';

export default function LoginRegister() {
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
      
      
    
    <div className=" mt-40 text-center   ">
      
      <div className="text-white font-semibold text-3xl mb-8">
        <span>Log-in </span>
        <span>to your existing account</span>
        
      </div>
      <div className="flex flex-col items-center ">
      <input
          type="text"
          placeholder="Username "
          className="w-1/4 p-2 border border-gray-300 rounded-lg"
        />
        </div>
        
        <div className="flex flex-col items-center mt-4">
        <input
          type="text"
          placeholder="password"
          className="w-1/4 p-2 border border-gray-300 rounded-lg"
        />
        </div>

        <div className='flex flex-col items-center'>
          <button className='text-white mt-4 text-xl border border-white-300 rounded-lg w-20 font-semibold'>Log in</button>
        </div>



        <div className="text-white  text-xl mt-2">
        <span>Don't have an account</span>
      </div>
      <div className="text-white  text-l mb-6 ">
      <span className='mr-0'>Press here to </span>
      
      <div></div>
      <Link
        className={buttonVariants({ size: 'lg', className: 'mt-0' })}
        href="register"
        target="_blank"
        
      > Create a new Account
      <ArrowRight className="ml-1 h-5  text-white" />
      </Link>
      
      </div>
      
    </div>
    </div>
  );
}
