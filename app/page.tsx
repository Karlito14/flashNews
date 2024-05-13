import Image from 'next/image';
import { ApiArticles } from './api/articles-api';
import { ArticleList } from './components/ArticleList/ArticleList';
import top from '@/public/assets/top.png';

export default async function Home() {
    const articleList = await ApiArticles.fetchAllArticles();
    return (
        <>
            <header className='flex items-center space-x-2 mb-4'>
                <Image src={top} alt='' className='h-10 w-10' />
                <h1>Latest news</h1>
            </header>
            <main>
                <ArticleList articleList={articleList} />
            </main>
        </>
    );
}
