// leap year
// 2020 2000 1700 2022
// leap year :
// in between century : it should be divisible by 4
// century: it should be divisible by 400

var year = 1600

//apply check list of leap year on the provided year
// decision on year  : whether it is a leap year or not.


if((year % 4 == 0 &&  year%100!=0) || year % 400 == 0){
    console.log("year is leap year")
} else {
    console.log("year is not a leap year");
}

// %4 : it will give you remainder : in between the century
// %400 : to century only
// || : or operator : T F : T
// F T : T
// F F : F
// T T : T
//AND : &&
// T T : T
// F F : F
// T F : F
// F T : F
