import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { movies } from "../data/movies";
import { useFavorites } from "../context/FavoritesContext";

export default function Home() {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      
      <div className="flex items-center justify-between bg-gray-600 h-20 px-4">
        <div className="font-bold">Logo</div>
        <div className="hidden sm:flex space-x-4">
          <span>Home</span>
          <span>Trending</span>
          <span>Most Popular</span>
          <span>My List</span>
        </div>
      </div>

      
      <div className="flex items-center gap-2 p-4">
        <input
          type="text"
          placeholder="Search for movies..."
          className="flex-1 bg-gray-700 text-white outline-none px-4 py-2 rounded-md"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          <Icon icon="mdi:magnify" />
        </button>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="bg-gray-800 rounded-lg overflow-hidden  shadow-md cursor-pointer hover:bg-gray-700  transition-transform duration-300"
          >
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />

            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{movie.title}</h2>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon icon="mdi:star" className="text-yellow-400 mr-1" />
                  <span className="text-gray-300">{movie.rating}</span>
                </div>

                <Icon
                  icon={isFavorite(movie.id) ? "mdi:heart" : "mdi:heart-outline"}
                  className={isFavorite(movie.id) ? "text-red-500" : "text-gray-300"}
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleFavorite(movie);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
