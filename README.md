# react-image-slider
A simple and easy-to-use image slider


## Install
Install the component using [yarn]('https://yarnpkg.com/lang/en/')
```sh
$ yarn add react-simple-slideshow
```

or [npm](https://www.npmjs.com/)
```sh
$ npm install react-simple-slideshow --save
```

## Usage
1. Import the `Slider` component
```sh
import Slider from 'react-simple-slideshow';
```
2. Put your images inside it 
```sh
<Slider>
    <img src="http://path/to/your/images/0" />
    <img src="http://path/to/your/images/1" />
    <img src="http://path/to/your/images/2" />
</Slider>
```

## Props
You can specify `height` and `width` attributes for the `Slider` component.
```sh
<Slider width="500px" height="300px">
    ...
</Slider>
```

New props and customizations coming soon!
