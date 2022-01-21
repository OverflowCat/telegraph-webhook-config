/// <reference types="svelte" />

interface Article {
  url: string;
  title: string;
  content: string;
  desc: string;
  tags: string;
}
interface Telegram {
  bind?: boolean;
  name?: string;
  link?: string;
  chat?: string;
}
interface PublishParameters {
  version?: number;
  article: Article;
  telegram?: Telegram;
  telegraph?: {
    access_token?: string;
    author_name?: string;
    author_url?: string;
  };
  style?: {
    use_desc?: boolean;
  };
}
interface TelegraphCreateArticleResponse {
  ok: boolean;
  result?: {
    path: string;
    url: string;
    title: string;
    description: string;
    views: number;
    can_edit: boolean;
    author_name?: string;
    // Optional. Name of the author, displayed below the title.
    author_url?: string;
    // Optional. Profile link, opened when users click on the author's name below the title.  Can be any link, not necessarily to a Telegram profile or channel.
    image_url?: string;
    // Optional. Image URL of the page.
    content?: any;
    // Optional. Content of the page.
  };
}