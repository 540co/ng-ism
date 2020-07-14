# ng-ism

This library was designed to help increase the integrity of portion marking in Angular projects. 

## Installation

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
- `text`: string (required) - the text to be portion marked.
- `classification`: string (required) - classification of text to be portion marked (Options: `U`, `R`, `C`, `S`, `TS`).
- `dissemination`: string (required) - dissemination control of text to be portion marked.


## Issues / Feature Requests
Please use Github for all issues and feature requests.
