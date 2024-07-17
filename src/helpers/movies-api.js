import axios from "axios";

export const getTrendingMovies = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=ISO-639-1'",
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmI4NWNjMWVhZGRmOTQ3Y2IyOTFkZDg2ZTdhNDI0MyIsIm5iZiI6MTcyMTEyNzA5MC4zMjM5MzQsInN1YiI6IjY2OGUzODljZDZhN2VmZmY2MzVmNTZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D1Y0PEFUb9lQcmSeR_nDhmRHp5LiPdmTnlbcONLiJEs",
      },
    }
  );
  return res.data;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en`,
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmI4NWNjMWVhZGRmOTQ3Y2IyOTFkZDg2ZTdhNDI0MyIsIm5iZiI6MTcyMTEyNzA5MC4zMjM5MzQsInN1YiI6IjY2OGUzODljZDZhN2VmZmY2MzVmNTZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D1Y0PEFUb9lQcmSeR_nDhmRHp5LiPdmTnlbcONLiJEs",
      },
    }
  );
  return data;
};

export const getReviewsById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmI4NWNjMWVhZGRmOTQ3Y2IyOTFkZDg2ZTdhNDI0MyIsIm5iZiI6MTcyMTEyNzA5MC4zMjM5MzQsInN1YiI6IjY2OGUzODljZDZhN2VmZmY2MzVmNTZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D1Y0PEFUb9lQcmSeR_nDhmRHp5LiPdmTnlbcONLiJEs",
      },
    }
  );
  return data;
};

export const getCastById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmI4NWNjMWVhZGRmOTQ3Y2IyOTFkZDg2ZTdhNDI0MyIsIm5iZiI6MTcyMTEyNzA5MC4zMjM5MzQsInN1YiI6IjY2OGUzODljZDZhN2VmZmY2MzVmNTZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D1Y0PEFUb9lQcmSeR_nDhmRHp5LiPdmTnlbcONLiJEs",
      },
    }
  );
  return data;
};

export const getMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmI4NWNjMWVhZGRmOTQ3Y2IyOTFkZDg2ZTdhNDI0MyIsIm5iZiI6MTcyMTEyNzA5MC4zMjM5MzQsInN1YiI6IjY2OGUzODljZDZhN2VmZmY2MzVmNTZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D1Y0PEFUb9lQcmSeR_nDhmRHp5LiPdmTnlbcONLiJEs",
      },
    }
  );
  return data;
};
