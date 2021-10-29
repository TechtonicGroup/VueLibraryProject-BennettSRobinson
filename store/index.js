import axios from "axios";
const libraryUrl = "http://localhost:8080/api/books/"; //backend url

//states
export const state = () => ({
  books: [],
  book: {},
  Author: { firstName: "", lastName: "" },
  file: null,
});

// updates the states
export const mutations = {
  updateBooks: (state, data) => {
    state.books = data;
  },
  //update book state not for updating the database
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
  //gets all the books in the database and if there is a search value
  //gets all books with that author name or title
  async getBooks({ state, commit }, search) {
    try {
      const searchURL = `/search/?query=${search}`;
      const data = await axios.get(libraryUrl + (search ? searchURL : ""));
      commit("updateBooks", data.data);
    } catch (err) {
      console.error(err);
    }
  },
  //gets book based on the id
  async getBook({ commit }, id) {
    try {
      const data = await axios.get(libraryUrl + id);
      commit("updateBook", data.data);
      commit("updateAuthor", data.data.Author);
    } catch (err) {
      console.error(err);
    }
  },
  //adds book to the database
  addBook(state, data) {
    axios
      .post(libraryUrl, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  //soft deletes book from database
  deleteBook(state, id) {
    axios.delete(libraryUrl + id);
  },

  //updates the book based on the id
  updateBook(state, { id, data }) {
    axios
      .put(libraryUrl + id, data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
};
