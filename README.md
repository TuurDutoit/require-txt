require-txt
===========
Require plain text files, like any .js or .json file.

## WARNING!
This is a dirty hack and the API this functionality depends on ([require.extensions](https://nodejs.org/api/globals.html#globals_require_extensions)) is deprecated! The module loader API is frozen, so it will probably never be removed, but it may be unstable or have some weird quirks. Also, the number of filesystem calls node.js has to make to require __any__ module grows linearly with the number of registered file extensions!  
Do not - I repeat - __do not__ use this in production. You have been warned.

## Installation
With NPM:

```
$ npm install require-txt
```

Or Yarn:

```
$ yarn add require-txt
```


## Usage
First, register the handler:

```js
require("require-txt")();
```

Then, just require your files:

```js
console.log(require("./hello.txt"));
// "Hello, how are you?"
```

You can pass custom file type extensions:

```js
require("require-txt")("csv");
require("require-txt")(["html", "html5"]);
```

That's pretty much it.