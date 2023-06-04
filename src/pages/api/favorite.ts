import { setCookie, getCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';

import Urls from '@/models/Urls';
import connectMongodb from '@/utils/connectMongodb';

const FavoriteLinksList = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongodb();

    if (req.method === 'GET') {
      const cookieFavoriteList = JSON.parse((getCookie('favorite', { req, res }) as string) || '[]');

      const urlsList = await Urls.find({ code: cookieFavoriteList }).select('url clicked code');

      const count = await Urls.find({ code: cookieFavoriteList }).countDocuments();
      return res.status(200).json({ urlsList, count });
    }

    return res.status(500).send('error');
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export default FavoriteLinksList;
