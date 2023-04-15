import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        // console.log(res);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
    setLoading(false);
    console.log(loading, error);
  }, [url]);

  return { data, error, loading };
};
