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

    ```
    git --version
    ```

    ```
    npm --version
    ```

    ```
    node --version
    ```

5. **Choose Project Directory**

    Navigate to the parent directory of where you want to put your working website directory (I use Projects/learning) from your CLI.
    Use `ls` (linux and mac) or `dir` (window) to list current directories and `cd` to change to a directory.
    _Note: You'll need two seperate directories, one for my repo and your own_
 

6. **Clone Repo**

    Run the following command (no virus I swar)

    ```
    git clone https://github.com/Ebonsignori/github-workshop
    ```

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
```
git status
```
Add the README.md to the Repo
```
git add README.md
```
Now README.md is _staged_ to be commited.

A git repository doesn't automatically save each change you make, instead
you have to _commit_ a set of files to save their status at that commit.

Let's go through with the commit.

```
git commit -m "Initial Commit. Add README.md"
```

Now if we run `git status` again, we see that README.md is not listed as untracked, that's because in the current
commit (current version of our save) README.md hasn't been changed.

Now open README.md and type a few lines. README.md uses
[markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to style. This file
you're reading right now was written entirely in Markdown.

Copy the following into your README.md file.
```
# GitHub and Web Workshop
This is the text after a heading. **Cool** _right_?
```

Save README.md and type `git status` again.

Now under "changes not staged for commit" you will see README.md. This is
because git is tracking README.md for changes, and README.md has been changed
since the last commit.

Now let's add everything to be tracked by git
```
git add *
```

Then let's make a new commit with all of our files tracked
```
git commit -a -m "Update README.md. Add initial project files for tracking"
```
_Note: It's best practice to title your commits as if you were finishing this statement:
"if applied, this commit will ....." in the imperative. More details [here](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53)_

Let's see our commits with
```
git log
```

## GitHub
Technically everything we've just done has nothing to do with what you know
as GitHub. Git is a version control system, but GitHub can host our repositories
and let us interact with them is incredibly productive ways.

Let's put our local repository on GitHub

1. Go to GitHub and log into the account that you created earlier.

2. In the top right press the + icon and select "new repository"

3. Name it, **but do NOT initalize with a README, .gitignore, or license**

4. Press create Repository.

Now we should see the following instructions
```
1. echo "# test" >> README.md
2. git init
3. git add README.md
4. git commit -m "first commit"
5. git remote add origin https://github.com/<your username>/<repo name>.git
6. git push -u origin master
```

You'll notice that we've already completed steps 1 through 4, now it's time
to add a remote url where we can _push_ our local repo.

```
git remote add origin https://github.com/<your username>/<repo name>.git
```

Type the command, replacing your username and repo appropriately, then push your
repo to GitHub.
```
git push -u origin master
```

Now, visit your repository and checkout the

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
install all of your local node libraries each time they fork your repo.

## Goodies
- [GitHub Student](https://education.github.com/pack)
- [JetBrains Student](https://www.jetbrains.com/student/)
- [Git Cheat-Sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
- [.gitignore Templates by Project](https://github.com/github/gitignore)
- [Git Commit Best Practices](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53)

## Terms
- NPM : [Node Package Manager](https://www.npmjs.com/)
- CLI : [Command Line Interface](http://www.linfo.org/command_line_interface.html)
- Repo: Repository. This is essentially your git project. It has version control, the ability to push and pull
         to and from GitHub, and automatically tracks changes of anything inside of it.