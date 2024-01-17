import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  TMDB_BASE_URL,
  TMDB_API_KEY,
  TMDB_IMAGE_BASE_URL,
  ENDPOINTS,
  YOUTUBE_BASE_URL,
} from "../constants/Urls";
import LANGUAGES from "../constants/Languages";

interface MovieResponse {
  // Define la estructura del objeto de respuesta de la película
  // según la API de TMDB.
  // Ajusta esto según la estructura real del objeto de respuesta.
  // Por ejemplo, podrías tener interfaces adicionales para Credits, Recommendations, etc.
  title: string;
  backdrop_path: string;
  // ... otras propiedades
}

const TMDB_HTTP_REQUEST: AxiosInstance = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

const getNowPlayingMovies = (): Promise<AxiosResponse<MovieResponse>> =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);

const getUpcomingMovies = (): Promise<AxiosResponse<MovieResponse>> =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);

const getMovieById = (
  movieId: number,
  append_to_response: string = ""
): Promise<AxiosResponse<MovieResponse>> =>
  TMDB_HTTP_REQUEST.get(`${ENDPOINTS.MOVIE}/${movieId}`, {
    params: { append_to_response },
  });

const getAllGenres = (): Promise<AxiosResponse<any>> =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);

const getPoster = (path: string): string =>
  `${TMDB_IMAGE_BASE_URL}/original${path}`;

const getVideo = (key: string): string => `${YOUTUBE_BASE_URL}?v=${key}`;

const getLanguage = (language_iso: string): any =>
  LANGUAGES.find((language) => language.iso_639_1 === language_iso);

export {
  getNowPlayingMovies,
  getUpcomingMovies,
  getAllGenres,
  getMovieById,
  getPoster,
  getLanguage,
  getVideo,
};
