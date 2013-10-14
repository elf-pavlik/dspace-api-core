# DSpace-API-Core

Core components of programable interfaces for DSpace-NG

## Developing

First of all you need *node* and *npm* which you can install using [NVM](https://github.com/creationix/nvm)

We use [Grunt](http://gruntjs.com/) to run tasks, watch files, and show
desktop notifications

Install dependencies

    $ npm install

Run development deamon

    $ grunt

## Testing

We use [Karma](http://karma-runner.github.io/) to run tests and watch files

    $ npm test

It also supports desktop notifications

## Documenting

For livepreview of README when you edit it

    $ grunt doc

which should open doc folder in your browser, or manually navigate to
http://localhost:8111
