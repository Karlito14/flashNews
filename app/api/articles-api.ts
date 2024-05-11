import { Article, ArticleList } from '../types/article-types';

export class ApiArticles {

    static async fetchAllArticles(): Promise<Article[]> {
        const response = await fetch(`${process.env.API_BASE_URL}`);
        const data: ArticleList = await response.json();
        return data.results;
    };

    static async fetchByCategorie(category: string) {
        const response = await fetch(`${process.env.API_BASE_URL}?category=${category}`);
        const data: ArticleList = await response.json();
        return data.results;
    }
}