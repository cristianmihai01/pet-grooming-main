import React, { useEffect, useState } from 'react';

// import data
import { bundleData } from '../data';

// import components
import Bundles from './Bundles';

const Prices = () => {
  const [bundles, setBundles] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setBundles(bundleData[0].services);
  }, []);

  const getBundle = (name) => {
    const newBundles = bundleData.find((bundle) => {
      return bundle.name === name;
    });
    setBundles(newBundles.services);
  };

  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-20 text-center'>How big your dog is?</h2>
        {/* bundles */}
        <div className='grid lg:grid-cols-4 gap-[30px]'>
          {bundleData.map((item, idx) => {
            return (
              <div
                onClick={() => {
                  {
                    getBundle(item.name);
                    setIndex(idx);
                  }
                }}
                key={idx}
                className='cursor-pointer text-center'
              >
                <div className='mb-8 hover:scale-105 transition-all duration-300'>
                  <img src={item.image.type} alt='' />
                </div>
                <h3 className='text-2xl capitalize font-semibold text-blue mb-2'>
                  {item.name}
                </h3>
                <div
                  className={`${
                    index === idx
                      ? 'border-b-4 border-orange transition-all'
                      : 'border-b-4 border-transparent'
                  } pb-4 mb-12 capitalize`}
                >
                  {item.dogCategory}
                </div>
              </div>
            );
          })}
        </div>
        <Bundles bundles={bundles} />
      </div>
    </section>
  );
};

export default Prices;
