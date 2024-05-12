import { ApiArticles } from '@/app/api/articles-api';
import { ArticleList } from '@/app/components/ArticleList/ArticleList';
import { CATEGORIES_ITEMS, NAV_ITEMS } from '@/app/constant';
import { ArticleCategory } from '@/app/types/article-types';
import Image from 'next/image';

export function generateStaticParams() {
    return NAV_ITEMS.map(categorie => {
        return {
            id: categorie.category,
        };
    });
}

export default async function CatgeoryPage (props: { params: { id: ArticleCategory }}) {
    const categoryItem = CATEGORIES_ITEMS[props.params.id];
   
    const data = await ApiArticles.fetchByCategorie(props.params.id);
    
    return (
        <>
            <header className='flex items-center space-x-4 mb-6'>
                <Image src={categoryItem.src} alt={categoryItem.alt} width={40} height={40} />
                <h1 className="font-bold capitalize text-3xl">{categoryItem.category} news</h1>
            </header>
            <main>
                <ArticleList articleList={data} />
            </main>
        </>
    );
};