import { TStudent } from "../../../../types";
import { TResponseRedux } from "../../../../types/global";
import { baseApi } from "../../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: { name: string; value: string }) =>
            params.append(item.name, item.value)
          );
        }
        return {
          url: "/students",
          method: "GET",
          params,
        };
      },
      transformErrorResponse: (response: TResponseRedux<TStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAllAdmins: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: { name: string; value: string }) =>
            params.append(item.name, item.value)
          );
        }
        return {
          url: "/admins",
          method: "GET",
          params,
        };
      },
      transformErrorResponse: (response: TResponseRedux<TStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAllFaculties: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: { name: string; value: string }) =>
            params.append(item.name, item.value)
          );
        }
        return {
          url: "/faculties",
          method: "GET",
          params,
        };
      },
      transformErrorResponse: (response: TResponseRedux<TStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleStudent: builder.query({
      query: (data) => {
        console.log(data);
        return {
          url: `/students/${data}`,
          method: "GET",
        };
      },
    }),
    getSingleAdmin: builder.query({
      query: (data) => {
        console.log(data);
        return {
          url: `/admins/${data}`,
          method: "GET",
        };
      },
    }),
    getSingleFaculty: builder.query({
      query: (data) => {
        console.log(data);
        return {
          url: `/faculties/${data}`,
          method: "GET",
        };
      },
    }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    addAdmin: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
    }),
    addFaculty: builder.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddStudentMutation,
  useAddAdminMutation,
  useAddFacultyMutation,
  useGetAllStudentsQuery,
  useGetAllAdminsQuery,
  useGetAllFacultiesQuery,
  useGetSingleStudentQuery,
  useGetSingleAdminQuery,
  useGetSingleFacultyQuery,
} = userManagementApi;
