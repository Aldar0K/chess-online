import { instance } from "shared/api";
import { Viewer } from "../model/types";

export const login = async (email: string, password: string) => {
  const response = await instance.post<Viewer>("/users/login", {
    email,
    password,
  });
  return response.data;
};

export const register = async (
  name: string,
  email: string,
  password: string,
  imageUrl: string
) => {
  const response = await instance.post<Viewer>("/users", {
    name,
    email,
    password,
    imageUrl,
  });
  return response.data;
};
