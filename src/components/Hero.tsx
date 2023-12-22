import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white mt-8 h-96 w-full p-8" >
      <div className="flex flex-col items-center justify-center text-align-left">
        <h1 className="text-4xl font-bold mb-4">Circuit Protection to rely on - HYMAG circuit breakers</h1>
        <p className="text-lg mb-8">In the realm of circuit protection, HYMAG circuit breakers emerge as the reliable cornerstone for safeguarding electrical systems</p>
        <Button size="lg" variant={"outline"}>
          Read more
        </Button>
      </div>
    </section>
  );
};

export default Hero;