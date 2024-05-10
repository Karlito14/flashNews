import { ApiArticles } from './api/articles-api';
import { ArticleCard } from './components/ArticleCard/ArticleCard';
import { ArticleList } from './components/ArticleList/ArticleList';

export default async function Home() {
    const articleList = await ApiArticles.fetchAllArticles();
    return <ArticleList articleList={articleList} />;
}
