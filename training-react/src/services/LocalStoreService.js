export default {
  saveItem: (type, item) => {
    localStorage.setItem(type, item);
  },
  getItem: type => localStorage.getItem(type)
};
