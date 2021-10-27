import axios from "axios";
const libraryUrl = "http://localhost:8080/api/books/";
export const state = () => ({
  books: [],
});

export const mutations = {
  updateBooks: (state, data) => {
    state.books = data;
  },
};
export const actions = {
  async getBooks({ state, commit }) {
    try {
      const data = await axios.get(libraryUrl);
      commit("updateBooks", data.data);
    } catch (err) {
      console.error(err);
    }
  },
};
