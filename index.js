
//get the homePts from the HTML page
let homePoints = document.getElementById("home-pts")
//convert & store the value into another variable
let currentPoints = parseInt(homePoints.innerText)

function addOneHome() {
   currentPoints += 1 // perform addition
   homePoints.innerText = currentPoints // move the value back to homePts
}

function addTwoHome() {
    currentPoints += 2
    homePoints.innerText = currentPoints
}

function addThreeHome() {
    currentPoints += 3
    homePoints.innerText = currentPoints
}
//-------------------------------------------------------------------------

// get the guestPts from HTML pg
let guestPoints = document.getElementById("guest-pts")
//convert string to in & store in another var
let currentGuestPoints = parseInt(guestPoints.innerText)

function addOneGuest() {
    currentGuestPoints += 1
    guestPoints.innerText = currentGuestPoints
}

function addTwoGuest() {
    currentGuestPoints += 2
    guestPoints.innerText = currentGuestPoints
}

function addThreeGuest() {
    currentGuestPoints += 3
    guestPoints.innerText = currentGuestPoints
}