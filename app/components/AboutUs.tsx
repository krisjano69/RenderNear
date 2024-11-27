import Image from "next/image";
import city from "@/app/components/assets1/city.jpg";
import map from "@/app/components/assets1/map.jpg";
export default function NotificationBanner() {
  return (
    <div className="mb-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#782614,#010100_80%)] overflow-x-clip mt-20">
    <div className="flex items-center justify-between w-full mt-20 mb-20">
      
      <div className="w-1/3 pl-20">
        <Image
          src={map}
          alt="City View"
          className="w-full h-auto rounded-lg shadow-lg"
          width={612}
          height={408}
        />
      </div>

      

      
      <div className="w-2/3 pl-12 pr-8">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-800 via-orange-300 to-orange-700 inline-block text-transparent bg-clip-text text-center">Welcome to RenderNear</h1>
        <p className="text-white">
        
At RenderNear, we are revolutionizing the way people interact with their documents by blending cutting-edge AI technology with user-friendly interfaces. Our platform is designed to make document management, collaboration, and understanding simpler and more efficient than ever before.
Founded on the principles of innovation, reliability, and accessibility, RenderNear enables users to chat directly with their documents—whether it’s analyzing reports, extracting key insights, or answering queries in real time.
</p>
<h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-800 via-orange-300 to-orange-700 inline-block text-transparent bg-clip-text text-center">Our Mission</h1><p className="text-white">
To empower individuals and businesses by providing smart solutions that bridge the gap between data and decision-making. We aim to make complex information more approachable through seamless interaction with advanced AI tools.
        
        </p>
        
      
      
  
    </div>
    </div>
      <div className="flex items-center justify-between " >
         <div className="text-white pl-8 pr-8">
         <h1 className="text-3xl font-bold mb-0 text-white text-center">Why Choose RenderNear?</h1>
      <p>Why Choose RenderNear?
AI-Powered Document Interaction: Leverage state-of-the-art natural language processing to interact with documents like never before.
Efficiency & Accuracy: Quickly extract and analyze critical information, saving time and improving productivity.
Secure & Reliable: We prioritize data security and ensure all interactions are protected with top-tier encryption standards.
<h1 className="text-3xl font-bold mb-4 text-white text-center">Our Vision</h1>
To be the go-to platform for anyone who wants to understand and interact with their documents effortlessly, fostering a smarter and more connected future.

Join us at RenderNear and experience the next generation of document interaction. Let’s transform the way you work, one document at a time.</p></div>

      <div className=" place-self-end pr-20 w-full">
        <Image src={city}
        alt="Map view"
        className="w-full h-auto rounded-lg shadow-lg"
        width={866}
        height={650}
        />
      </div>
      
</div>


    
</div>
  );
}
