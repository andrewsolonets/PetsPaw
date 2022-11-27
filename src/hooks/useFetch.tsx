import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { useState } from "react";

const petspaw = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: { "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8" },
});

interface fetchReturn {
  apiData: [{ url: string; id: Number }];
  isLoading: boolean;
  error: any;
  additional: string;
  postAction: Function;
  fetchData: Function;
  setAdditional: any;
  logAction: Function;
}

export const useFetch = (
  url: string,
  params: AxiosRequestConfig | null = null,
  payload = null,
  method = "get",
  special = null,
  type: null | string | any = null
): fetchReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState<any>([]);
  const [additional, setAdditional] = useState<any>();
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setApiData([]);
    setIsLoading(true);
    if (special === "breeds") {
      if (type?.value && type?.value !== "all-breeds") {
        console.log("ONE BREED FETCH");
        setAdditional((prevState: any) => {
          return { ...prevState, breed: true };
        });
        try {
          const response: AxiosResponse = await petspaw({
            method: method,
            params: params,
            url: url,
          });
          const data = await response.data;
          setApiData(data);
          setIsLoading(false);
        } catch (err: any) {
          console.log(err);
          setError(err);
          setIsLoading(false);
        }
      }
      if (
        (type?.value && type?.value === "all-breeds") ||
        type === "all-breeds"
      ) {
        setAdditional({ breed: false });
        console.log("All-breeds FETCH");
        try {
          const response = await petspaw({
            method: method,
            params: params,
            url: "breeds/?",
          });
          const data = await response.data;
          setApiData(data);
        } catch (err) {
          console.log(err);
          setError(err);
          setIsLoading(false);
        }
        try {
          const response2 = await petspaw({
            method: method,
            params: {},
            url: "breeds/?",
          });
          const data2 = await response2?.data;
          const breeds = data2.map((el) => {
            return { value: el.id, label: el.name };
          });
          setAdditional({ breed: false, breeds });
          setIsLoading(false);
        } catch (err) {
          console.log(err);
          setError(err);
          setIsLoading(false);
        }
      }
    } else if (special === "gallery") {
      try {
        const response: AxiosResponse = await petspaw({
          method: method,
          params: params,
          url: url,
        });
        const data = await response?.data;
        setApiData(data);
        setIsLoading(false);
      } catch (err: any) {
        console.log(err);
        setError(err);
        setIsLoading(false);
      }
      try {
        const response2 = await petspaw({
          method: method,
          params: {},
          url: "breeds/?",
        });
        const data2 = await response2?.data;
        const breeds = data2.map((el: any) => {
          return { value: el.id, label: el.name };
        });
        setAdditional(breeds);
      } catch (err: any) {
        console.log(err);
        setError(err);
        setIsLoading(false);
      }
    } else if (special === "upload") {
      setAdditional("loading");
      console.log(payload);
      try {
        const res1: AxiosResponse = await petspaw({
          method: method,
          params: params,
          url: url,
          headers: { "Content-Type": "multipart/form-data" },
          data: payload,
        });
        // console.log(res1.statusText);
        if (res1.status !== 201) {
          setAdditional("failure");
          throw new Error("Failed");
        }
        const data = await res1?.data;
        loadImageAnalysis(data.id);
        setAdditional("success");
      } catch (err: any) {
        setAdditional("failure");
        console.log(err);
        setError(err);
        setIsLoading(false);
      }
    } else if (special === "search") {
      try {
        const response: AxiosResponse = await petspaw({
          method: method,
          params: params,
          url: url,
        });
        const data = await response?.data;
        if (!data[0]) {
          setApiData([]);
          setIsLoading(false);
        }
        const res2 = await petspaw({
          method: method,
          params: params,
          url: `images/${data[0].reference_image_id}`,
        });
        /// res not 201??
        const data2 = await res2?.data;
        setApiData(data2);
        setIsLoading(false);
      } catch (err: any) {
        console.log(err);
        setError(err);
        setIsLoading(false);
      }
    } else {
      try {
        const response: AxiosResponse = await petspaw({
          method: method,
          params: params,
          url: url,
        });
        const data = await response?.data;
        if (special === "likedFilter") {
          const boolArray = data.map((el: any) => el.value === type);

          const final = data.filter((i: any) => boolArray[i]);
          final.forEach(async (el: any) => {
            const response2 = await petspaw({
              url: `images/${el.image_id}`,
            });

            const data2 = response2?.data;

            setApiData((prev: any) => [...prev, data2]);
          });
        } else {
          setApiData(data);
        }
        setIsLoading(false);
      } catch (err: any) {
        console.log(err);
        setError(err);
        setIsLoading(false);
      }
    }
  };

  const loadImageAnalysis = async (id: Number) => {
    const res: AxiosResponse = await petspaw({
      method: "get",
      url: `images/${id}/analysis`,
    });
    const data = await res?.data;
    console.log(data[0].labels);
  };

  const logAction = async () => {
    try {
      const [res2, res3] = await Promise.all([
        await petspaw({
          url: "votes/?",
          params: { order: "DESC", limit: 10 },
        }),
        await petspaw({
          url: "favourites/?",
          params: { order: "DESC", limit: 3 },
        }),
      ]);
      const data2 = await res2?.data;
      const data3 = await res3?.data;
      let finalArr = [...data2, ...data3].sort(
        (el1: { created_at: number }, el2: { created_at: number }) => {
          return (
            new Date(el2.created_at).getTime() -
            new Date(el1.created_at).getTime()
          );
        }
      );
      setAdditional(finalArr);
    } catch (err: any) {
      console.log(err);
      setError(err);
      setIsLoading(false);
    }
  };

  const postAction = async (
    url: string,
    params: AxiosRequestConfig | null,
    payload = null,
    method = "post"
  ) => {
    console.log("ACTION");
    try {
      await petspaw({
        method: method,
        params: params,
        url: url,
        data: payload,
      });

      if (url !== "favourites") fetchData();
    } catch (err: any) {
      setError(err);
    }
  };

  return {
    apiData,
    isLoading,
    error,
    additional,
    postAction,
    fetchData,
    setAdditional,
    logAction,
  };
};
