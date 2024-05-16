let car = {
    brand: 'Toyota',
    miles: 225000
};
console.log(car.brand);

function add1kMiles() {
    car.miles += 1000;
}
add1kMiles();
console.log(car.miles);

switch(car.miles){
    case 226000:
        console.log("Your Toyota has 226000 miles")
        break;
    default:
        console.log("Defaul miles on your Toyota")
}