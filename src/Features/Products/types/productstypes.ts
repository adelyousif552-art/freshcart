export interface ProductsResponse {
  results: number;
  metadata: PaginationMetadata;
  data: Product[];
}

export interface PaginationMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
}

export interface Product {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  sold: number | null;
  imageCover: string;
  images: string[];
  category: Category;
  subcategory: SubCategory[];
  brand: Brand;
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
  priceAfterDiscount?:number
  reviews:Review[]
  
  
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface singleproducttype{
  data:Product
}
export interface ReviewUser {
  _id: string;
  name: string;
}

export interface Review {
  _id: string;
  review?: string;
  rating: number;
  product: string;
  user: ReviewUser;
  createdAt: string;
  updatedAt: string;
  __v: number;
}