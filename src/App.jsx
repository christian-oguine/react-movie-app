import { Icon } from '@iconify/react';
import { movies } from './data/movies';
import { useEffect } from 'react';




//const MOVIE_API_URL = "https://www.omdbapi.com/?apikey=92da9b75";
const MOVIES = movies;


function App() {

  const searchMovies = async (query) => {
  try {
    const response = await fetch(`${MOVIES}&s=${query}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="flex items-center justify-between  bg-gray-600 h-20 text-white">
      <div className='text-white font-bold'>Logo</div>
      <div className='flex space-x-4'>
        <span>Home</span>
        <span>Trending</span>
        <span>Most Popular</span>
        <span>My List</span>
      </div>
    </div>

    <div  className="flex-1 flex-row justify-between my-1 p-4 rounded-sm bg-gray-700 text-white outline-none">
      <input
        type="text"
        placeholder="Search for movies..."
        className="flex-1 bg-gray-700 text-white outline-none px-4 py-2 rounded-l-md"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700">
        <Icon icon="mdi:magnify" />
      </button>  
    </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies.map(movie => (
          <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <div className="flex items-center mt-2 text-2xl">
                <div className="flex items-center">
                  <Icon icon="mdi:star" className="text-yellow-400 mr-1" />
                <span className="text-gray-400">{movie.rating}</span>
              </div>
              <div className="flex items-center ml-auto text-2xl">
                <Icon icon="mdi:heart" className="ml-2 text-red-500 cursor-pointer" />
                <Icon icon="mdi:bookmark" className="ml-2 text-blue-500 cursor-pointer" />
                <Icon icon="mdi:share-variant" className="ml-2 text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>  
    

  </div>
  );
}

export default App;