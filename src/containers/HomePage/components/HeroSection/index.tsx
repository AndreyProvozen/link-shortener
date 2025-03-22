import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useState } from 'react';

import { Button } from '@/atoms';
import { HeroBGWaves } from '@/icons';

const HeroSection = () => {
  const [longLink, setLongLink] = useState('');

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setLongLink(event.target.value);

  return (
    <>
      <HeroBGWaves className="absolute inset-0 w-full h-full" preserveAspectRatio="none" />
      <div className="container max-w-[1024px] text-center mx-auto text-lg text-white-50 z-10">
        <div className="mt-7 my-5 text-white">
          <motion.h1
            className="text-5xl"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Link Shortener
          </motion.h1>
          <motion.p
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Free URL Shortener for transforming long, ugly links into nice, memorable and trackable short URLs
          </motion.p>
        </div>
        <form
          onSubmit={handleOnSubmit}
          className="mb-14 w-full relative flex flex-wrap items-stretch max-tablet-small:block"
        >
          <input
            type="search"
            value={longLink}
            onChange={handleInputChange}
            placeholder="Paste the URL to be shortened"
            className="rounded-r-none bg-white border-[1px] border-gray flex-auto relative m-0 rounded-l px-3 py-2.5 max-tablet-small:w-full max-tablet-small:rounded-r focus:outline-none focus:border-pink"
          />
          <Button
            type="submit"
            className="rounded-l-none text-center tablet-small:w-full tablet-small:rounded-l tablet-small:mt-4"
          >
            generate link
          </Button>
        </form>
      </div>
    </>
  );
};

export default HeroSection;
