import { Box, LinearProgress, Stack } from "@mui/material";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import Product from "../types/Product";

const withLoading = (ChildComponent: (data:any) => JSX.Element,url: string) => {
  return () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = axios.get(url).then((result) => {
        setData(result.data);
        setLoading(false)
      }).catch((e)=>{
        const error = e as AxiosError
        setError(error.message)
        setLoading(false)
      })
    },[]);
    if(loading){
        return <LinearProgress/>
    }if(error){
        return <Box>{error}</Box>
    }
    return <ChildComponent data={data} />;
  };
};

export default withLoading;
