export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export interface Match {
  match: string;
}

export interface Pagination {
  total: number;
  totalPage: number;
  currentPage: number;
}
