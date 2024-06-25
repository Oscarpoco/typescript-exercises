//OSCAR POCO

class Person
{
    private socialSecurityNumber: string;
    constructor(private name: string, private age:number) // I am constructing name and age
    {
        this.socialSecurityNumber = "667-777"; // I wrote any number as a SSN
    }

    GetName(): string
    {
        return this.name;
    }

    getAge(): number
    {
        return this.age;
    }
}

//END