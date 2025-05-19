// TypeScript type definitions

interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  title: string;
  description?: string;
  keywords?: string[];
  logo?: ImageWithAlt;
  navigation?: Page[];
  socialLinks?: { platform: string; url: string }[];
  footerText?: string;
  googleAnalyticsId?: string;
  googleSearchConsoleId?: string;
  googleTagManagerId?: string;
}

interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: { current: string };
  seoDescription?: string;
  content?: (Block | ImageWithAlt | TextImage | FeatureCards | FeatureList | FeatureSticky | BasicForm | ContactCards | FaqSticky | HomeCTA | HighlightRows | SignUp | PricingColumns | Accordion)[];
}

interface BlogPost {
  _id: string;
  _type: 'blogPost';
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: ImageWithAlt;
  categories?: Category[];
  tags?: Tag[];
  body?: (Block | ImageWithAlt)[];
  author?: Author;
  seoDescription?: string;
}

interface Category {
  _id: string;
  _type: 'category';
  title: string;
  slug: { current: string };
  description?: string;
}

interface Tag {
  _id: string;
  _type: 'tag';
  title: string;
  slug: { current: string };
  description?: string;
}

interface Author {
  _id: string;
  _type: 'author';
  name: string;
  slug: { current: string };
  image?: ImageWithAlt;
  bio?: string;
}

interface ImageWithAlt {
  _type: 'imageWithAlt';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt: string;
}

interface TextImage {
  _type: 'textImage';
  text?: string;
  image?: ImageWithAlt;
  imagePosition?: 'left' | 'right';
}

interface FeatureCards {
  _type: 'featureCards';
  title?: string;
  cards?: FeatureCard[];
}

interface FeatureCard {
  _type: 'featureCard';
  title?: string;
  description?: string;
  icon?: ImageWithAlt;
}

interface FeatureList {
  _type: 'featureList';
  title?: string;
  features?: Feature[];
}

interface Feature {
  _type: 'feature';
  title?: string;
  description?: string;
  icon?: ImageWithAlt;
}

interface FeatureSticky {
  _type: 'featureSticky';
  title?: string;
  description?: string;
  image?: ImageWithAlt;
  features?: Feature[];
}

interface BasicForm {
  _type: 'basicForm';
  title?: string;
  description?: string;
  successMessage?: string;
}

interface ContactCards {
  _type: 'contactCards';
  title?: string;
  cards?: { title: string; description: string; icon?: ImageWithAlt; link?: string }[];
}

interface FaqSticky {
  _type: 'faqSticky';
  title?: string;
  faqs?: Faq[];
  image?: ImageWithAlt;
}

interface Faq {
  _type: 'faq';
  question: string;
  answer?: string;
}

interface HomeCTA {
  _type: 'homeCTA';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HighlightRows {
  _type: 'highlightRows';
  rows?: { title: string; description: string; image?: ImageWithAlt; buttonText?: string; buttonLink?: string }[];
}

interface SignUp {
  _type: 'signUp';
  title?: string;
  description?: string;
  formId?: string;
}

interface PricingColumns {
  _type: 'pricingColumns';
  title?: string;
  plans?: PricingPlan[];
}

interface PricingPlan {
  _type: 'pricingPlan';
  name: string;
  price: number;
  currency: string;
  features?: string[];
  isRecommended?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

interface Accordion {
  _type: 'accordion';
  title?: string;
  items?: AccordionItem[];
}

interface AccordionItem {
  _type: 'accordionItem';
  title: string;
  content?: string;
}

interface Block {
  _type: 'block';
  _key: string;
  markDefs?: any[];
  children: {
    _type: 'span';
    _key: string;
    text: string;
    marks?: string[];
  }[];
  style?: string;
}

type SanityDocument = SiteSettings | Page | BlogPost | Category | Tag | Author | ImageWithAlt | TextImage | FeatureCards | FeatureCard | FeatureList | Feature | FeatureSticky | BasicForm | ContactCards | FaqSticky | Faq | HomeCTA | HighlightRows | SignUp | PricingColumns | PricingPlan | Accordion | AccordionItem | Block;
