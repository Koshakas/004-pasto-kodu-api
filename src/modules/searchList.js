import renderHistory from "./renderHistory";

const searchList = () => {
    const ul = document.querySelector("ul.list-group");
    const deleteBtn = document.querySelector("button.hidden");
    document.querySelector(".history").addEventListener("click", () => {
        ul.innerHTML = "";
        renderHistory(ul);
        if (ul.innerHTML) {
            deleteBtn.classList.remove("hidden");
        }
    });
};

export default searchList;
