export const MOCK_TEXT_WITH_IMAGE = [
  {
    title: 'Link Performance',
    listData: [
      'View click-through rates and link performance metrics',
      'Monitor link performance over time',
      'View statistics on user demographics and devices used to access your links',
      'Identify your top-performing links and focus your marketing efforts accordingly',
    ],
    linkData: { src: '/image/contentImage2.avif', alt: 'Link Performance image' },
    text: '<p>Track the performance of your links and gain valuable insights into your audience. View detailed statistics on click-through rates, link performance metrics, and user demographics. Monitor how your links are performing over time and identify your top-performing links. With this information, you can optimize your marketing efforts and make data-driven decisions for better results.</p>',
  },
  {
    title: 'User Engagement',
    listData: [
      'Analyze clicks, unique visitors, and conversion rates to understand user engagement',
      'View top referrers, sources, and campaigns driving traffic to your links',
      'Identify channels for improvement and make data-driven decisions to enhance link engagement',
      'Analyze geographic location of link clicks to tailor your marketing efforts',
    ],
    linkData: {
      src: '/image/contentImage1.avif',
      alt: 'User Engagement image',
    },
    text: '<p>Understand the engagement of your users with your links. Analyze the number of clicks, unique visitors, and conversion rates to gain insights into user engagement. Explore top referrers, sources, and campaigns that drive traffic to your links. Identify areas for improvement and make data-driven decisions to enhance link engagement. Analyze the geographic location of link clicks to better understand your audience and tailor your marketing efforts to specific regions.</p>',
  },
  {
    title: 'Link Customization',
    listData: [
      'Customize link appearance with branding elements',
      'Create branded short links with custom domains',
      'Choose link thumbnails and preview images for a visually appealing presentation',
      'Create custom slugs for easy sharing and memorability',
    ],
    linkData: {
      src: '/image/contentImage3.avif',
      alt: 'Link Customization image',
    },
    text: '<p>Elevate your brand presence with customized links. Add branding elements such as logos, colors, and fonts to customize the appearance of your links. Create branded short links by adding custom domains, giving them a professional and recognizable touch. Enhance the visual appeal of your links by choosing link thumbnails and preview images that resonate with your audience. Create custom slugs, which are unique and memorable link URLs, making it easier for users to remember and share your links.</p>',
  },
  {
    title: 'Campaign Tracking',
    listData: [
      'Track link performance in different marketing campaigns',
      'Assign unique tags or labels to categorize and organize links',
      'Analyze campaign-specific metrics like click-through rates, conversion rates, and revenue',
      'Make informed decisions based on campaign performance',
    ],
    linkData: {
      src: '/image/contentImage4.avif',
      alt: 'Campaign Tracking image',
    },
    text: '<p>Efficiently track the success of your marketing campaigns with campaign tracking. Assign unique tags or labels to categorize and organize your links based on different campaigns. Analyze campaign-specific metrics such as click-through rates, conversion rates, and revenue. Make informed decisions about your marketing strategies based on the performance of your campaigns. Optimize your campaigns for better results and achieve your marketing goals.</p>',
  },
];

export const MOCK_QUESTIONS = [
  {
    title: 'What is a URL shortener?',
    description:
      '<div><p>A URL shortener is a tool that takes a long URL (uniform resource locator) and creates a shorter, more compact version of it. The shortened URL redirects to the original URL when accessed. URL shorteners are often used for social media posts, messaging, and email where character count is limited or to make URLs more visually appealing.</p></br><p>URL shortening services typically provide users with a unique shortened URL that they can share instead of the longer original URL. Some URL shorteners also provide analytics to track clicks and other data about the shortened URLs.</p></br><p>Most URL shorteners use a 301 redirect, which is a permanent redirect, to forward users from the shortened URL to the original URL. This means that any SEO (search engine optimization) benefits associated with the original URL are passed to the shortened URL.</p></div>',
  },
  {
    title: 'Benefits of a short URL',
    description:
      '<p>How many people can even remember a long web address, especially if it has tons of characters and symbols? A short URL can make your link more memorable. Not only does it allow people to easily recall and share your link with others, it can also dramatically improve traffic to your content.</p>',
  },
  {
    title: 'What is a QR Code?',
    description:
      '<p>Quick response or QR, is a type of barcode that can store a multitude of information. The obvious difference between a QR Code and Barcode is its appearance. A QR Code is always in the shape of a square and contains smaller, even blocks similar to Tetris. A Barcode, on the other hand, has vertical bars in different thicknesses and is often accompanied by a serial number.</p>',
  },
  {
    title: 'What can a QR Code do?',
    description:
      '<p>Because of its versatility, a QR Code can be programmed to do a multitude of things. It can be split into two formats: Dynamic and Static. A Dynamic QR Code is useful for businesses or nonprofits in their marketing strategy because of its advantages. Though it needs a subscription to work, it is a small price to pay compared to the benefits it offers. Dynamic QR Code solutions are editable, which means if you made a mistake and only noticed it after the QR Codes are printed, you can easily log in to the dashboard and fix them without changing the appearance of the already printed Codes.</p>',
  },
];

export const LOGGED_INFO_BLOCK = { title: 'Need Help? We’re Here for You', btnHref: '/#', btnText: 'Contact Support' };
export const GUEST_INFO_BLOCK = { title: 'Sign up to see full link statistic', btnHref: '/signup', btnText: 'Sign up' };
