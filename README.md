![ng-ism]('./../.assets/ng-ism.png)

# ng-ism

![npm](https://img.shields.io/npm/v/ng-ism?color=226BD6&style=for-the-badge)

This library was designed to help increase the integrity of classification and control markings that are required for digital products created for government clients who interact with classified or controlled information in Angular projects.

![](https://media.giphy.com/media/TL5XQpSpASo4U/giphy.gif)

> :warning: All data contained within this repo (including this file) in **UNCLASSIFIED**. All classification and control markings on this page are for illustration purposes only.

## Features

**Automatic Portion Marking**

Just provide the text, classification, and any dissemination controls and the library will properly portion mark the section of text.

**Leak Detection**

Ng-ism does a quick check on the text provided to ensure there isn't anything included that might supersede the provided portion marking. If it finds something, it will blur the text until the user acknowledges a warning.
> To use this feature set the `warn` input to true.

**Translation**

Security marking can be hard to understand.  Ng-ism helps by providing translations on many popular abbreviations in security markings.  Users can see these translations by hovering over the portion markings. (Uses native HTML tooltips).

## Installation

Install through npm:

```bash
npm install ng-ism --save
```

Import the NgIsmModule into your Angular application's module Your application's main module might look like this:

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIsmModule } from 'ng-ism'
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
    NgIsmModule
    ...
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

Alternatively you can only import (sub)modules with components you need. For example if you only want to use the `<ism-banner-line>` component, you can import just `BannerLineModule` instead of `NgIsmModule`. This resulting bundle will be smaller in this case.

Once your module is imported, you can use it's components anywhere in your Angular application:

```html
<!-- Example implementation -->
<ism-portion-marking text="Area 51 Coordinates" classification="TS" dissemination=""></ism-portion-marking>
```

## API

Available components.

### `Banner-Line`

Banner lines are used to provide a visual representation of the overall classification of data displayed in the application. A banner line can be used inline or fixed depending on usage and could vary in size.

#### Inputs

| Property  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| classification | `string`  | `-` | Set the overall classification level known as the banner line. It can be either `controlled`, `unclassified`, `restricted`, `confidential`, `secret`, `topsecret`, or `topsecretsci` |
| classificationColor | `string` | `-`  | Set custom color for banner line using valid css color property (hex, rgba, etc.) |
| [controls] | `Array<string>` |  `-`  | Control items for classification |
| fixedPosition | `string` | `-` | Set a fixed position of the classification banner. It can be either `top` or `bottom` |
| height | `string` | `-` | Set custom height of the banner line using valid css height property in px. |

### `Portion-Marking`

A portion marking represents and object that is marked to clearly convey the level of classification assigned, the portions that contain or reveal classified information.

#### Inputs

| Property  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| [warn] | `boolean`  | `false` | Set to blur text for leak or misclassification warnings. |
| text | `string` | `-` | Set the text to be portion marked. |
| classification | `string` |  `-` | Set the classification of the text to be portion marked. It can be either `U`, `R`, `C`, `S`, or `TS` |
| dissemination | `string` | `-`  | Set the dissemination control of text to be portion marked |

### `Image`

An image represents an image that is marked to clearly convey the level of classification assigned, the image that contain or reveal classified information.

#### Inputs

| Property  | Type | Default  | Description |
| --------- | ---- | -------- | ----------- |
| src | `boolean`  | `false` | Set image src attribute. |
| title | `string`  | `-` | Set image title attribute. |
| alt | `string`  | `-` | Set image alt attribute. |
| width | `number`  | `-` | Set image container width. |
| height | `number`  | `-` | Set image container height. |

| position |`string` | `-`  | Set the position of the classification/controls on the image. It can be either `centered`, `bottomLeft`, `bottomRight`, `topLeft`, `topRight`, `bottomCentered`, or `topCentered` |
| classification | `string` |  `-` | Set the classification of the image. It can be either `controlled`, `unclassified`, `restricted`, `confidential`, `secret`, `topsecret`, or `topsecretsci` |
| [controls] | `Array<string>` | `-` | Set the dissemination controls of image |

## Local Development

Clone repo.

```bash
git clone https://github.com/540co/ng-ism.git
```

Then build the library within the project. This will build the library for local development.

```bash
npm run lib:build
```

Run demo app locally

```bash
npm run start
```

Alternatively, You can then run `ng serve` to spin up the demo app and see the library in action. To update the library, you can make edits in the `projects/ng-ism` folder.  This is where the actual library code is kept.

```bash
npm run lib:watch
```

> This enables hot reloads while editing the ng-ism library. You can leave `ng serve` running if you'd like and hot-reload will pick up the changes when the build is finished.

To test the library components.

```bash
npm run test
```

## Issues / Feature Requests

Please use [Github](https://github.com/540co/ng-ism/issues) for all issues and feature requests.
