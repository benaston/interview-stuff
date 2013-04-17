## Test4

*What is written to the console?*

```C#
using System;

class Program
{
    static void Main(string[] args)
    {
        var x = false;
        Func<bool> f = () => x;
        x = true;

        Console.Out.WriteLine(f());
        Console.ReadLine();
    }
}
```
