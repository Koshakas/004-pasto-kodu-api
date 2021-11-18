import form from "./form";

const renderForm = () => {
    let formElement = document.createElement("form");
    formElement.className = "form-inline";
    formElement.innerHTML = form();
    document.querySelector("main .card-body").appendChild(formElement);
};

export default renderForm;
