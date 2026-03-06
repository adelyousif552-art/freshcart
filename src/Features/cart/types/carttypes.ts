// Subcategory
export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

// Category
export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

// Brand
export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

// Product Details
export interface Product {
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  subcategory: Subcategory[];
  ratingsAverage: number;
  id: string;
}

// Cart Product Item
export interface CartProduct {
  count: number;
  _id: string;
  product: Product;
  price: number;
}

// Cart Data
export interface CartData {
  _id: string;
  cartOwner: string;
  products: CartProduct[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

// Main Response
export interface CartResponse {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: CartData;
}