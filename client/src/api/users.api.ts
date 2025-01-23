import { User } from "../types/user.types";
import { apiUrl } from "../appConfig";
import axios from "axios";

export const getUsers = async (searchQuery: string): Promise<User[]> => {
  let response;
  if (searchQuery.length >= 3) {
    const encodedQuery = encodeURIComponent(searchQuery);
    response = await axios.get<User[]>(`${apiUrl}/users`, {
      params: { query: encodedQuery },
    });
  } else {
    response = await axios.get<User[]>(`${apiUrl}/users`);
  }
  return response.data;
};

export const getUser = async (id: string): Promise<User> => {
  const response = await axios.get<User>(`${apiUrl}/user/${id}`);
  return response.data;
};

export const createUser = async (userData: User): Promise<User> => {
  const response = await axios.post<User>(`${apiUrl}/user`, userData);
  return response.data;
};

export const updateUser = async (id: string, userData: User): Promise<User> => {
  const response = await axios.put<User>(`${apiUrl}/user/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${apiUrl}/user/${id}`);
};
