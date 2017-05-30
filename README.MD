Project setup:
--------------------------------------------------------------------
!update this:
# npm scripts
# base64 img hasher is buggy and prevents image caching

--------------------------------------------------------------------
Init commands:
  git init
  yarn init
  eslint --init
--------------------------------------------------------------------

--------------------------------------------------------------------
GIT
with staging:
  git add .
  git commit -m "initial commit"

without staging
  git commit -am "initial commit"

to remote server:
  git remote add web10 https://github.com/Saafine/web13.git
  git push –u web10 master
  git remote -v update => check if up to date

to create a new branch:
  git checkout -b [name_of_your_new_branch]
to switch a branch:
  git checkout [name_of_your_new_branch]
to view available branches:
  git branch
to merge branch with master:
  git merge [branch_name]

Git commands:
  git log
  git status
  git remote

Get old version of a file:
  git show HASH:path/to/file
  or
  git show HEAD@{2017-02-25}:./fileInCurrentDirectory.txt

Get local up to date from remote:
  git remote update
  git status
  git pull origin master

 Git clone repo:
 git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
--------------------------------------------------------------------

--------------------------------------------------------------------
Global plugins:
  yarn add -g eslint

Plugins (dependencies):
  yarn add body-parser
  yarn add express
  yarn add mongoose
  yarn add react react-dom react-router

Plugins (dev dependencies):
  yarn add babel-core babel-cli babel-preset-es2015 babel-preset-stage-2 --dev
  yarn add babel-plugin-react-html-attrs --dev
  yarn add webpack webpack-dev-server --dev
  yarn add babel-loader --dev
  yarn add babel-preset-react --dev
  yarn add sass-loader node-sass css-loader --dev
--------------------------------------------------------------------
npm commands:
  "node_modules/.bin/webpack-dev-server" (make sure webpack is installed in development only mode)
--------------------------------------------------------------------