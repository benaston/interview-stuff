##Object oriented design exercise

We have a dashboard system that displays "tiles". 

A tile is a square on the screen showing the currency information associated with a currency pair. 

The user can add as many tiles to the tile "canvas" as he likes. 

The canvas is the name of the area where the tiles sit. 

A `currency pair` is something like *EURGBP* (i.e. Euros/UK Pounds).

Each tile is backed by a separate price stream, over which "price messages" are sent that contain the buy and sell prices of the currency pair associated with the stream.

Each price message received on the stream contains significantly more information that is needed for display on the user interface. Information of interest to us on the price messages is the price information (buy and sell prices) and any error codes on the message and whether the buy and/or sell prices has an error status (different from the error code).

Take a stab at what the object graph might look like for this application. Do not worry about the very low level details.
