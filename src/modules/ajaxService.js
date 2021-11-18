const ajaxService = term => {
    const url = "https://api.postit.lt/?term=";
    const key = "TFipepcdKtqyqwrwheg6";
    return fetch(`${url}${term}&key=${key}`).then(responce => responce.json());
};

export default ajaxService;
