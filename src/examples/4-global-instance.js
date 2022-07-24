import { useEffect } from 'react';
import axios from 'axios';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    const productsData = axios(productsUrl);
    const  randomUserData = axios(productsUrl);
    console.log('global axios instance', productsData);
    console.log('global axios instance', randomUserData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
