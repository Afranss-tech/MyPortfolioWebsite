import { useState, useEffect, useCallback } from "react";

export const useDataFetcher = (endpoint, initialData) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(false);
  }, [endpoint]);

  useEffect(() => {
    // fetchData();
  }, [fetchData]);

  return { data, loading, setData };
};
