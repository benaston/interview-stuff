## Test3

```C#
    using System;
    

    public class PetOwner
    {
        public PetOwner(string? name = “Foo”)
        {
            Name = name;
        }
    
        public string Name { get; set; }
    }
    

 ```
 
1. Will this compile?

2. What is output to the console?


```C#
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
        public PetOwner(string? name = “Foo”)
        {
            Name = name;
        }
    
        public string Name { get; set; }
    }
    
    public class Cat
    {
        public PetOwner Owner { get; set; }
    }
 ```

