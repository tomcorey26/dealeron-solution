# dealeron-solution

# Live Demo
http://mars-rover-solution.surge.sh/

# Run locally
```bash
git clone https://github.com/tomcorey26/dealeron-solution.git
npm i
npm run dev
```

# Run tests
```bash
npm run test
```
# Description

I made this under the assumption that the rovers were supposed to stay inside the boundaries given as input. Also that the inputs are supposed to be seperated by lines and spaces.

I wanted to make a ui for this, so in my design I went with using a rover, grid, and UI class. I first started with getting the input from the form and validating that everything is correct. There were a ton of things that could be bad input (Negative numbers, not the correct chars, too many inputs, too little inputs, etc.) After I validated the data was correct, I used it to create a grid using my grid class. The grid class stored the state of the grid, so that way I could reflect it to the UI. I then took the inputs for the rovers and created rover objects using my rover class to store their states. Using a method called explore on my grid object, I looped through each rover passing them into the explore method. In the explore method, I looped through the individual rover instructions and then updated its positioning by seeing which direction it should turn or where it should move. I then reflected that information onto the grid state, and used the UI class to update the DOM. I took the rovers final position coordinates after the explore loop and used them for their answer outputs.
