// call the getRandomAd function
let newAd = getRandomAd();

// get the adImage by id
let newImage = document.getElementById("adImage");

// set the src property to the new random ad image  
newImage.src = newAd;