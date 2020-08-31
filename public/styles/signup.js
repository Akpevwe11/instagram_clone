
function checkform() {
    if (document.regform.fullname.value == '') {
        alert("Please enter your full name!");
        document.regform.fullname.focus();
        return false;
    }


    if (document.regform.username.value == '') {
        alert("Please enter your username!");
        document.regform.username.focus();
        return false;
    }
    if (!document.regform.username.value.match(/^[A-Za-z0-9_\-]+$/)) {
        alert("For username you should use English letters and digits only!");
        document.regform.username.focus();
        return false;
    }
    if (document.regform.password.value == '') {
        alert("Please enter your password!");
        document.regform.password.focus();
        return false;
    }
    if (document.regform.password.value != document.regform.password2.value) {
        alert("Please check your password!");
        document.regform.password2.focus();
        return false;
    }


    if (document.regform.email.value == '') {
        alert("Please enter your e-mail address!");
        document.regform.email.focus();
        return false;
    }
    if (document.regform.email.value != document.regform.email1.value) {
        alert("Please retupe your e-mail!");
        document.regform.email.focus();
        return false;
    }

    for (i in document.regform.elements) {
        f = document.regform.elements[i];
        if (f.name && f.name.match(/^pay_account/)) {
            if (f.value == '') continue;
            var notice = f.getAttribute('data-validate-notice');
            var invalid = 0;
            if (f.getAttribute('data-validate') == 'regexp') {
                var re = new RegExp(f.getAttribute('data-validate-regexp'));
                if (!f.value.match(re)) {
                    invalid = 1;
                }
            } else if (f.getAttribute('data-validate') == 'email') {
                var re = /^[^\@]+\@[^\@]+\.\w{2,4}$/;
                if (!f.value.match(re)) {
                    invalid = 1;
                }
            }
            if (invalid) {
                alert('Invalid account format. Expected '+notice);
                f.focus();
                return false;
            }
        }
    }

    if (document.regform.agree.checked == false) {
        alert("You have to agree with the Terms and Conditions!");
        return false;
    }

    return true;
}

function IsNumeric(sText) {
    var ValidChars = "0123456789";
    var IsNumber=true;
    var Char;
    if (sText == '') return false;
    for (i = 0; i < sText.length && IsNumber == true; i++) {
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1) {
            IsNumber = false;
        }
    }
    return IsNumber;
}
