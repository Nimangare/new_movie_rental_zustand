import create from "zustand";
import axios from "axios";
import useLoginStore from "./login";

const useGenreStore = create((set) => ({
  genres: [],

  getAll: async () => {
    const response = await axios.get("http://localhost:5000/api/genres");
    set({ genres: response.data });
  },

  addGenre: async (data) => {
    const token = useLoginStore.getState().token;
    const response = await axios.post(
      "http://localhost:5000/api/genres",
      data,
      { headers: { "x-auth-token": token } }
    );
    set((state) => ({ genres: [...state.genres, response.data] }));
  },

  deleteGenre: async (genreId) => {
    const token = useLoginStore.getState().token;
    const response = await axios.delete(
      "http://localhost:5000/api/genres/" + genreId,
      { headers: { "x-auth-token": token } }
    );
    set((state) => ({
      genres: state.genres.filter((g) => g._id !== response.data._id),
    }));
  },

  updateGenre: async (genre) => {
    console.log(genre);
    const token = useLoginStore.getState().token;
    const response = await axios.put(
      "http://localhost:5000/api/genres/" + genre._id,
      genre,
      { headers: { "x-auth-token": token } }
    );
    set((state) => ({
      genres: state.genres.map((g) =>
        g._id === response.data._id ? { ...response.data } : g
      ),
    }));
  },
  
}));

export default useGenreStore;
