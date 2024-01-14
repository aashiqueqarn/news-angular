export interface INewsResponse {
    status: string;
    totalResult: number;
    articles: IArticle [];
}


export interface ISource {
    id: string;
    name: string;
}

export interface IArticle {
    url: string;
    title: string;
    author: string;
    source: ISource;
    content: string;
    urlToImage: string;
    description: string;
    publishedAt: string;
}