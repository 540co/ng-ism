# NgIsmLibrary

This is the full project for the `ng-ism` library.  The actual library code can be found in the `projects/ng-ism` folder.

## Getting Started
```
npm install --save ng-ism
```

Import the library into your project (usually `app.module`) and include it in the module `imports` section.

```
import { NgIsmModule } from 'ng-ism'    <----- Import here
...
@NgModule({
  ...
  imports: [
    ...
    NgIsmModule                         <----- and here
    ...
  ]
  ...
})
export class AppModule { }
```

## Usage

Use anywhere in your app with the `<ng-ism>` tag.

```
<ng-ism text="" classification="" dissemination=""></ng-ism>
```
#### Properties
*NOTE:* All properties are required.
- `warn`: boolean - set to `true` to blur text for leak or misclassification warnings (default: `false`).
- `text`: string (required) - the text to be portion marked.
- `classification`: string (required) - classification of text to be portion marked (Options: `U`, `R`, `C`, `S`, `TS`).
- `dissemination`: string (required) - dissemination control of text to be portion marked.

## Local Development

```
git clone https://github.com/540co/ng-ism.git
```

Then build the library within the project.
```
cd ng-ism
ng build ng-ism
```

This will build the library for local development.  You can then run `ng serve` to spin up the demo app and see the library in action. To update 
the library, you can make edits in the `projects/ng-ism` folder.  This is where the actual library code is kept.

> To have hot reloads while editing the ng-ism library, run `ng build ng-ism --watch` command.  You can leave `ng serve` running if you'd like and hot-reload will pick up the changes when the build is finished.

## Issues / Feature Requests
Please use Github for all issues and feature requests.
https://github.com/540co/ng-ism/issues