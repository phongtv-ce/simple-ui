export interface IBlog {
  id?: string;
  title?: string;
  image?: string;
  imageAlt?: string;
  content?: string;
  createdAt?: string;
}

export interface IBlogItem extends Partial<IBlog> {
}

export interface IBlogDetails extends Partial<IBlog> {
}
