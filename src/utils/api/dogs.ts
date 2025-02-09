import { getDogs, searchDogAPI } from "../../api/dogs";
import { SearchDogAPIResponse } from "../../types/api/dogs";

import { Pagination } from "../../types/models";

export async function searchDogs(
  breed: string,
  from: number = 0,
  sort: "asc" | "desc" = "asc"
) {
  const getCurrentPage = (apiResponse: SearchDogAPIResponse) => {
    if (!apiResponse.prev) return 1;

    const currentPageBefore = Math.floor(
      Number(apiResponse.prev.split("from=")[1]) / 9
    );
    return currentPageBefore + 1;
  };

  const dogSearchResponse = await searchDogAPI(breed, from, sort);

  const dogs = await getDogs(dogSearchResponse.resultIds);

  const pagination: Pagination = {
    total: dogSearchResponse.total,
    totalPage: Math.trunc(dogSearchResponse.total / 9),
    currentPage: getCurrentPage(dogSearchResponse),
  };

  return {
    dogs,
    pagination,
  };
}
