import { Article } from '@/app/types/article-types';
import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES_ITEMS } from '@/app/constant';
import { ImageComponent } from '../ImageWithFallback/ImageWithFallback';
import defaultImage from '@/public/assets/default-news.png';

export const ArticleCard = (props: { article: Article}) => {
    return (
        <li className='w-80 hover:bg-slate-50 transition transform hover:scale-105 border-2 border-gray-100 py-4 px-6 rounded-xl shadow-sm'>
            <Link href={'/articles'}>
                <article className='space-y-4'>
                    <header className='capitalize'>
                        <div className='flex items-center space-x-2'>
                            <div className='flex items-center justify-center w-10 h-10 rounded-full border border-slate-300'>
                                <Image src={CATEGORIES_ITEMS[props.article.category[0]].src} alt='icon category' className='w-5 h-5' />
                            </div>
                            <h3 className='font-bold text-md'>{props.article.category}</h3>
                        </div>
                        <small className='mt-2 text-sm text-gray-400'>Published : <time>{new Date(props.article.pubDate).toDateString()}</time></small>
                    </header>
                    <section>
                        <h2 className='font-semibold text-xl line-clamp-2 h-14 mb-2'>{props.article.title}</h2>
                        <ImageComponent 
                            image={props.article.image_url} 
                            alt='' 
                            height={200} 
                            width={300} 
                            className='h-40 object-cover w-full rounded-lg' 
                            fallback={defaultImage} 
                        />
                    </section>
                </article>
            </Link>
        </li>
    );
};