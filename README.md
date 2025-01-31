# sperror

## Description

This package consists of a simple, customized error that allows to create errors with messages to display to the user.

### Usage

1. Install the package
   ```
   npm install sperror
   ```
2. Import it in your js file

   ```
   const Sperror = require('sperror')
   // OR
   import Sperror from 'sperror'

   ```

3. Call it to create an error
   ```
   const err = new Sperror('Error', 'This is an error created with Sperror!', 500)
   ```
4. Access its properties inside your code
   ```
   err.title // 'Error'
   err.msg // 'This is an error created with Sperror!'
   err.statusCode // 500
   err instanceof Sperror // true
   ```

## Contact

Noa Houssier - [Github](https://github.com/NestorNebula)
