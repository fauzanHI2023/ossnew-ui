export interface NewsItem {
  id: number;
  post_title: string;
  excerpt: string;
  post_date: string;
  category: string;
  image: string;
  large?: boolean;
  news_integration: string;
  guid: string;
  slug: string;
  category_posts: string;
  hashtag_program: string;
}
