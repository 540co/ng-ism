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

## API

### `Banner-Line`

#### Inputs

| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| classification | `string`  | `-` | YES | Set the overall classification level known as the banner line. |
| classificationColor | `string` | `-` | NO | Set custom color for banner line using valid css color property (hex, rgba, etc.)|
| [controls] | `Array<string>` |  `-` | NO | Control items for classification |
| fixedPosition | `top | bottom | none` | `none` | NO | Set a fixed position to top or bottom |
| height | `string` | `-` | NO | Set custom height of the banner line using valid css height property in px. |

### `Portion-Marking`

#### Inputs

| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| [warn] | `boolean`  | `false` | YES | Set to blur text for leak or misclassification warnings. |
| text | `string` | `-` | YES | Set cthe text to be portion marked. |
| classification | `U | R | C | S | TS` |  `-` | YES | Set the classification of the text to be portion marked |
| dissemination | `string` | `-` | YES | Set the dissemination control of text to be portion marked |

### `Image`

#### Inputs

| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| src | `boolean`  | `false` | YES | Set image src. |
| position |`Array<centered | bottomLeft | bottomRight | topLeft | topRight | bottomCentered | topCentered>` | `-` | YES | Set the position of the classification/controls on the image |
| classification | `U | R | C | S | TS` |  `-` | YES | Set the classification of the image |
| [controls] | `Array<string>` | `-` | NO | Set the dissemination controls of image |

---

## Issues / Feature Requests

Please use [Github](https://github.com/540co/ng-ism/issues) for all issues and feature requests.
