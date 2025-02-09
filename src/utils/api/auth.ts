import moment from "moment";

import { loginAPI, logoutAPI } from "../../api/auth";

import { AuthData } from "../../types/api/auth";

import {
  loadFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../storage";

const AUTH_KEY = "auth";
const AUTH_EXPIRE_KEY = "authExpire";

export async function authenticateUser(data: AuthData) {
  const response = await loginAPI(data);

  saveToLocalStorage(AUTH_KEY, data);
  saveToLocalStorage(AUTH_EXPIRE_KEY, moment().add(1, "hours").format("X"));

  return response;
}

export async function endUserSession() {
  removeFromLocalStorage(AUTH_KEY);
  removeFromLocalStorage(AUTH_EXPIRE_KEY);

  await logoutAPI();
}

export function isLoggedIn() {
  const authExpire = loadFromLocalStorage(AUTH_EXPIRE_KEY);

  if (!authExpire) return false;

  if (Number(authExpire) < Number(moment().format("X"))) return false; // expired

  return true;
  //   const localAuthData = loadFromLocalStorage(AUTH_KEY);
}
