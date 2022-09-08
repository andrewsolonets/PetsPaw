import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const petspaw = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: { "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8" },
});

export const useFetch = (
  url,
  params = {},
  payload = null,
  method = "get",
  special = null,
  type = null
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    if (special === "voting") {
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
        const data2 = await res2.data;
        const data3 = await res3.data;
        let finalArr = [...data2, ...data3].sort((el1, el2) => {
          return new Date(el2.created_at) - new Date(el1.created_at);
        });
        setApiData(finalArr);
      } catch (err) {
        console.log(err);
        setError(err);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        const response = await petspaw({
          method: method,
          params: params,
          url: url,
        });
        const data = await response?.data;
        if (special === "likedFilter") {
          const boolArray = data.map((el) => el.value === type);

          const final = data.filter((el, i) => boolArray[i]);
          final.forEach(async (el) => {
            const response2 = await petspaw({
              url: `images/${el.image_id}`,
            });

            const data2 = response2?.data;

            setApiData((prev) => [...prev, data2]);
          });
        } else {
          setApiData(data);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setIsLoading(false);
      }
    }
  };

  const postAction = async (url, params, payload = null, method = "post") => {
    try {
      await petspaw({
        method: method,
        params: params,
        url: url,
        data: payload,
      });
      if (url !== "favourites") fetchData();
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    setApiData([]);
    fetchData();
  }, [type]);

  return [
    { apiData, isLoading, error },
    postAction,
    fetchData,
    // getUserLog,
  ];
};
