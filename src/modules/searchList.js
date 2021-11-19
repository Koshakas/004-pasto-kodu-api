const searchList = () => {
    const ul = document.querySelector("ul");
    const deleteBtn = document.querySelector("button.hidden");
    document.querySelector(".history").addEventListener("click", () => {
        ul.innerHTML = "";
        for (let key in localStorage) {
            if (localStorage.getItem(key) !== null) {
                let result = JSON.parse(localStorage.getItem(key));
                console.log(result);
                const li = document.createElement("li");
                li.className = "list-group-item";
                li.textContent = `Adresas: ${result.address}. Pašto kodas: ${result.post_code}`;
                ul.appendChild(li);
            }
        }
        if (ul.innerHTML) {
            deleteBtn.classList.remove("hidden");
        }
    });
};

export default searchList;
