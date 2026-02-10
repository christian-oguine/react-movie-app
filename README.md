# React Movie App 🎬

A small React project built with **Vite** and **Tailwind CSS** to practice core React concepts like **components**, **routing**, and **global state** (Favorites) using **Context API** with **localStorage persistence**.

This app uses a **local movies dataset** (`src/data/movies.js`) — no external movie API.

---

## Features

- Movie list (from local data)
- Movie details page (`/movie/:id`)
- Favorite / unfavorite movies (heart icon)
- Favorites saved in `localStorage` (still there after refresh)
- Responsive Tailwind grid UI

---

## Tech Stack

- React + Vite
- Tailwind CSS
- React Router DOM
- Context API (Favorites store)
- Iconify (icons)

---

## Folder Structure

```
src/
  context/
    FavoritesContext.jsx
  data/
    movies.js
  pages/
    Home.jsx
    MovieDetails.jsx
  App.jsx
  main.jsx
  index.css
```

---

## Setup & Run

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

---

## Routing

- `/` → Home (movie grid)
- `/movie/:id` → Movie Details

The details page reads the `id` from the URL using `useParams()` and finds the movie from `src/data/movies.js`.

---

## Favorites (Context API)

Favorites are handled in `FavoritesContext.jsx`:
- `favorites` holds the list
- `toggleFavorite(movie)` adds/removes
- `isFavorite(id)` checks if favorited

Favorites are saved automatically to `localStorage`.

---

## Author

Christian Oguine
