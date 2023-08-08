/**
 * When called, this function draws the eyes when the width is even
 * @param {string} characterUseToDraw 
 * @param {int} logoWidth 
 * @param {int} quotient
 */
function drawEyesForEvenWidth(characterUseToDraw, logoWidth, quotient) {
    let eyesStripe = "";
    // When the width is even, there is a recognizable pattern
    // There is two space between the eyes and the same number of space
    // At the beginning and the end of the strip
    for(index = 1; index <= logoWidth; index++) {
        if(index === (quotient-1) || index === ((logoWidth-quotient)+2) ) {
            eyesStripe += characterUseToDraw;
        } else {
            eyesStripe += " ";
        }
    }
    console.log(eyesStripe);
}
/**
 * When called, this function draws the eyes when the width is uneven
 * @param {string} characterUseToDraw 
 * @param {int} logoWidth 
 * @param {int} quotient
 */
function drawEyesForUnevenWidth(characterUseToDraw, logoWidth, quotient) {
     let eyesStripe = "";
     // When the width is uneven, there is always the same behaviour 
     // There is one space between the eyes and the same number of space
     // At the beginning and the end of the stripe
     for(index = 1; index <= logoWidth; index++) {
        // This condition matches the rules which is having the eyes not to touch each other 
        // and the logo must be vertically symmetrical.
        if (index === quotient || index === ((logoWidth-quotient)+1)) {
            eyesStripe += characterUseToDraw;
        } else {
            eyesStripe += " ";
        }
    }
    console.log(eyesStripe);
}
/**
 * When called, this function draws the eyes of the Abbeal logo
 * @param {string} characterUseToDraw - The character used to reprent the eyes
 * @param {int} logoWidth - The width of the stripe containing the eyes
 */
function drawEyes(characterUseToDraw, logoWidth) {
    const quotient = parseInt(logoWidth / 2);
    const remainder = parseInt(logoWidth % 2);
    if (remainder === 0) {
        drawEyesForEvenWidth(characterUseToDraw, logoWidth, quotient)
    } else {
        drawEyesForUnevenWidth(characterUseToDraw, logoWidth, quotient);
    }
}

/**
  When called, this function draws a stripe composed of characterUseToDraw of logoWidth length 
  @param {string} characterUseToDraw - The character used to draw the stripe
  @param {int} logoWidth - The length of the stripe
 */
function drawStripe(characterUseToDraw, logoWidth) {
    console.log(characterUseToDraw.repeat(logoWidth));
}

/** 
  When called, this function draws the 3 stripes of the Abbeal logo 
  @param {string} characterUseToDraw - The character used to draw the stripes
  @param {int} logoWidth - The length of each stripe
*/
function drawStripes(characterUseToDraw, logoWidth) {
    for (stripeIndex = 0; stripeIndex < 3; stripeIndex++) {
        drawStripe(characterUseToDraw, logoWidth);
    }
}

/**
  When called, this function draws the Abbeal Logo with the given character and width
  @param {string} characterUseToDraw - The character used to draw the logo
  @param {int} logoWidth - The width of the logo 
 */
function drawAbbealLogoInASCIIArt(characterUseToDraw, logoWidth) {
    if (logoWidth < 5) {
        console.log("The width should at least be 5");
        return;
    }
    drawEyes(characterUseToDraw, logoWidth);
    drawStripes(characterUseToDraw, logoWidth);
}

// Main 
drawAbbealLogoInASCIIArt("x", 12);