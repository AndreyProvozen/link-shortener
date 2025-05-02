import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { Button, Input } from '@/atoms';
import { ArrowIcon, HeroBGWaves, MouseIcon } from '@/icons';

const HeroSection = () => {
  const [longLink, setLongLink] = useState('');

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success('Short link generated successfully!');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setLongLink(event.target.value);

  return (
    <>
      <HeroBGWaves className="absolute inset-0 w-full h-full" preserveAspectRatio="none" />
      <div className="container max-w-[767px] px-5 text-center mx-auto text-lg text-white-50 z-10">
        <div className="mt-7 my-5 text-white">
          <motion.h1
            className="text-5xl"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Link Shortener
          </motion.h1>
          <p className="max-w-lg mx-auto min-h-14">
            Free URL Shortener for transforming long, ugly links into nice, memorable and trackable short URLs
          </p>
        </div>
        <form onSubmit={handleOnSubmit} className="mb-14 w-full relative flex gap-2 tablet-small:flex-col">
          <Input
            type="search"
            value={longLink}
            onChange={handleInputChange}
            placeholder="Paste the URL to be shortened"
          />
          <Button type="submit" className="shrink-0 h-[48px]">
            generate link
          </Button>
        </form>
      </div>
      <div className="absolute animate-bounce bottom-2 left-1/2 -translate-x-1/2 z-10 text-white-50">
        <MouseIcon width={36} height={36} />
        <ArrowIcon width={24} height={24} className="mx-auto" />
      </div>
    </>
  );
};

export default HeroSection;
