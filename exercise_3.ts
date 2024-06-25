//OSCAR POCO

//1.
function sum(a:number, b:number): number
{
    return a + b;
}

//2.
function getFixedNumber(): number
{
    return 23; // 23 is my fixed value
}

//3.
function processString(input: string, toUpperCase?: boolean): string
{
    if (toUpperCase)
    {
        return input.toUpperCase();
    }
    else
    {
        return input.toLowerCase();
    }
}

//END