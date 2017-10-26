# OrganicShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Before running the `ng build --prod`, edit the following files first because we are using the [angular-4-data-table](https://www.npmjs.com/package/angular-4-data-table):

`admin.module.ts` - Look for the 

`import { DataTableModule } from 'angular-4-data-table';` change it into 

`import { DataTableModule } from 'angular-4-data-table/src/index';`

Edit the `.angular-cli.json` with this `"scripts": [ "../node_modules/angular-4-data-table/dist/index.js" ],`

And use this command `ng build --prod --aot=false`

Reference from the [github documentation](https://github.com/MIt9/angular-4-data-table)

## Deploying it

Deploy to firebase if you are working with a firebase realtime database. 

Deploy to Github Pages if you have front end only or you are using a live API.

This will only work if we use the built in command line of the OS. 

Run this into the command line:

`npm install -g firebase-tools`

`firebase login`

`firebase init`

Answer the followint questions (Hosting, choose the project you created in firebase). Edit the `firebase.json` write the following code


```javascript
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

`ng build --prod`

`firebase deploy`

That's all. You have now uploaded your application into firebase.


