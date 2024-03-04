import { useEffect, useState } from "react";

function useCurrrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
     .then(res => res.json())
     .then(() => setData(res[currency]) )  
    }, [currency])

    return data
}

export default useCurrrencyInfo