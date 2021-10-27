import axios from "axios";
const libraryUrl = "http://localhost:8080/api/books/";
export const state = () => ({
  books: [],
  book: {},
  Author: { firstName: "", lastName: "" },
});

export const mutations = {
  updateBooks: (state, data) => {
    state.books = data;
  },
  updateBook: (state, data) => {
    state.book = data;
  },
  updateAuthor: (state, data) => {
    state.Author = data;
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
  async getBook({ commit }, id) {
    try {
      const data = await axios.get(libraryUrl + id);
      commit("updateBook", data.data);
      commit("updateAuthor", data.data.Author);
    } catch (err) {
      console.error(err);
    }
  },
};
