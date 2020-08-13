// D for dicount, L for list price and S for selling price

// D = (L-S)/L * 100 

// a + b * c / d * e 

var sellingPrice = 199;
var listingPrice = 799;

var discountedPercent = ((listingPrice-sellingPrice)/listingPrice) * 100;

console.log("Discount percentage is :",discountedPercent);

displayDiscountPercentage = Math.round(discountedPercent);

console.log(displayDiscountPercentage + "% off")