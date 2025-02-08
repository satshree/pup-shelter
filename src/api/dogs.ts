import axiosAPI from ".";

import { Dog, Match } from "../types/models";
import { SearchDogAPIResponse } from "../types/api/dogs";

export async function getDogBreedAPI(): Promise<string[]> {
  const response = await axiosAPI.get("/dogs/breeds", {
    withCredentials: true,
  });

  return response.data;
}

export async function searchDogAPI(
  breed: string
): Promise<SearchDogAPIResponse> {
  const response = await axiosAPI.get(
    `/dogs/search/?size=9&sort=breed:asc&breeds=${breed}`
  );

  return response.data;
}

export async function getDogs(idList: string[]): Promise<Dog[]> {
  const response = await axiosAPI.post("/dogs", idList);

  return response.data;
}

export async function matchDog(idList: string[]): Promise<Match> {
  const response = await axiosAPI.post("/dogs/match", idList);

  return response.data;
}
