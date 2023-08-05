import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'

function App() {

  const [allAnimes, setAllAnimes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual URL of your API
        const response = await axios.get('https://api.jikan.moe/v4/anime/100');
        // setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Hero />
      My anime app
    </>
  )
}

export default App
