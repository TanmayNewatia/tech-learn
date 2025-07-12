export interface Article {
  id: string;
  title: string;
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cover: any;
  publishedAt: Date;
}

// Define Strapi URL
export const STRAPI_URL = 'http://localhost:1337';
