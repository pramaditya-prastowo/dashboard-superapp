import axios from "axios";
import { environment } from "../environment/environment.dev";

const API = axios.create({ baseURL: `${environment.url}` });

export const getAll = () => API.get("/provinsi");
export const getById = (id: number) => API.get(`provinsi/${id}`);
export const search = (query: string) => API.get(`provinsi?${query}`);
