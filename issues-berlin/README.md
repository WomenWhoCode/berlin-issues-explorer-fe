## Running the App

**This assumes you have either Linux or OSX and won't work for Windows.**

#### Prerequisites

Make sure npm is installed with a minimum version of 5.0.
Try
```
npm --version
```
This will show you the currently installed version of npm.
If you see an error message, you don't have npm at all. Refer to the [official installation guide](https://docs.npmjs.com/getting-started/installing-node) for how to get it.

Make sure that git is also installed:
```
which git
```
If this returns `not found`, check out this handy guide from [github.com](https://help.github.com/articles/set-up-git/).

#### Getting the app

First step is that you need to clone the app from github.
Change to a folder where you would like to install the app.
Then clone the files from github:
```
git clone git@github.com:WomenWhoCode/berlin-issues-explorer-fe.git
```

As the repository is public, you shouldn't need any verification to do this.

#### Installing Dependencies

Then switch to the new folder and the sub folder containing the code:
```
cd berlin-issues-explorer-fe/issues-berlin
```

Now we need to download and install all the dependencies. Npm will do this for us:
```
npm install
```

#### Running the app

Now you are ready to roll!
Run the following command to start the app on your local machine:
```
npm start
```
This should also open a browser window. If this does not happen, go to `localhost:3000` to see the website in action.

**Note:**
If your port 3000 is already blocked by another app, this will not work because ports can only be used by one app at a time.


## Contributing

Please review our [contributing guidelines](CONTRIBUTING.md) and enjoy collaboration!
For starters have a look at the open [issues](https://github.com/WomenWhoCode/berlin-issues-explorer-fe/issues).


