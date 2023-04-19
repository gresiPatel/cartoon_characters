import {useState, useEffect} from 'react';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

//set baseURL for rickandmortyapi calls (generally this url should be retrived from the constants)
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';
axios.defaults.method = 'get';
axios.defaults.validateStatus = status => status === 200;

export const useAxios = (axiosUrl: string) => {
  const [apiResponse, setResponse] = useState<AxiosResponse>();
  const [apiError, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      const result = await axios.request({url: url});
      setResponse(result);
    } catch (err: AxiosError | any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosUrl);
  }, []);

  const callNextPage = (nextPageUrl: string) => {
    fetchData(nextPageUrl);
  };

  return {apiResponse, apiError, loading, callNextPage};
};
