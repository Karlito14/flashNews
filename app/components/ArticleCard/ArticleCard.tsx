import { Article } from '@/app/types/article-types';
import Link from 'next/link';

export const ArticleCard = (props: { article: Article}) => {
    console.log(props.article);
    return (
        <li>
            <Link href={'/articles'}>
            
            </Link>
        </li>
    );
};