function isStrongPassword(password){
    number = false;
    invalid = false;

    // Length Check
    if (password.length < 8){
        console.log("No Good. Password must be at least 8 characters long.");
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
        console.log("No Good. Password must contain at least one number.");
        return false;
    } else if (invalid == true){
        console.log("No Good. Password cannot contain the word 'password'.");
        return false;
    } else {
        console.log("Good password!");
        return true;
    }

    
}

isStrongPassword("qwerty1"); // false - Too short
isStrongPassword("qwertypassword1") // false - Contains "password"
isStrongPassword("qwertyABC") // false - No numbers
isStrongPassword("qwerty123") // true