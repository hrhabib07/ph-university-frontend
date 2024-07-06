import { jwtDecode } from "jwt-decode";

export const verifyJwtToken = (token: string) => (jwtDecode(token));