// create login system using if else & else if else if else if
var usename = "Maria";
var password = "9090";
var code = "8080";
if (usename == "Saleem" && password == "12345") {
    console.log("kindly provide code on your mobile");
    if (code == "786") {
        console.log("logedin" + " welcome " + usename);
    }
    else {
        console.log("invalid code");
    }
}
else if (usename == "Mustafa" && password == "123") {
    console.log("kindly provide code on your mobile");
    if (code == "2233") {
        console.log("logedin" + " welcome " + usename);
    }
    else {
        console.log("invalid code");
    }
}
else if (usename == "Maria" && password == "9090") {
    console.log("kindly provide code on your mobile");
    if (code == "8080") {
        console.log("logedin" + " welcome " + usename);
    }
    else {
        console.log("invalid code");
    }
}
else {
    console.log("incorrect username or password");
}
