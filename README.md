# Password Generator Starter Code
This was my attempt at creating a password generator..
Unfortunaley this password generator doesn't work but hopefully i will get it running sonn!

The first thing i did was set clone the starter code in my folder i wanted and created the develop branch using the command prompt.

After i did this, I set up my arrays for lower case, upper case, numbers, and special characters. My thought was having these 4 arrays i could code to randomly pull from. This way i could also attach boolean statements from the prompts to the user asking what they wanted in their password.

I then added the following function; randomPick, randomLowerCase, randomeUpperCase, randomeNumber, and randomSpecialChar. These functions were going to call which of the 4 arrays we randomly were going to pull from and then randomly pull fron the array. All of my code is working so far! Used a lot of console.log and dev tools to check and make sure I was getting results. This was much more of a challenge for me than I anticipated, it seemed so easy in my head but when it came down to the actual code there was a lot of googling and trail and error. 

After all of this was said in done, i still could not get the password to generate on the screen for the user. I wish i had given myself more time to work on this assignment.

Update: Fixed but not showing generated password to user. Changed from writing code to localStorage to var genPassword instead. At the end of each loop to randomly generate password, I have cacacinatted genPassword = genPassword + (randomly generated code). 

Still one but to fix, adding extra text tag at the start of generatted password. Also should write a code to clear generated password if user clicks on button multiple times.
