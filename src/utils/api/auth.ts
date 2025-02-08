import moment from "moment";

import { loadFromLocalStorage, saveToLocalStorage } from "../storage";

import { loginAPI } from "../../api/auth";
import { AuthData } from "../../types/api/auth";

const AUTH_KEY = "auth";
const AUTH_EXPIRE_KEY = "authExpire";

export async function authenticateUser(data: AuthData) {
  await loginAPI(data);

  saveToLocalStorage(AUTH_KEY, data);
  saveToLocalStorage(AUTH_EXPIRE_KEY, moment().add(1, "hours").format("X"));
}

export function isLoggedIn() {
  const authExpire = loadFromLocalStorage(AUTH_EXPIRE_KEY);

  if (!authExpire) return false;

  if (Number(authExpire) > Number(moment().format("X"))) return false; // expired

  return true;
  //   const localAuthData = loadFromLocalStorage(AUTH_KEY);
}
