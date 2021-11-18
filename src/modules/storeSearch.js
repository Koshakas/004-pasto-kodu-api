const storeSearch = (id, data) => {
    localStorage.setItem(id, JSON.stringify(data));
};

export default storeSearch;
