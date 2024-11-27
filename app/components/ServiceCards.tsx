import React from 'react';

const services = [
  {
    id: 1,
    title: 'Free plan',
    description: 'This is a brief description of Product One.',
    price: '$0.00',
    height:'250px',
    witdh: '300px',
  },
  {
    id: 2,
    title: 'Buisnes plan',
    description: 'This is a brief description of Product Two.',
    price: '$5.99',
    height:'350px',
    witdh: '300px',
  },
  {
    id: 3,
    title: 'Premuim plan',
    description: 'This is a brief description of Product Three.',
    price: '$18.99',
    height:'400px',
    witdh: '300px',
  },
];

const ServiceCards: React.FC = () => {
  return (
    <div>
    <div className='items-center pl-36 content-between'>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place items-end justify-center ">
      {services.map((product) => (
        <div
          key={product.id}
          className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg ${product.heightClass}  ${product.witdhClass} transition text-right "
          style={{ height: product.height, width: product.witdh }}
          
        ><div className='items-flex justify-center '>
          <h2 className="text-xl font-bold text-center">{product.title}</h2>
          <p className="mt-2 text-gray-700 text-center">{product.description}</p>
          <p className="mt-4 text-lg font-semibold text-right">{product.price}</p>
          <button className="mt-4 bg-black overflow-x-clip text-white py-2 px-4 rounded hover:bg-blue-600 text-right">
            Buy now
          </button>
          </div>
        </div>
      ))}
    </div>
    
    </div>
    <div className='pt-20 justify-center flex'>
  
  <h1 className="text-white text-8xl font-semibold text-center justify-center">
    About Us
    </h1>
</div>
    </div>
  );
};

export default ServiceCards;
