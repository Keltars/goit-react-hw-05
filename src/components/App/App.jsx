import { lazy, Suspense } from "react";
import { Puff } from "react-loader-spinner";
import { Route, Routes } from "react-router-dom";

// import Navigation from "../Navigation/Navigation";
// import HomePage from "../../pages/HomePage";
// import MoviesPage from "../../pages/MoviesPage";
// import MovieDetailsPage from "../../pages/MovieDetailsPage";
// import MovieReviews from "../MovieRevievs/MovieReviews";
// import MovieCast from "../MovieCast/MovieCast";
// import NotFoundPage from "../../pages/NotFoundPage";

const Navigation = lazy(() => import("../Navigation/Navigation"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const MovieReviews = lazy(() => import("../MovieRevievs/MovieReviews"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Puff />}>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/movies"} element={<MoviesPage />} />
          <Route path={"/movies/:movieId"} element={<MovieDetailsPage />}>
            <Route path={"reviews"} element={<MovieReviews />} />
            <Route path={"cast"} element={<MovieCast />} />
          </Route>
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
