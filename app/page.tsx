import Image from 'next/image';
import { ApiArticles } from './api/articles-api';
import { ArticleList } from './components/ArticleList/ArticleList';
import top from '@/public/assets/top.png';
import { CryptoCard } from './components/Cryptocard/CryptoCard.server';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';

export default async function Home() {
    
    const articleList = await ApiArticles.fetchAllArticles();
    return (
        <>
            <header className='flex items-center space-x-2 mb-4'>
                <Image src={top} alt='' className='h-10 w-10' />
                <h1>Latest news</h1>
            </header>
            <main className='flex justify-between'>
                <Suspense fallback={<ul className='flex justify-center flex-wrap gap-x-8 gap-y-16 md:justify-normal'>
                    {Array.from({length: 6}).map((item, index) => <li key={index}><Skeleton width={320} height={340} /></li>)}
                </ul>}>
                    <ArticleList articleList={articleList} />
                </Suspense>
                <Suspense fallback={<div><Skeleton className='mb-8' height={28} width={240} /><Skeleton height={124} width={240} /></div>}>
                    <CryptoCard />
                </Suspense>
            </main>
        </>
    );
}
