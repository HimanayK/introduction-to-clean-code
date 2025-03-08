# introduction-to-clean-code
1. Open Terminal
 - check node and npm
  - node --version OR node -v
  - npm --version OR npm -v
2. Install ESLint 
 - as global package
  - npm install eslint -g OR npm install eslint --global 
 - as local package
   - ***npm init -y***   /* command to initialize your project will create a package.json file. package.json will store your project dependencies and other important configuration settings for your project.  */

 - ***npm install eslint --save-dev***   /*  install ESLint; --save-dev flag saves the package as a dependency for development usage only. eslint is a package that is only needed when you are actively working on and making changes to your project. Once your project launches or is in production, eslint will no longer be needed. */ 

  - ***npm init @eslint/config***     /* set up a configuration file */

  - ***Install Lint Extension***


  - ***npx eslint yourfile.js***       /* to check lint errors */
  - ***npx eslint yourfile.js --fix**      /* to auto-fix issues */