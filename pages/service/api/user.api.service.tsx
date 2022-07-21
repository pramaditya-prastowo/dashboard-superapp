import axios from "axios";
import { environment } from "../environment/environment.dev";

const API = axios.create({ baseURL: `${environment.url}` });

export const loginUser = (formData: any) => API.post("/auth/login", formData);
export const signUpUser = (formData: any) => API.post("/user", formData);
