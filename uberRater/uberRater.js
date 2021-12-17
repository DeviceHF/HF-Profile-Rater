// User object that will be used to store account stats
let user = {
    posts: "",
    popularity: "",
    timeOnline: "",
    ql: ""
}

let uberMessage = document.querySelector(".uberMessage");
let button = $(".button");
button.click(function () {


    user.posts = document.querySelector("#posts").value;
    user.popularity = document.querySelector("#pop").value;
    user.timeOnline = document.querySelector("#timeOnline").value;
    user.ql = document.querySelector("#quickLove").value;

    let posts = parseInt(user.posts);
    let pop = parseInt(user.popularity);
    let ql = parseInt(user.ql);
    let timeOnline = user.timeOnline;

    let timeCondition = [" Minute", " Minutes", " Hour", " Hours", " Day", " Days", " Week", " Weeks", " Month", " Months", " Year", " Years"];

    if ((typeof posts !== "number" || typeof ql !== "number" || typeof pop !== "number") || timeOnline === "" || isNaN(posts) || isNaN(pop) || !timeCondition.some(el => timeOnline.includes(el))) {
        uberMessage.innerText = "Did you enter everything correcly?"
        userInfo = {
            posts: "",
            popularity: "",
            timeOnline: "",
            ql: ""
        }

        return;
    }

    //  Sets user post value
    if (posts === 0) {
        user.posts = 0
    } else if (posts <= 10) {
        user.posts = 1
    } else if (posts <= 100) {
        user.posts = 3
    } else if (posts <= 1000) {
        user.posts = 10
    } else if (posts >= 1001 && posts <= 1999) {
        user.posts = 15
    } else if (posts >= 2000 && posts <= 4999) {
        user.posts = 20
    } else if (posts >= 5000 && posts <= 10000) {
        user.posts = 25
    } else if (posts >= 10001 && posts <= 15000) {
        user.posts = 27
    } else if (posts >= 15001 && posts <= 24999) {
        user.posts = 29
    } else {
        user.posts = 30

    }

    // Set Popularity Value
    if (pop === 0) {
        user.popularity = 0
    } else if (pop <= 20) {
        user.popularity = 1
    } else if (pop <= 50) {
        user.popularity = 2
    } else if ((pop >= 51 && pop <= 100)) {
        user.popularity = 7
    } else if (pop >= 101 && pop <= 200) {
        user.popularity = 10
    } else if (pop >= 201 && pop <= 300) {
        user.popularity = 15
    } else if (pop >= 301 && pop <= 500) {
        user.popularity = 20
    } else if (pop >= 501 && pop <= 700) {
        user.popularity = 25
    } else if (pop >= 701 && pop <= 900) {
        user.popularity = 30
    } else if (pop >= 901 && pop <= 1000) {
        user.popularity = 32
    } else if (pop >= 1001 && pop <= 1900) {
        user.popularity = 36
    } else if (pop >= 1901 && pop <= 2200) {
        user.popularity = 38
    } else {
        user.popularity = 40
    }

    // Set user Quick Love Value
    if (ql <= 100) {
        user.ql = 1
    } else if (ql <= 200) {
        user.ql = 2
    } else if (ql <= 350) {
        user.ql = 3
    } else if (ql <= 750) {
        user.ql = 4
    } else {
        user.ql = 5
    }

    //set time online Value. Thanks Xerotic <3
    const convertTimeOnline = (str) => {
        const getMultiplier = (label) => {
            switch (label) {
                case "Year":
                case "Years":
                    return 31536000;
                case "Month":
                case "Months":
                    return 2592000;
                case "Week":
                case "Weeks":
                    return 604800;
                case "Day":
                case "Days":
                    return 86400;
                case "Hour":
                case "Hours":
                    return 3600;
                case "Minute":
                case "Minutes":
                    return 60;
                case "Second":
                case "Seconds":
                default:
                    return 1;
            }
        }

        return str.split(",").reduce((total, bit) => {
            const [num, label] = bit.trim().split(" ");
            return total + (parseInt(num, 10) * getMultiplier(label));
        }, 0);
    }

    timeConvert = convertTimeOnline(timeOnline); // output: 41731200 (seconds)
    let day = 86400,
        week = 604800,
        month = 2592000,
        year = 31536000;

    //Set Time online value
    if (timeConvert <= day) {
        user.timeOnline = 1
    } else if (timeConvert <= 5 * day) {
        user.timeOnline = 2
    } else if (timeConvert <= week) {
        user.timeOnline = 4
    } else if (timeConvert <= 2 * week) {
        user.timeOnline = 6
    } else if (timeConvert <= 3 * week) {
        user.timeOnline = 7
    } else if (timeConvert <= month) {
        user.timeOnline = 8
    } else if (timeConvert <= 2 * month) {
        user.timeOnline = 10
    } else if (timeConvert <= 3 * month) {
        user.timeOnline = 12
    } else if (timeConvert <= 4 * month) {
        user.timeOnline = 14
    } else if (timeConvert <= 5 * month) {
        user.timeOnline = 16
    } else if (timeConvert <= 6 * month) {
        user.timeOnline = 17
    } else if (timeConvert <= 7 * month) {
        user.timeOnline = 18
    } else if (timeConvert <= 8 * month) {
        user.timeOnline = 19
    } else if (timeConvert <= 9 * month) {
        user.timeOnline = 20
    } else if (timeConvert <= 10 * month) {
        user.timeOnline = 22
    } else if (timeConvert < 12 * month) {
        user.timeOnline = 24
    } else {
        user.timeOnline = 25
    }

    //  Sum of user Value
    let valueCalc = user.posts + user.popularity + user.timeOnline + user.ql;

    if (valueCalc <= 10) {
        uberMessage.innerText = "Level: Got to start somewhere";
    } else if (valueCalc <= 20) {
        uberMessage.innerText = "Level: Way to go";
    } else if (valueCalc <= 30) {
        uberMessage.innerText = "Level: New Adventurer";
    } else if (valueCalc <= 40) {
        uberMessage.innerText = "Level: Uber trainee";
    } else if (valueCalc <= 50) {
        uberMessage.innerText = "Level: Rising from the shadows";
    } else if (valueCalc <= 60) {
        uberMessage.innerText = "Level: Professional poster";
    } else if (valueCalc <= 68) {
        uberMessage.innerText = "Level: You found the Uber Sword";
    } else if (valueCalc <= 70) {
        uberMessage.innerText = "Level: Are you the chosen one?";
    } else if (valueCalc <= 75) {
        uberMessage.innerText = "Level: You know the HF success formula";
    } else if (valueCalc <= 79) {
        uberMessage.innerText = "Level: You're probably in a HF gang already";
    } else if (valueCalc <= 83) {
        uberMessage.innerText = "Level: Uber Battle Mage";
    }else if (valueCalc <= 84) {
        uberMessage.innerText = "Level: Challenger";
    } else if (valueCalc <= 85) {
        uberMessage.innerText = "Level: HF Knight of the roundtable";
    }  else if (valueCalc <= 88) {
        uberMessage.innerText = "Level: Messenger";
    }  else if (valueCalc <= 90) {
        uberMessage.innerText = "Level: Chief Ambassador";
    } else if (valueCalc <= 92) {
        uberMessage.innerText = "Level: Tha Bomb";
    } else if (valueCalc <= 95) {
        uberMessage.innerText = "Level: You probably have a row of diamonds, and many awards.";
    } else if (valueCalc < 100) {
        uberMessage.innerText = "Level: Kingpin";
    } else if (valueCalc >= 100) {
        uberMessage.innerText = "Level: Literal HF God";
    }



    // Increase width to match valueCalc
    var i = 0;
    if (i == 0) {
        i = 1;
        var load = document.querySelector(".gauge");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {

            if (width >= valueCalc || width === 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                load.style.width = width + "%";
            }
            if (valueCalc <= 99) {
                document.querySelector(".percent").innerText = "You're " + (100 - valueCalc) + "% away from the Uber throne"
            } else if (valueCalc >= 100) {
                document.querySelector(".percent").innerText = "The Uber throne is yours. We bow before you."

            }
            user = {
                posts: "",
                popularity: "",
                timeOnline: ""
            }


        }
    }

});
