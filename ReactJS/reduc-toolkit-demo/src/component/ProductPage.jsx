import React , { useEffect, useState } from 'react'

import axios from 'axios';

const ProductPage = () => {

//useState to store the data
const [data, setData] = useState(null);
const [fetchJoke, setFetchJoke] = useState(false);


const handleChangeJoke = () => {
  setFetchJoke(!fetchJoke);
};

//useEffect to fetch the data from api

useEffect(() => {
  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
      // Update state with fetched data
      const data = response.data;
      console.log(data);

      setData(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [fetchJoke]);




  return (
    <div>
        <h1> Joke API</h1>
        {/* <h2>{data?.category}</h2> */}

      {data?.type === 'single' ? (
        <div>
          <h2>Joke:</h2>
          <p>{data?.joke}</p>
        </div>
      ) : (
        <div>
          <h2>Setup:</h2>
          <p>{data?.setup}</p>
          <h2>Delivery:</h2>
          <p>{data?.delivery}</p>
        </div>
      )}

      <button onClick={handleChangeJoke}> Change Joke</button>
    </div>
  )
}

export default ProductPage
