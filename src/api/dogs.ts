import axios from "axios";

import { Dog, Match } from "../types/models";
import { SearchDogAPIResponse } from "../types/api/dogs";

import { API_ROOT } from ".";

export async function getDogBreedAPI(): Promise<string[]> {
  const response = await axios.get(API_ROOT + "/dogs/breeds");

  return response.data;
}

export async function searchDogAPI(
  breed: string
): Promise<SearchDogAPIResponse> {
  const response = await axios.get(
    API_ROOT + `/dogs/search/?size=9&sort=breed:asc&breeds=${breed}`
  );

  return response.data;
}

export async function getDogs(idList: string[]): Promise<Dog[]> {
  const response = await axios.post(API_ROOT + "/dogs", idList);

  return response.data;
}

export async function matchDog(idList: string[]): Promise<Match> {
  const response = await axios.post(API_ROOT + "/dogs/match", idList);

  return response.data;
}
