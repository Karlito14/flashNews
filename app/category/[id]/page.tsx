import { CATEGORIES_ITEMS } from '@/app/constant';
import { ArticleCategory } from '@/app/types/article-types';
import Image from 'next/image';

export default function CatgeoryPage (props: { params: { id: ArticleCategory }}) {
    const categoryItem = CATEGORIES_ITEMS[props.params.id];

    return (
        <div className='flex items-center space-x-4'>
            <Image src={categoryItem.src} alt={categoryItem.alt} width={40} height={40} />
            <h1 className="font-bold capitalize text-3xl">{categoryItem.category} news</h1>
        </div>
    );
};