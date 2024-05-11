import { Article, ArticleList } from '../types/article-types';

export class ApiArticles {

    static async fetchAllArticles(): Promise<Article[]> {
        const response = await fetch('http://localhost:3090/news');
        const data: ArticleList = await response.json();
        return data.results;
    };

    static async fetchByCategorie(category: string) {
        const response = await fetch(`http://localhost:3090/news?category=${category}`);
        const data: ArticleList = await response.json();
        return data.results;
    }
}