//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => 
{
    let counter = 0; 

    if (number <= 0) // if number equals 0 or negative
    {
        throw new Error('Only positive numbers are allowed');
    };
    while (number > 1) {
        if (number % 2 === 0) 
        {
            number = number / 2;
        } else 
        {
            number = number * 3 + 1;
        }
        counter++;
    };
    return counter;
};