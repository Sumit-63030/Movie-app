# 🎬 Movie Central

A modern, responsive movie and TV show browsing app built with **React**, **TypeScript**, and the **TMDB API**. Browse trending content, discover movies and TV series by genre, and search for anything — all in a clean, mobile-friendly interface.

🔗 **Live Demo:** [movie-app-nu-eight-42.vercel.app](https://movie-app-nu-eight-42.vercel.app)

---

## ✨ Features

- 🔥 **Trending** — Browse what's trending today across movies and TV
- 🎥 **Movies** — Discover popular movies, filterable by genre
- 📺 **TV Series** — Explore TV shows, filterable by genre
- 🔍 **Search** — Search across movies and TV shows simultaneously with debounced input
- 📄 **Details Page** — View detailed info for any movie or TV show
- 📑 **Pagination** — Navigate up to 500 pages of results
- 🚫 **404 Page** — Custom error page with a redirect home
- 📱 **Responsive** — Bottom navigation bar optimised for mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| React Router DOM v7 | Client-side routing & URL-based pagination |
| Axios | TMDB API requests |
| React Icons | Icons in the footer nav (HiFire, HiFilm, HiTv, HiSearch) |
| CSS | Per-component styling |
| TMDB API | Movie & TV data source |

---

## 📁 Project Structure

```
Movie App React/
├── src/
│   ├── assets/
│   │   └── headerImg.png
│   │
│   ├── components/
│   │   ├── Genre/
│   │   │   ├── Genre.tsx
│   │   │   └── Genre.css
│   │   │
│   │   ├── Pagination/
│   │   │   ├── Pagination.tsx
│   │   │   └── Pagination.css
│   │   │
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   │
│   ├── pages/
│   │   ├── Trending.tsx
│   │   ├── Trending.css
│   │   ├── Movies.tsx
│   │   ├── Movies.css
│   │   ├── Tv.tsx
│   │   ├── Tv.css
│   │   ├── Search.tsx
│   │   ├── Search.css
│   │   ├── Details.tsx
│   │   ├── Details.css
│   │   ├── Error.tsx
│   │   └── Error.css
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Trending | Daily trending movies and TV shows |
| `/movies` | Movies | Discover movies filtered by genre |
| `/tv` | TV Series | Discover TV shows filtered by genre |
| `/search` | Search | Search movies and TV shows |
| `/:type/:id` | Details | Detail view for a movie or TV show |
| `*` | Error | 404 page not found |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sumit-63030/Movie-app.git
   cd Movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root of the project:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

This app is deployed on **Vercel**. To deploy your own:

1. Push the repo to GitHub
2. Import it at [vercel.com](https://vercel.com)
3. Add `VITE_TMDB_API_KEY` in the Vercel environment variables settings
4. Deploy!

---

## 🔌 API Reference

This project uses the [TMDB (The Movie Database) API v3](https://developer.themoviedb.org/docs).

| Endpoint | Used In |
|---|---|
| `/trending/all/day` | Trending page |
| `/discover/movie` | Movies page |
| `/discover/tv` | TV page |
| `/search/multi` | Search page |
| `/genre/movie/list` | Movie genre chips |
| `/genre/tv/list` | TV genre chips |

---

## 👤 Author

**Sumit Dharmadhikari** — [@Sumit-63030](https://github.com/Sumit-63030)
