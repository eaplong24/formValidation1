let form = document.querySelector("form");

let userDatas = [];

form.addEventListener("submit", (e) => { 
    e.preventDefault();

    validateInputs()
});

let isValidEmail = email => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateContactNum(contactNum) {
    var numericRegex = /^[0-9]+$/;
    return numericRegex.test(contactNum);
}

function validateZipCode(zipCode) {
    var numericRegex = /^[0-9]+$/;
    return numericRegex.test(zipCode);
}

let setError = (element, message) => {
    let formControl = element.parentElement;
    let errorDisplay = formControl.querySelector(".error");

    errorDisplay.innerText = message;
    formControl.classList.add("error");
    formControl.classList.remove("success");
}

let setSuccess = element => {
    let formControl = element.parentElement;
    let errorDisplay = formControl.querySelector(".error")

    errorDisplay.innerText = ``;
    formControl.classList.add("success");
    formControl.classList.remove("error")
}

let validateInputs = () => {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let contactNum = document.getElementById("contactNum");
    let password = document.getElementById("password");
    let confirmPass = document.getElementById("confirmPass");
    let streetAdd =  document.getElementById("streetAdd");
    let brgyAdd = document.getElementById("brgyAdd");
    let cityAdd = document.getElementById("cityAdd");
    let provinceAdd = document.getElementById("provinceAdd");
    let zipCode = document.getElementById("zipCode");

    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let contactNumValue = contactNum.value.trim();
    let passwordValue = password.value.trim();
    let confirmPassValue = confirmPass.value.trim();
    let streetAddValue = streetAdd.value.trim();
    let brgyAddValue = brgyAdd.value.trim();
    let cityAddValue = cityAdd.value.trim();
    let provinceAddValue = provinceAdd.value.trim();
    let zipCodeValue = zipCode.value.trim();

    let firstNameChecker = false;
    let lastNameChecker = false;
    let emailChecker = false;
    let contactNumChecker = false;
    let passwordChecker = false;
    let confirmPassChecker = false;
    let streetAddChecker = false;
    let brgyAddChecker = false;
    let cityAddChecker = false;
    let provinceAddChecker = false;
    let zipCodeChecker = false;

    if(firstNameValue === '') {
        setError(firstName, "Firstname is required");
        firstNameChecker = false;
    } else if (firstNameValue.length < 6) {
        setError(firstName, "Firstname must have at lasst 6 character.");
        firstNameChecker = false;
    } else {
        setSuccess(firstName);
        firstNameChecker = true;
    }

    if(lastNameValue  === '') {
        setError(lastName, "Lastname is required");
        lastNameChecker = false;
    } else {
        setSuccess(lastName);  
        lastNameChecker = true;
    }

    if(emailValue === '') {
        setError(email, "Email is required");
        emailChecker = false;
    } else  if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email");
        emailChecker = false;
    } else {
        setSuccess(email);
        emailChecker = true;
    }

    if(contactNumValue === '') {
        setError(contactNum, "Contact number in required");
        contactNumChecker = false;
    } else if (!validateContactNum(contactNumValue)) {
        setError(contactNum, "Contact number must be numeric");
        contactNumChecker = false;
    } else if (contactNumValue.length < 10) {
        setError(contactNum, "Paswword should have at least 10 characters");
        contactNumChecker = false;
    } else {
        setSuccess(contactNum);
        contactNumChecker = true;
    }

    if(passwordValue === '') {
        setError(password, "Password is required");
        passwordChecker = false;
    } else if (passwordValue.length < 6) {
        setError(password, "Password should have atleast 6 characters");
        passwordChecker = false;
    } else {
        setSuccess(password);
        passwordChecker = true;
    }

    if(confirmPassValue === '' ) {
        setError(confirmPass, "Please confirm your password");
        confirmPassChecker = false;
    } else if (confirmPassValue !== passwordValue) {
        setError(confirmPass, "Password doesn't match");
        confirmPassChecker = false;
    } else {
        setSuccess(confirmPass);
        confirmPassChecker = true;
    }

    if (streetAddValue === '') {
        setError(streetAdd, "Street Address is required");
        streetAddChecker = false;
    } else {
        setSuccess(streetAdd);
        streetAddChecker = true;
    }

    if (brgyAddValue === '') {
        setError(brgyAdd, "Barangay Address is required");
        brgyAddChecker = false;
    } else {
        setSuccess(brgyAdd);
        brgyAddChecker = true;
    }

    if (cityAddValue === '') {
        setError(cityAdd, "City Address is required");
        cityAddChecker = false;
    } else {
        setSuccess(cityAdd);
        cityAddChecker = true;
    }

    if (provinceAddValue === '') {
        setError(provinceAdd, "Province Address is required");
        provinceAddChecker = false;
    } else {
        setSuccess(provinceAdd);
        provinceAddChecker = true;
    }

    if (zipCodeValue === '') {
        setError(zipCode, "Zip Code is required");
        zipCodeChecker = false;
    } else if (!validateZipCode(zipCodeValue)) {
        setError(zipCode, "Zip Code must be numeric")
        zipCodeChecker = false;
    } else {
        setSuccess(zipCode);
        zipCodeChecker = true;
    }

    if(firstNameChecker && 
        lastNameChecker &&
        emailChecker &&
        contactNumChecker &&
        passwordChecker &&
        confirmPassChecker &&
        streetAddChecker &&
        brgyAddChecker &&
        cityAddChecker &&
        provinceAddChecker &&
        zipCodeChecker
        ) {

    console.log(firstNameChecker, lastNameChecker, emailChecker, contactNumChecker, passwordChecker, confirmPassChecker, streetAddChecker, brgyAddChecker, cityAddChecker, provinceAddChecker, zipCodeChecker);

        let userData =  {
            FirstName : document.getElementById("firstName").value,
            MiddleName : document.getElementById("middleName").value,
            LastName : document.getElementById("lastName").value,
            Email : document.getElementById("email").value,
            ContactNum : document.getElementById("contactNum").value,
            Password : document.getElementById("password").value,
            ConfirmPass : document.getElementById("confirmPass").value,
            StreetAdd :  document.getElementById("streetAdd").value,
            BrgyAdd : document.getElementById("brgyAdd").value,
            CityAdd : document.getElementById("cityAdd").value,
            ProvinceAdd : document.getElementById("provinceAdd").value,
            ZipCode : document.getElementById("zipCode").value
        }
        userDatas.push(userData);
        document.forms[0].reset();
        console.log(userDatas);
    }
}

