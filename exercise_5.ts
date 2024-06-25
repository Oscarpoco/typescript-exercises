//OSCAR POCO

class Calculator
{
    add(a:number, b: number): number
    {
        return a + b;
    }

    minus(a:number, b: number): number
    {
        return a - b;
    }

    multiply(a:number, b: number): number
    {
        return a * b;
    }

    divide(a:number, b: number): number
    {
        if (b === 0)
        {
            throw new Error("Division by zero is not acceptable");
        }
        return a / b;
    }
}

const myCalculator = new Calculator();

//ENDS