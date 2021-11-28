function renderHistory(ul) {
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
}

export default renderHistory;
