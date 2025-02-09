export interface SearchDogAPIResponse {
  resultIds: string[];
  total: number;
  next?: string;
  prev?: string;
}
