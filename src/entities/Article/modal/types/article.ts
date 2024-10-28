import { User } from 'entities/User';

export enum ArticleBlockType {
  TEXT ='TEXT',
  CODE ='CODE',
  IMAGE ='IMAGE'
}

export enum ArticleSortField {
  CREATED ='CreatedAt',
  TITLE ='title',
  VIEWS ='views',
}

interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType
}
export interface ArticleBlockCode extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}
export interface ArticleBlockImage extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}
export interface ArticleBlockText extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export type ArticleBlock = ArticleBlockCode | ArticleBlockImage | ArticleBlockText

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export interface Article {
  id: string;
  user: User;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}