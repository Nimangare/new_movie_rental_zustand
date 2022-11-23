import axios from "axios";
import create from "zustand";

const useLoginStore = create((set) => ({
  token: "",
  login: async (data) => {
    const response = await axios.post("http://localhost:5000/api/logins", data);
    const token = response.data;
    sessionStorage.setItem("token", token);
    set({ token });
  },
  loadLogin: () => {
    set({ token: sessionStorage.getItem("token") });
  },
}));

export default useLoginStore;
