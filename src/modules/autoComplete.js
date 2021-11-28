import ajaxService from "./ajaxService";
import storeSearch from "./storeSearch";
import renderHistory from "./renderHistory";

const autoComplete = () => {
    const div = document.querySelector(".autocomplete");
    const ulAutoComplete = div.querySelector("ul");

    document.querySelector("#address").addEventListener("keypress", event => {
        const searchTerm = event.target.value;
        div.style.display = "none";

        if (searchTerm.length > 2) {
            let searchResponce;

            ajaxService(searchTerm)
                .then(result => {
                    searchResponce = result;
                })
                .then(() => {
                    let l;
                    if (searchResponce.total > 0) {
                        div.style.display = "block";
                        searchResponce.total > 10 ? (l = 10) : (l = searchResponce.total);
                        ulAutoComplete.innerHTML = "";

                        for (let i = 0; i < l; i++) {
                            const li = document.createElement("li");
                            li.innerText = searchResponce.data[i].address + ", " + searchResponce.data[i].city;
                            ulAutoComplete.appendChild(li);
                            li.addEventListener("click", () => {
                                storeSearch(searchResponce.data[i].post_code, searchResponce.data[i]);
                                ulAutoComplete.innerHTML = "";
                                div.style.display = "none";
                                document.querySelector(".term").value = searchResponce.data[i].address;
                            });
                        }
                    }
                });
        }
    });
};

export default autoComplete;
