function setTestCookie() {
    let date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000)); // Cookie expires in 30 days
    const expires = "expires=" + date.toUTCString();

    document.cookie = "testCookie=TestValue; " + expires + "; path=/";
    console.log("Test cookie set: ", document.cookie);
}

// Automatically set the test cookie when the script loads
//setTestCookie();
