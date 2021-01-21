// https://github.com/asifurrahman01714/ph-third-assignment

// 1.convert Kilometer to meter

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Plese input a positive value"; //Detecting negative value of kilometer as it is invalid.
    } else {
        var meter = kilometer * 1000;
        return meter;
    }
}
var result = kilometerToMeter(12);
console.log(result, 'meter');


//2.Calculate Budget to buy watch,phone & laptop.
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Plese input positive value";//Detecting negative value of the things as it is invalid.
    } else {
        var watch = watch * 50;
        var phone = phone * 100;
        var laptop = laptop * 500;
        var sum = watch + phone + laptop;
        return sum;
    }
}
var result = budgetCalculator(-1, 2, 3);
console.log(result);



//3.Calculate Hotel cost.

function hotelCost(day) {
    if (day < 0) {
        return "Plese input positive value as day";//Detecting negative value as it is invalid.
    } else {
        if (day <= 10) {
            var totalCost = day * 100;
        } else if (day <= 20) {
            var firstPart = 10 * 100;
            var remainingPart = day - 10;
            var secondPart = remainingPart * 80;
            totalCost = firstPart + secondPart;
        } else {
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remainingPart = day - 20;
            var thirdPart = remainingPart * 50;
            totalCost = firstPart + secondPart + thirdPart;
        }
        return totalCost;
    }
}
var result = hotelCost(-21);
console.log(result);



//4.Find the biggest friend Name.

function megaFriend(name) {
    if (name.length == 0) {
        return "please input a valid array"// Detecting empty array
    } else {
        var megaName = name[0];
        for (var i = 0; i < name.length; i++) {
            var currentName = name[i];
            if (currentName.length > megaName.length) {
                megaName = currentName;
            }
        }
        return megaName;
    }
}
var result = megaFriend(["asif", "sakib", "mashrafi"]);
console.log(result);