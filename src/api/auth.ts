import axios from "axios";
import { API_ROOT } from ".";

import { AuthData } from "../types/api/auth";

export async function loginAPI(data: AuthData) {
  await axios.post(API_ROOT + "/auth/login", data, {
    withCredentials: true,
  });
}

export async function logoutAPI() {
  await axios.post(API_ROOT + "/auth/logout");
}
