import { motion } from 'framer-motion';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

import { Button, Input } from '@/atoms';
import { LinksListSkeleton } from '@/components';
import { ArrowIcon, HeroBGWaves, MouseIcon } from '@/icons';
import { useLinksList } from '@/providers';

import LinksListItem from '../LinksListItem';

const HeroSection: FC = () => {
  const [longLink, setLongLink] = useState('');
  const { addNewLink, linksList, isLoading } = useLinksList();

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addNewLink(longLink, () => setLongLink(''));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setLongLink(event.target.value);

  return (
    <>
      <HeroBGWaves className="absolute inset-0 w-full h-full" preserveAspectRatio="none" />
      <div className="container max-w-[767px] px-5 text-center mx-auto text-lg text-white-50 z-10">
        <div className="mt-7 mb-5 text-white">
          <motion.h1
            className="text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Link Shortener
          </motion.h1>
          <p className="max-w-lg mx-auto">
            Free URL Shortener for transforming long, ugly links into nice, memorable and trackable short URLs
          </p>
        </div>
        <form onSubmit={handleOnSubmit} className="mb-8 w-full relative flex gap-2 tablet-small:flex-col">
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
        {isLoading ? (
          <LinksListSkeleton isHomePageList={true} />
        ) : (
          linksList.map(linkData => (
            <LinksListItem
              {...linkData}
              key={linkData.code}
              isExternalShortLink
              containerClasses="bg-white-50 rounded-md mb-5"
            />
          ))
        )}
      </div>
      <div className="absolute tablet-small:hidden animate-bounce bottom-2 left-1/2 -translate-x-1/2 z-10 text-white-50">
        <MouseIcon width={36} height={36} />
        <ArrowIcon width={24} height={24} className="mx-auto" />
      </div>
    </>
  );
};

export default HeroSection;
