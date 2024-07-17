import { Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import MovieReviews from "../MovieRevievs/MovieReviews";
import MovieCast from "../MovieCast/MovieCast";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/movies"} element={<MoviesPage />} />
        <Route path={"/movies/:movieId"} element={<MovieDetailsPage />}>
          <Route path={"reviews"} element={<MovieReviews />} />
          <Route path={"cast"} element={<MovieCast />} />
        </Route>
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
