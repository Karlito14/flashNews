import { ApiArticles } from '@/app/api/articles-api';

export default async function ArticlePage (props: { params : { title: string}}) {

    const article = await ApiArticles.fetchByTitle(props.params.title);

    return (
        <p>{article[0].title}</p>
    );
}