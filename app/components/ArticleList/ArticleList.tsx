import { Article } from '@/app/types/article-types';
import { ArticleCard } from '../ArticleCard/ArticleCard';

export const ArticleList = (props: {articleList: Article[]}) => {
    return (
        <ul className='flex justify-center flex-wrap gap-x-8 gap-y-16 md:justify-normal'>
            {props.articleList.map(article => <ArticleCard key={article.article_id} article={article} />)}
        </ul>
    );
};