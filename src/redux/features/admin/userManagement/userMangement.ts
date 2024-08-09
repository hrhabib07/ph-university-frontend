import { baseApi } from "../../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllAcademicSemester: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     console.log(args);
    //     if (args) {
    //       args.forEach((item) => params.append(item.name, item.value));
    //     }
    //     return {
    //       url: "/academic-semesters",
    //       method: "GET",
    //       params,
    //     };
    //   },
    // }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddStudentMutation } = userManagementApi;
