const form = () => {
    return `
    <div class="form-group mb-2 input">
        <input id="address" type="text" class="form-control term" placeholder="Adresas">
        <div class="autocomplete">
            <ul>
            </ul>
        </div>
    </div>
    <div class="form-group mx-sm-3 mb-2">
        <input type="text" class="form-control result" readonly >
    </div>
    <div>
        <button type="submit" class="btn btn-primary mb-2">Ieškoti kodo</button>
        <button type="reset" class="btn btn-secondary mb-2 history">Paieškos istorija</button>
        <button type="button" class="btn btn-danger mb-2 hidden">Trinti istoriją</button>
    </div>
    `;
};

export default form;
