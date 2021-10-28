import axios from "axios";
const libraryUrl = "http://localhost:8080/api/books/";
import Empty from "@/assets/empty.jpeg";
export const state = () => ({
  books: [],
  book: {},
  Author: { firstName: "", lastName: "" },
  image: Empty,
  file: null,
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
  updateImage: (state, data) => {
    state.image = URL.createObjectURL(data);
    state.file = data;
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
  addBook(state, data) {
    axios
      .post(libraryUrl, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  deleteBook(state, id) {
    axios.delete(libraryUrl + id);
  },
};
