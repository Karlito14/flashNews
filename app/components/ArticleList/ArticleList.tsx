import { Article } from '@/app/types/article-types';
import { ArticleCard } from '../ArticleCard/ArticleCard';

export const ArticleList = (props: {articleList: Article[]}) => {
    return (
        <ul className='space-y-4'>
            {props.articleList.map(article => <ArticleCard key={article.article_id} article={article} />)}
        </ul>
    );
};