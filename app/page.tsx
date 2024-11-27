// page.tsx
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Map from './components/Map';
import AboutUs from './components/AboutUs'; 
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';

import ServiceList from './components/ServiceList';
import ServiceCards from './components/ServiceCards';
import space from './components/assets1/space.png';



export default function Home() {
  return (
    <div>
      
      <div
        style={{
          backgroundImage: `url(${space.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="pb-12 pt-6"
      >
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
          <HeroSection />
        </MaxWidthWrapper>
        <ServiceCards />
      </div>
      <AboutUs/>
      
         <SearchBar />
      
     
      <div className=" justify-center mt-0">
        <div className="w-screen ">
          <Map />
        </div>
        
          
          
        
      </div>
      

      <ServiceList />
    </div>
  );
}
