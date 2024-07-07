import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logoutUser, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `${token}`)
        }
        return headers;
    }
});

const baseQueryWithRefreshToken = async (
    args,
    api,
    extraOptions,
) => {
    const result = await baseQuery(args, api, extraOptions);
    console.log(result);
}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
});




// const baseQueryWithRefreshToken = async (args, api, extraOptions,) => {
//     let result = await baseQuery(args, api, extraOptions);
//     if (result.error?.status === 401) {
//         const res = await fetch("/auth/refresh-token", { method: "POST", credentials: "include" });
//         const data = await res.json()
//         if (data?.data?.accessToken) {
//             console.log("token", data?.data?.accessToken);
//             const user = (api.getState() as RootState).auth.user;
//             api.dispatch(
//                 setUser({
//                     user,
//                     token: data.data.accessToken
//                 })
//             )
//             result = await baseQuery(args, api, extraOptions);
//         } else {
//             console.log(" no token", data?.data?.accessToken);
//             api.dispatch(logoutUser)
//         }
//     }
//     console.log(" result ", result);
//     return result;
// }

