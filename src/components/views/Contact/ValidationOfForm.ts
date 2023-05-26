const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
function checkIfAlreadyExsist(elem: any) {
    if (elem.querySelector("p")) {
        return true;
    } else {
        return false;
    }
}
function throwError(elem: any, message: string) {
    if (checkIfAlreadyExsist(elem.parentElement)) {
        console.log("Already Exsist");
    } else {
        const para = document.createElement("p");
        const node = document.createTextNode(message);
        para.appendChild(node);
        elem?.parentElement?.appendChild(para);
    }
};
function removeError(elem: any) {
    const pTag = elem?.parentElement.querySelector("p");
    if (pTag) {
        elem?.parentElement?.removeChild(pTag);
    }
};
export default function checkValidation(firstChildValue: any, secondChildValue: any, emailChildValue: any, phoneChildValue: any) {
    if (!firstChildValue?.value) {
        throwError(firstChildValue, "! First name is required");
    } else {
        removeError(firstChildValue);
    }
    if (!secondChildValue?.value) {
        throwError(secondChildValue, "! Second name is required");
    } else {
        removeError(secondChildValue);
    };
    if (!emailChildValue?.value) {
        throwError(emailChildValue, "! Email name is required");
    } else {
        removeError(emailChildValue);
        if (validateEmail(emailChildValue?.value)) {
            removeError(emailChildValue);
        }else{
        throwError(emailChildValue, "Invalid Email Address");
        }
    }
    if (!phoneChildValue?.value) {
        throwError(phoneChildValue, "! Phone name is required");
    } else {
        removeError(phoneChildValue);
    };
    if (firstChildValue?.value && secondChildValue?.value && validateEmail(emailChildValue?.value) && phoneChildValue?.value) {
        return true;
    } else {
        return false;
    };
};