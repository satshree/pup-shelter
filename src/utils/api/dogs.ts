import { getDogs, searchDogAPI } from "../../api/dogs";

export async function searchDogs(breed: string) {
  const dogSearchResponse = await searchDogAPI(breed);

  const dogs = await getDogs(dogSearchResponse.resultIds);

  return {
    dogs,
    ...dogSearchResponse,
  };
}
