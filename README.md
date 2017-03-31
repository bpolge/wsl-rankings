# Node / React Sample Project

Sample project demonstrating a very simple implementation:
  - [Express.js][express] with [Redis][redis] 
  - [React.js][react] frontend
  - [Redux][redux] state management
  - [React-DnD][react-dnd] drag and drop

Interface is VERY rough. This project is not to demonstrate CSS-itude, but functional stuff.

It works by dragging WSL Surfer cards onto the 'Points" boxes. The drop action with then add the labeled points to the athlete.

### Installation
**Clone Project:**
```
$ git clone https://github.com/bpolge/wsl-rankings.git
```
WSL-Rankings requires Redis to be running using the included *dump.rdb* file.
If you already have Redis installed: ```npm run redis``` will start the server in the background. Otherwise, import the *.dmp* file to your own instance.

**install dependencies and start server:**
```
$ cd wsl-rankings
$ npm install && bower install
$ npm run build
$ npm start
```

There are a few more "dev" type scripts available in the *package.json* file.

## Technology Stack
**backend:**
[Node.js][node.js]
[Express.js][express]
[Redis][redis]

**frontend:**
[React.js][react]
[Redux][redux]
[React-DnD][react-dnd]
[Sass][sass]
[Twitter Bootstrap][Twitter Bootstrap]
[jQuery][jQuery]

**build env:**
[NPM][npm]
[Gulp.js][gulp]
[Webpack][webpack]

*Big thanks to [Dillinger.io][edit] for providing a free markdown editor. Saved me a ton of time and hassel*

*Checkout the code at [http://github.com/joemccann/dillinger][dill]*

   [redis]: <http://redis.io/>
   [react]: <https://facebook.github.io/react/>
   [redux]: <http://redux.js.org>
   [react-dnd]: <http://react-dnd.github.io/react-dnd/>
   [node.js]: <http://nodejs.org>
   [sass]: <https://sass-lang.com>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [gulp]: <http://gulpjs.com>
   [webpack]: <http://webpack.github.io>
   [npm]: <https://www.npmjs.com>

   [dill]: <https://github.com/joemccann/dillinger>
   [edit]: <http://dillinger.io>

