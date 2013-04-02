## Test2

*What does the following console application output?*

```C#
using System;

class Program
{
    static void Main(string[] args)
    {
        Animal a = new Cat();
        var b = a;
        a = new Dog();

        Console.Out.WriteLine(b.ToString());
        Console.ReadLine();
    }
}

public abstract class Animal
{
    public override string ToString()
    {
        return "I am an animal";
    }
}

public class Cat : Animal
{
    public override string ToString()
    {
        return "Meow";
    }
}

public class Dog : Animal
{
    public override string ToString()
    {
        return "Woof";
    }
}
```
