import React, {useState, useEffect} from 'react'
import Container from './container';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer: "
  }
};

const MovieDetails = () => {
  const [jsonData, setJsonData] = useState(null)

  useEffect(() =>{
    const fetchData = async () => {
      try{
        const response = await fetch('https://api.themoviedb.org/3/movie/2?language=en-US')
        const result = await response.json()
        setJsonData(result)
      } catch(error) {
        console.error("Error data: ", error)
      }
    }
    fetchData()
  },[])

  return(
    <Container jsonData/>
  )
}


export default MovieDetails