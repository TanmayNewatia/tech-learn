'use client';

import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Article, STRAPI_URL } from '@/src/common/interface';

export default function Home() {
  // Define articles state
  const [articles, setArticles] = useState<Article[]>([]);
  const getArticles = async () => {
    const response = await axios.get(`${STRAPI_URL}/api/articles?populate=*`);
    const data = response.data.data;
    setArticles(data);
  };
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  // fetch articles along with their covers

  useEffect(() => {
    getArticles();
  });

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">
        Next.js and Strapi Integration
      </h1>
      <div>
        <h2 className="text-2xl font-semibold mb-6">Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles?.map(article => (
            <article
              key={article.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                className="w-full h-48 object-cover"
                src={STRAPI_URL + article.cover.url}
                alt={article.title}
                width={180}
                height={38}
                priority
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.content}</p>
                <p className="text-sm text-gray-500">
                  Published: {formatDate(article.publishedAt)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
