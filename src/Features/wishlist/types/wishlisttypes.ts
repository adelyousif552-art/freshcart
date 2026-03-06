export interface ProductsResponse {
  count: number;
  data: Product[];
}
export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  sold: number | null;
  imageCover: string;
  images: string[];
  subcategory: SubCategory[];
  category: Category;
  ratingsQuantity: number;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  priceAfterDiscount?:number
}