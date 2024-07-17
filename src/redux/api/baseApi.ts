import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logoutUser, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl:
    "https://level2-batch-3-ph-university-server-starter-pack-i67n4mwzg.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    // send refresh token
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (data.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(
        setUser({
          user,
          token: data.data?.accessToken,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logoutUser());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

// const baseQueryWithRefreshToken = async (args, api, extraOptions,) => {
//     let result = await baseQuery(args, api, extraOptions);
//     if (result.error?.status === 401) {
//         const res = await fetch("/auth/refresh-token", { method: "POST", credentials: "include" });
//         const data = await res.json()
// if (data?.data?.accessToken) {
//     console.log("token", data?.data?.accessToken);
//     const user = (api.getState() as RootState).auth.user;
//     api.dispatch(
//         setUser({
//             user,
//             token: data.data.accessToken
//         })
//     )
//     result = await baseQuery(args, api, extraOptions);
//         } else {
//             console.log(" no token", data?.data?.accessToken);
//             api.dispatch(logoutUser)
//         }
//     }
//     console.log(" result ", result);
//     return result;
// }
