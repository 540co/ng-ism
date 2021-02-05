# ng-ism

This library was designed to help increase the integrity of portion marking in Angular projects. 

![](https://media.giphy.com/media/TL5XQpSpASo4U/giphy.gif)

## Features

#### Automatic Portion Marking

Just provide the text, classification, and any dissemination controls and the library will properly portion mark the section of text.

#### Leak Detection

Ng-ism does a quick check on the text provided to ensure there isn't anything included that might supercede the provided portion marking.  If it finds something, it will blur the text until the user acknowledges a warning. 
> To use this feature set the `warn` input to true.

#### Translation

Security marking can be hard to understand.  Ng-ism helps by providing translations on many popular abbreviations in security markings.  Users can see 
these translations by hovering over the portion markings. (Uses native HTML tooltips)

---

## Installation

```bash
npm install --save ng-ism
```

Import the library into your project (usually `app.module`) and include it in the module `imports` section.

```js
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

Alternatively you can import each component modules separately for smaller bundles:
- BannerLineModule
- ImageModule
- PortionMarkingModule

## Available Components

| Component       | Docs |
|-----------------|------|
| banner line     | -----|
| portion marking | -----|
| image           | -----|

## Usage

Once your module  is imported, you can use it's components anywhere in your Angular application: 

```html
<!-- Example implementation -->
<ism-portion-marking warn="" text="" classification="" dissemination=""></ism-portion-marking>
```

#### Properties

*NOTE:* All properties are required.
- `warn`: boolean - set to `true` to blur text for leak or misclassification warnings (default: `false`).
- `text`: string (required) - the text to be portion marked.
- `classification`: string (required) - classification of text to be portion marked (Options: `U`, `R`, `C`, `S`, `TS`).
- `dissemination`: string (required) - dissemination control of text to be portion marked.

---

## Issues / Feature Requests

Please use [Github](https://github.com/540co/ng-ism/issues) for all issues and feature requests.
