function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

// Automatically set the cookie when the script loads
setCookie("cookie", true, 30);

// Optional: Hide the cookie banner if you still have one
document.querySelector("#cookies").style.display = "none";

console.log("Cookie set: ", document.cookie);