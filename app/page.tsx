import { ApiArticles } from './api/articles-api';

export default async function Home() {
    const articleList = await ApiArticles.fetchAllArticles();
    return <p>Hello world</p>;
}
