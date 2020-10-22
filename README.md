# Tic-Tac-Toe-Client Project
This project is a game of tic tac toe with an API authorization implementation.
My goal is to have the user be able to sign up, sign in, change their password
if desired, and then be able to play and track the number of games played.

- - - -

## Planning and Development
My plan from the start was to break the project down into 4 steps.
  - Step 1: wirefram and user stories to outline my next steps
  - Step 2: write code to handle API calls for authorization including sign up,
  sign in, change password, sign out.
  - Step 3: create game UI and game engine that recognizes a winner
  - Step 4: complete API functionality to handle GET gamesPlayed feature. Finalize
  all remaining features and styling.

While I stayed on course for the majority of the project I will say I spent
additional time in Step 1 designing the layout and CSS for the app. Step 4
involved much more debugging than anticipated, but was able to get through it.

- - - -

## Technologies Used
  - Javascript
  - HTML // CSS
  - Bootstrap
  - Jquery

- - - -

## Unsolved Problems
By the project deadline my application met all the requirements with the
exception of one; Though I was able to 'play again' and the board would clear,
the array which tracked the board would not clear from the previous game.
This required the user to refresh the page to play again.

I have fixed this issue since then, leaving me with only a few future
implementation goals:
  - Gamemode vs the computer
  - Feature to go back and review previous game boards

- - - -

## Wireframes & User Stories
### User Stories
#### Authentication
  - As a user, I want to sign up with email, paswword, password confirmation
  - As a user, I want to sign in with email and password
  - As a user, I want to be able to change my password
  - As a user, I want to sign out

#### Game
  - As a signed in user, I want to be able to start a new tic tac toe game
  - As a signed in user, I want to be able to add x to the board first
  - As a signed in user, I want turns to rotate between x and o
  - As a signed in user, I want to be only able to select open spaces
  - As a signed in user, I want to be told when there are 3 in a row for a win
  or if it is a tie
  - As a signed in user, I do not want to be able to add to the board once
  the game is over
  - As a signed in user, I want to be able to play again
  - As a signed in user, I want to be able to see how many games I have played

### Wireframes
#### Logged Out
  - Sign up form
  - Sign in form

#### Logged In
  - Change password form
  - Sign out button
  - Play game button
  - Games stats button

#### Original Image
![Hand Sketched Wireframe](C:\Users\faric\Downloads\IMG_2469.jpg)
