import axiosAPI from ".";

import { AuthData } from "../types/api/auth";

export async function loginAPI(data: AuthData) {
  await axiosAPI.post("/auth/login", data);
}

export async function logoutAPI() {
  await axiosAPI.post("/auth/logout");
}
