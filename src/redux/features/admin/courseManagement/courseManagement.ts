import { baseApi } from "../../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
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
    addRegisteredSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddRegisteredSemesterMutation } = courseManagementApi;
