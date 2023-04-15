import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setError(err);
      });
    setLoading(false);
  }, [url]);

  return { data, loading, error };
};
