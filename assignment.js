// https://github.com/asifurrahman01714/ph-third-assignment

// 1.convert Kilometer to meter

function kilometerToMeter(kilometer){
    var meter = kilometer* 1000;
    return  Math.abs(meter);//Math.abs() function will work for converting negative number to positive number.
}
var result = kilometerToMeter(-12);
console.log(result, 'meter');


//2.Calculate Budget to buy watch,phone & laptop.
function budgetCalculator(watch, phone, laptop){
    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    var sum = watch + phone + laptop;
    return  sum;
}
var result = budgetCalculator(0, 2, 3);
console.log('you need ', result, 'dollar to buy these item');



//3.Calculate Hotel cost.

function hotelCost(day) {
    if (day<=10) {
        var totalCost = day *100;
    } else if(day<=20) {
        var firstPart = 10*100;
        var remainingPart = day -10;
        var secondPart= remainingPart *80;
        totalCost = firstPart + secondPart;
    }
    else{
        var firstPart = 10*100;
        var secondPart = 10*80;
        var remainingPart = day - 20;
        var thirdPart = remainingPart * 50;
        totalCost= firstPart+ secondPart+ thirdPart;
    }
    return totalCost;
}
var result = hotelCost(21);
console.log("Your total hotel cost is",result,"taka");



//4.Find the biggest friend Name.

function megaFriend(name) {
    var megaName = name[0];
    for (var i = 0; i < name.length; i++) {
        var currentName = name[i];
        if (currentName.length > megaName.length) {
            megaName = currentName;
        }
    }
    return megaName;
}
var result = megaFriend(['asif', 'sabbir ahmed', 'sakibal hasan', 'mashrafi', 'abid']);
console.log('The mega name is: ', result);