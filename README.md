<a id="top"></a>

<div align="center">
    <a href="https://github.com/NestorNebula/sperror">
        <img src="./public/sperror.png" alt="Package Logo" width="200" height="200" />
    </a>
    
<h3>Sperror</h3>
</div>

---

### Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Methods](#methods)
  - [Extended Sperrors](#extended-sperrors)
  - [Helpers](#helpers)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Description

Sperror is a package that creates a new Sperror object on top of the traditional Error that can be used in JavaScript environments.

The Sperror object offers useful properties to handle different types of errors while keeping the original properties of the Error object.

The package also have Sperrors specifically for Frontend/Backend development purposes and comes with some helpers functions to use them properly.

Sperror makes error handling less error prone while giving better context to developers and users.

## Getting Started

### Installation

```
npm install sperror
```

## Usage

### Basic usage

```ts
// ESM
import Sperror from 'sperror';

// CJS
const Sperror = require('sperror');

const sperror = new Sperror('Title', 'Message'); // Creates an error with Sperror

sperror.title; // 'Title'

// Or sperror.message
sperror.msg; // 'Message'
```

### Methods

#### `log()`

```ts
sperror.log(); // Logs the Sperror in the console
```

#### `throw()`

```ts
sperror.throw(); // Throws the Sperror
```

### Extended Sperrors

#### `BackendSperror`

```ts
// EJS
import { BackendSperror } from 'sperror';

// CJS
const { BackendSperror } = require('sperror');

const backendSperror = new BackendSperror('Title', 'Message', 500); // HTTP status code is required for Backend Sperror

backendSperror.statusCode; // 500
```

#### `FrontendSperror`

```ts
// EJS
import { FrontendSperror } from 'sperror';

// CJS
const { FrontendSperror } = require('sperror');

const frontendSperror = new FrontendSperror('Title', 'Message'); // HTTP status code doesn't exist on FrontendSperror
```

### Helpers

#### Type Predicates

```ts
// EJS
import { isSperror, isBackendSperror, isFrontendSperror } from 'sperror';

// CJS
const { isSperror, isBackendSperror, isFrontendSperror } = require('sperror');

const sperror = new Sperror(
  'Sperror',
  'Not a BackendSperror nor a FrontendSperror'
);

isSperror(sperror); // true
isBackendSperror(sperror); // false
isFrontendSperror(sperror); // false
```

#### `tryWithSperror`

The function acts like a try/catch but returns a Sperror if an error occured.

```ts
// EJS
import { tryWithSperror } from 'sperror';

// CJS
const { tryWithSperror } = require('sperror');

function returnOne() {
   return 1;
}

const try = tryWithSperror(returnOne);
try.result // 1
try.error // false

function throwNull() {
   throw null;
}

const try = tryWithSperror(throwNull);
try.error // true
try.result instanceof Sperror // true
```

## Contributing

If you find an issue while using Sperror or want to contribute, please <a href="https://github.com/NestorNebula/sperror/issues">open an issue</a>.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-darkcyan.svg?style=for-the-badge)](https://github.com/NestorNebula/sperror/blob/main/LICENSE)

© Noa Houssier - 2025

<p align='right'>(<a href='#top'>go back to the top</a>)</p>
