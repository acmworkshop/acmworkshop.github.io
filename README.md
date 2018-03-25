# GitHub and Web Development Workshop
<!-- ![ACM Armstrong Logo](./img/ACM-logo.png) -->

## Prerequesites

- A laptop
- An internet connection
- Pizza?


- Very basic HTML / CSS / JS knowledge

We don't have a lot of time to go into front-end web development, but most of us
have been exposed to it through a few classes here at Armstrong. If
you don't, you'll be absolutely fine - though you should seriously look up how to do this stuff.
It takes a few hours to learn the basics and it's something everyone in technology should know
how to do.

## What are we doing?
We're going to be deploying a static page that shows the current time in the center of
 the screen to GitHub and then touching breifly on handling a website's backend with node.js while
 still hosting the frontend on github by using sockets.


## Setup
For each of the install links, follow the directions for your operating system. 

0. **Terminal**

    Open your operating systems command line interface (CLI).

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
    _Note: You'll need two seperate directories, one for my repo and your own._
 

6. **Clone Repo**

    Run the following command (no virus I swar)

    ```
    https://github.com/Ebonsignori/github-and-web-dev-workshop.git
    ```

7. **Get IDE:**

    If you don't already use Sublime, Atom, Notepad++, or similar, get a lightweight IDE.
    For this example I'll be using Sublime. I recommend choosing Sublime for now if you're
    downloading over Armstrong's network.

    In the future, make sure to try out the [jetbrains suite](https://www.jetbrains.com/student/)
    while you're a student and can get it for free. I've started using it
    for all of my development. Java, Python, C++, Javascript, etc. and am hooked.

# Part 1: Git and GitHub
<!-- ![Github Logo](./img/readme/github-logo.png) -->

## Git

Currently, you should have a directory like this:

`./Projects/learning/github-and-web-dev-workshop`

Make the following directory:

`./Projects/learning/my-website`

Navigate to my-website using the CLI and run the following command to initalize
a git repository in my-website.

```
git init
```

my-website is now a git repository that isn't tracking any files.

Create the following files.
1. _README.md_
2. _.gitignore_
3. _index.html_

Create the following directories.
1. _css_
2. _js_
3. _img_

To see the changes that git is tracking, type
```
git status
```
Currently, git isn't tracking any files. Let's change this.

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

Let's add every file in my-website to be tracked by git
```
git add *
```

Let's make a new commit with all of our newly tracked files
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

Let's put our local repository on GitHub.

1. Go to GitHub and log into the account that you created earlier.

2. In the top right press the + icon and select "new repository".

3. Name it, **but do NOT initalize with a README, .gitignore, or license.**

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

You may have to enter your github email and user name defaults with
```
git config --global user.name "Your Name"
git config --global user.email "Your github email address"
```
Set them and try pushing master to origin again.

Now, visit your repository and press the commits button. Here we can explore
the changes we've made with git diff, and checkout the entire filesystytem of our
repository at any previous commit.


# Part 2: NPM, Node, and browserify
## NPM
Start a node project. If you don't understand why we are installing stuff, just
trust me for now. _Yeppp All viruses._

`npm init`

For creating a socket from backend to front-end

`npm install --save socket.io`

Install http-server for starting an easy local development server

`npm install -g --save-dev http-server`

Install browserify running node.js (backend) code on our frontend

`npm install -g --save-dev browserify`

_You may have to use sudo if you use the '-g' (global install) flag_

Notice that we now have a node_modules directory containing all of the npm
libraries that we installed and of the standard node.js libraries that are
initalized with `npm init`.

### .gitignore
We add local files to .gitignore, so that when we type `git add *` git ignores
files like I'm ignoring Hashemi's database project.

...

 Let's make sure to add `node_modules` to
.gitignore, because GitHub really isn't a dropbox, and uploading dependencies
is just inconsiderate.

### package.json
When you develop, you're likely going to use GitHub not only for version control,
 project storage, and open-sourcing your code, but also for collaboration. This is
 why we ignore certain files that we only need locally / for development.

The package.json file generated by the fields that you filled out when prompted
by `npm init` contains dependencies for your project. Whenever you `npm install` with
the `--save` flag, the dependency is added to the JSON. When you use the `--save-dev` flag,
it makes sure to not include the dependency when you deploy optimized code.

## Running node Libraries on The Front-end
Node.js extends javascript to be a backend language. Node files can be run from the command line with a simple
 `node filename.js` command. We can even host an entire backend with node.js
 running locally on our machine, or on remote hosting. Node.js can interact
 SQL and NoSQL databases and do about everything that other backend languages can do.

We can run a lot of node.js code (in our case socket-io) in the frontend using libraries like browserify.
Browserify bundles / builds / converts into a node js file.

How it does this?

![Browserify Logo](./img/readme/browserify.png)

Yeah, magic as far as we know, but also with this command:
```
browserify node.js -o ./js/bundled-node.js
```

### Getting the Front-End of Our Project From A Template
As a web developer you will reuse a LOT of components. Actually, as pretty much any
type of developer you will reuse a lot, but with web design there are a lot of easily
accessible components available to us. I've included some links to places where you
 can find pre-made stuff [here](### Pre-made-Website-Templates-and-Components).
 For our Timer page we will copy the code found at [w3school's tutorial]('https://www.w3schools.com/howto/howto_css_coming_soon.asp').


## Image Licence
A huge part of front-end development is finding free-to-use images with no licensing that
will get you in trouble. You can use any of the free image sites [in the appendix](###License-Free-Image-Sites)
to grab a background for your count-down page.

## Deploying The Development Server
Earlier we installed http-server, now we can run http-server to start a local
development server. The following command starts an http-server in the current
directory '.' at adress 'localhost' on port '9070', and -o opens a webbrowser
 at the site. The port can be nearly anything that you aren't already using.
```
http-server . -a localhost -p 9070 -o
```
If this command doesn't work, it's probably because you didn't do a npm global install
with the -g flag, You can run http-server from its location with
```
./node_modules/http-server/bin/http-server . -a localhost -p 9070 -o
```

# Part 3: Deploying to GitHub and Socket-io
## Deploy to Github
First, make sure to add all the files that you've modified to be staged
for a commit with
```
git add *
```
Second, commit the files in a new commit
```
git commit -a -m "Add template files for countdown page"
```
Finally, push the repository to Github
```
git push
```




# Appendix
## Goodies
- [GitHub Student](https://education.github.com/pack)
- [JetBrains Student](https://www.jetbrains.com/student/)
- [Git Cheat-Sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
- [.gitignore Templates by Project](https://github.com/github/gitignore)
- [Git Commit Best Practices](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53)

### Pre-made Website Templates and Components
- [Components on Codepen]('https://codepen.io/')
- [Static Sites on HTML5UP]('https://html5up.net/')
If you want to learn bootstrap:
- [Colorlib top 40]('https://colorlib.com/wp/free-bootstrap-landing-pages-templates/')

### License-Free Image Sites
- [pexels]('https://www.pexels.com/')
- [pixabay]('https://pixabay.com/')
- [freeimages.co]('http://www.freeimages.co.uk/galleries.htm')

Free icons are incredibly useful too
- [Icons at flaticon]('https://www.flaticon.com/search?word=folder')

## Terms
- NPM : [Node Package Manager](https://www.npmjs.com/)
- CLI : [Command Line Interface](http://www.linfo.org/command_line_interface.html)
- Repo: [Git Repository](https://www.sbf5.com/~cduan/technical/git/git-1.shtml). This is essentially your git project. It has version control, the ability to push and pull
         to and from GitHub, and automatically tracks changes of anything inside of it.
- JSON: [JavaScript Object Notation](https://www.w3schools.com/js/js_json_intro.asp). Easy-to-read syntax for storing and saving data that can be parsed by JS and now many other languages.