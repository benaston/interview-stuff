Test1

What does the following console application output?
 
`C#
using System;

class Program
{
    static void Main(string[] args)
    {
        var owner = new PetOwner("Alice");
            
        var a = new Cat();
        a.Owner = owner;
            
        owner.Name = "Bob";

        Console.Out.WriteLine(a.Owner.Name);
        Console.ReadLine();
    }
}

public class PetOwner
{
    public PetOwner(string name)
    {
        Name = name;
    }

    public string Name { get; set; }
}

public class Cat
{
    public PetOwner Owner { get; set; }
}`
