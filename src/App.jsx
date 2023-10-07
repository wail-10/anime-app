import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Animes from './pages/Animes';
import Manga from './pages/Manga';
import Characters from './pages/Characters';
import AnimeDetails from './pages/AnimeDetails';
import MangaDetails from './pages/MangaDetails';
import CharacterDetails from './pages/CharacterDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/anime",
      element: <Animes />,
    },
    {
      path: "/manga",
      element: <Manga />,
    },
    {
      path: "/characters",
      element: <Characters />,
    },
    {
      path: "/anime/:id",
      element: <AnimeDetails />,
    },
    {
      path: "/manga/:id",
      element: <MangaDetails />,
    },
    {
      path: "/characters/:id",
      element: <CharacterDetails />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
