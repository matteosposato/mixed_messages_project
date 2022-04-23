# Project Mixed Messages
## What's it
_This is the repository of a project I made for train my Javascript's skills._

_This script generate random horoscope prevision everytime user runs script_
## How it works
In the script there are two functions that return random value for horoscope's sign and a fortune grade (from *very lucky* to *very unlucky*).

Then, was created an object that represents the message generated, with two getter functions, one that returns full name, that's the union of name and surname, and another that returns the message, that's a phrase that output at the user how *work*, *healthcare* and *love* will be.
## How download and run 
- Download Node.js at [link](https://nodejs.org/it/download/)
- Check that Node.js is installed, following this steps:
    * Open terminal (Windows: *Click **Win+R**, then type **cmd** and click **Enter***)(Mac: *Press **CMD+Space**, then type **Terminal** and press **Enter** *)
    * Type ***node -v*** (*it should output the version installed; if not, Node.js isn't installed*)
- If Node.js is installed, open terminal, go to directory where the script file is downloaded, and then type on terminal ***node script.js***
## What components there are
Components of script are:
- 2 arrays (*horo_signs* and *fortune_opt*)
- 1 object (*horo_msg*)
