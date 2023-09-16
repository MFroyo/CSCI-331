function isStrongPassword(password){
    number = false;
    invalid = false;

    // Length Check
    if (password.length < 8){
        console.log("Password is too short :(");
        return false;
    }

    // Number Check
    for (let i = 0; i < password.length; i++){
        if (password.charCodeAt(i) > 48 && password.charCodeAt(i) < 57){
            number = true;
        }
    }

    // Substring Check
    lowerCase = password.toLowerCase(); //Sets to lowercase to check for password in any way, except for if there were numbers instead of letters
    if (lowerCase.indexOf("password") != -1){
        invalid = true;
    }


    //Console Log Reason
    if (number == false){
        console.log("Password Requires 1 Number");
        return false;
    } else if (invalid == true){
        console.log("'password' is not able to be in your password");
        return false;
    } else {
        console.log("Welcome, user!");
        return true;
    }

    
}

isStrongPassword("qwerty1"); // false - Too short
isStrongPassword("qwertypassword1") // false - Contains "password"
isStrongPassword("qwertyABC") // false - No numbers
isStrongPassword("qwerty123") // true