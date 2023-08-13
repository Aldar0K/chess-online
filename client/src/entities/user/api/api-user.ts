import { instance } from "shared/api";
import { User } from "../model/types";

export const searchUser = async (searchValue?: string): Promise<User[]> => {
  const response = await instance.get<User[]>(`/users?search=${searchValue}`);
  return response.data;
};
