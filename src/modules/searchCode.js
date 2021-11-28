import ajaxService from "./ajaxService";
import storeSearch from "./storeSearch";

const searchCode = () => {
    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        const searchTerm = document.querySelector(".term").value;

        let searchResponce;

        ajaxService(searchTerm)
            .then(result => {
                searchResponce = result;
            })
            .then(() => {
                if (searchResponce.total > 0) {
                    console.log("searchResponce", searchResponce);
                    document.querySelector(".result").value = searchResponce.data[0].post_code;
                    storeSearch(searchResponce.data[0].post_code, searchResponce.data[0]);
                } else {
                    document.querySelector("main").innerHTML += "<p>Klaida</p>";
                }
            });
    });
};

export default searchCode;
