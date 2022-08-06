import React from 'react';
import { useEffect } from 'react';
import Chance from 'chance';

function AboutUs() {
  const chance = new Chance();
  useEffect(() => {

    (async () => {
      await Promise.all(Array.from(Array(100).keys()).map(async () => {
        fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/product`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify({
            productName: chance.name(),
            price: chance.floating({ min: 1, max: 1000000000 }),
            category: chance.word(),
            description: chance.paragraph(),
            images: [chance.string(), chance.string(), chance.string()],
            variation: ['small', 'medium', 'large'],
            SKU: chance.string(),
            availableStock: chance.integer({ min: 1, max: 500 }),
            sold: chance.integer({ min: 0, max: 500 })
          })
        });
      }));
    })();
  }, []);
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

export default AboutUs;