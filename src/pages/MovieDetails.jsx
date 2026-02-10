import { Icon } from "@iconify/react";
import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";
import { useFavorites } from "../context/FavoritesContext";

export default function MovieDetails() {
  const { id } = useParams(); 
  const { toggleFavorite, isFavorite } = useFavorites();


  const movieId = Number(id);

  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <Link to="/" className="text-blue-400"><Icon icon="mdi:arrow-left" /> Back</Link>
        <p className="mt-4 text-red-400">Movie not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <Link to="/" className="text-blue-400"><Icon icon="mdi:arrow-left" /> Back</Link>

      <div className="mt-4 flex gap-4 items-start">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-44 rounded-lg"
        />

        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-2xl font-bold">{movie.title}</h1>

            <button
              onClick={() => toggleFavorite(movie)}
              className="text-2xl"
              title="Toggle favorite"
            >
              <Icon
                icon={isFavorite(movie.id) ? "mdi:heart" : "mdi:heart-outline"}
                className={isFavorite(movie.id) ? "text-red-500" : "text-gray-300"}
              />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-2 text-gray-300">
            <Icon icon="mdi:star" className="text-yellow-400" />
            <span>{movie.rating}</span>
          </div>

          <p className="mt-4 text-gray-300">
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
}
