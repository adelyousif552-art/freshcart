export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
export interface PaginationMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number; // optional عشان ممكن متبقاش موجودة
}
export interface BrandsResponse {
  results: number;
  metadata: PaginationMetadata;
  data: Brand[];
}