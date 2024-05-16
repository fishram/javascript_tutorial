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