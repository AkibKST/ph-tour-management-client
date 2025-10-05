import { baseApi } from "@/redux/baseApi";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add tour type mutation
    addTourType: builder.mutation({
      query: (tourTypeName) => ({
        url: "/tour/add-tour-type",
        method: "POST",
        data: tourTypeName,
      }),
    }),
    // -------------------------------

    // get tour type query
    getTourTypes: builder.query({
      query: () => ({
        url: "/tour/tour-types",
        method: "GET",
      }),

      //useful for transforming response before using it in the component and filtering essential data which we want
      transformResponse: (response) => response.data,
    }),
    // -------------------------------

    // register mutation

    // -------------------------------

    // send OTP mutation

    // -------------------------------

    // verify OTP mutation

    // -------------------------------

    // get user info

    // -------------------------------
  }),
});

export const { useAddTourTypeMutation, useGetTourTypesQuery } = tourApi;
