const clearHistory = () => {
    const button = document.querySelector(".btn-danger");
    button.addEventListener("click", e => {
        localStorage.clear();
        button.classList.add("hidden");
        document.querySelector("ul").innerHTML = "";
    });
};

export default clearHistory;
