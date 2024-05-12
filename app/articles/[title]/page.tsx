import { ApiArticles } from '@/app/api/articles-api';
import { ImageComponent } from '@/app/components/ImageWithFallback/ImageWithFallback';
import { CATEGORIES_ITEMS } from '@/app/constant';
import Image from 'next/image';
import fallback from '@/public/assets/lightning.png';

export default async function ArticlePage (props: { params : { title: string}}) {

    const article = await ApiArticles.fetchByTitle(props.params.title);

    const category = CATEGORIES_ITEMS[article.category[0]];

    return (
        <>
            <header className='mb-4'>
                <div className='flex items-center space-x-2 mb-2'>
                    <div className='border border-slate-300 rounded-full p-2'>
                        <Image src={category.src} alt='icon category' width={20} height={20} />
                    </div>
                    <h2 className='text-md capitalize font-semibold'>{article.category}</h2>
                </div>
                <small className='text-xs text-slate-500'>Published : <time>{new Date(article.pubDate).toDateString()}</time></small>
            </header>
            <main>
                <div className='space-y-4'>
                    <h1 className='text-xl font-bold'>{article.title}</h1>
                    <h2>{article.description}</h2>
                    <div className='flex justify-center'>
                        <ImageComponent image={article.image_url} alt={article.title} fallback={fallback} width={400} height={300} className='w-full rounded-lg' />
                    </div>
                </div>
            </main>
        </>
    );
}