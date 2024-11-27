import AboutUs from '../components/AboutUs'; 
import Image from "next/image";
import anna from '../components/assets1/anna.jpg'; 
import lexa from '../components/assets1/lexa.jpg'; 
import kris from '../components/assets1/kris.jpg'; 
import taps from '../components/assets1/taps.jpg'; 

export default function AboutUsPage() {
  return (
    <div>

    <div className='flex items-center text-center justify-center text-white font-semibold text-3xl ' >
      <div>
        <Image 
        src={kris}
        alt="Krisjanis"
        className=" rounded-lg shadow-lg"
        width={240}
        height={120}/>
        <h1 className='mr-12'>
          Krišjānis Ādamsons
        </h1>
        </div>
        <div className='mr-12'>
        <Image 
        src={lexa}
        alt="Alexa"
        className=" rounded-lg shadow-lg"
        width={240}
        height={120}/>
        <h1>
          Aleksandra Červinska
        </h1>
        </div>
        <div className='mr-12'>
        <Image 
        src={taps}
        alt="Kristaps"
        className=" rounded-lg shadow-lg"
        width={240}
        height={120}/>
        <h1>
          Kristaps Ozoliņš
        </h1></div>
        <div className='mr-12'>
        <Image 
        src={anna}
        alt="Anna"
        className="rounded-lg shadow-lg"
        width={240}
        height={120}/>
        <h1>
          Anna Kūliņa
        </h1></div>

    </div>
      <AboutUs/>
      
    </div>
  );
}
