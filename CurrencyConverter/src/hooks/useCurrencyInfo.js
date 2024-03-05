import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const API_KEY = "86964a32362176ac9444ca7b"; 
    const apiUrl = `https://open.er-api.com/v6/latest/${currency}?apikey=${API_KEY}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setData(res.conversion_rates);
        } else {
          console.error("Error fetching currency data:", res.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
