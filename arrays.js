
/* TASK1 multiply every value * 2.3 and convert it to string */

const array = [1, 100, 12, 1.23, 100]


/* TASK2 sum all even numbers. Create function that will take only even numbers and sum them */
const numbers = [1, 2, 3, 4, 5, 6];
const result = sumOfEvenNumbers(numbers);
console.log(result); // Should output 12


/*TASK3 write function which will take each car from array and create value 'engineSize'
put: 1000cm3 for Toyota, 2000cm3 for BMW, 3000cm3 for Audi.
Then create function to match customer needs with one or few cars from list and return 
result as new array named offer */

const arrayOfCars = [
    {make: 'Toyota', model: 'Yaris', segment: 'basic', status: 'Available'},
    {make: 'BMW', model: '320d', segment: 'semi-premium', status: 'Sold'},
    {make: 'Audi', model: 'A6', segment: 'semi-premium', status: 'Available'},
];

const customerNeeds = {minEngine: 2000, segment: 'semi-premium'}