# GitHub and Web Development Workshop

## Setup
For each of the install links, follow the directions for your operating system. 

1. **Install git**

    First, check if it's already installed with `git --version`.
    If it's not, follow [these instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. **Install Node and NPM**

    [Download Link](https://nodejs.org/en/download/).

3. **Sign Up for a GitHub Account**

    Armstrong's Wifi can be slow, so [signup for a GitHub account](https://github.com/join) while/if you're waiting for downloads.

4. **Verify Installations**

    `git --version`

    `npm --version`

    `node --version`

5. **Choose Project Directory**

    Navigate to the parent directory of where you want to put your working website directory (I use Projects/learning) from your CLI.
    Use `ls` (linux and mac) or `dir` (window) to list current directories and `cd` to change to a directory.
    _Note: You'll need two seperate directories, one for my repo and your own_
 

6. **Clone Repo**

    Run the following command (no virus I swar)

    `git clone https://github.com/Ebonsignori/github-workshop`

7. **Get IDE:**

    If you don't already use Sublime, Atom, Notepad++, or similar, get a lightweight IDE.
    For this example I'll be using Sublime. I recommend choosing Sublime for now if you're
    downloading over Armstrong's network.

    In the future, make sure to try out the [jetbrains suite](https://www.jetbrains.com/student/)
    while you're a student and can get it for free. I've started using it
    for all of my development. Java, Python, C++, Javascript, etc. and am hooked.

## Git
Initalize your Git Repository in a new directory (seperate from the one where you cloned my repo) that doesn't already have a git repo.

`git init`

Create the following files:
1. README.md
2. .gitignore
3. index.html

Create the following directories:
1. css
2. js
3. img

To see the changes that git is tracking, type

`git status`

Add the README.md to the Repo

`git



## NPM
Starts a node project

`npm init`

For emailing us from our contact form

`npm install --save nodemailer`

For starting an easy http-server

`npm install -g --save-dev http-server`

For running node.js (backend) code on our frontend

`npm install -g --save-dev browserify`

(May have to use sudo with '-g' flag)

## .gitignore
Make sure to add node_modules, because GitHub isn't a dropbox, and noone wants to
install the node each time they fork your repo.

## Goodies
- [GitHub Student](https://education.github.com/pack)
- [JetBrains Student](https://www.jetbrains.com/student/)
- [Git Cheat-Sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
- [.gitignore templates](https://github.com/github/gitignore)

## Terms
- NPM : [Node Package Manager](https://www.npmjs.com/)
- CLI : [Command Line Interface](http://www.linfo.org/command_line_interface.html)
- Repo: Repository. This is essentially your git project. It has version control, the ability to push and pull
         to and from GitHub, and automatically tracks changes of anything inside of it.