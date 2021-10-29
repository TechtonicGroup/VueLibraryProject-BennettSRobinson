import axios from "axios";
const libraryUrl = "http://localhost:8080/api/books/";

export const state = () => ({
  books: [],
  book: {},
  Author: { firstName: "", lastName: "" },
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
    state.file = data;
  },
};
export const actions = {
  async getBooks({ state, commit }, search) {
    try {
      const searchURL = `/search/?query=${search}`;
      const data = await axios.get(libraryUrl + (search ? searchURL : ""));
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

  updateBook(state, { id, data }) {
    console.log(id);
    console.log(data);
    axios
      .put(libraryUrl + id, data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
};
