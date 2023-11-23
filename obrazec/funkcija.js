function validateForm() {
    var formElements = document.getElementById('myForm').elements;
    var isValid = true;

    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].hasAttribute('required') && formElements[i].value.trim() === '') {
            isValid = false;
            break;
        }
    }

    if (isValid) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear() - 18;

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }

        today = yyyy + '-' + mm + '-' + dd;
        document.getElementById("birthday").setAttribute("max", today);
    }
}