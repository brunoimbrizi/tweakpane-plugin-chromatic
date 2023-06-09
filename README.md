# Tweakpane plugin chromatic
Color palette viewer for [Tweakpane][tweakpane].

![tweakpane-plugin-chromatic](https://github.com/brunoimbrizi/tweakpane-plugin-chromatic/assets/880280/d5ecf5bc-bb27-4dd2-b223-c620d744df0a)


## Demo

[Plugin demo on StackBlitz](https://stackblitz.com/edit/js-rkko7x)



## Installation


### Browser
```html
<script src="tweakpane.min.js"></script>
<script src="tweakpane-plugin-chromatic.min.js"></script>
<script>
  const pane = new Tweakpane.Pane();
  pane.registerPlugin(TweakpaneChromaticPlugin);
</script>
```


### Package
```js

import {Pane} from 'tweakpane';
import * as ChromaticPlugin from 'tweakpane-plugin-chromatic';

const pane = new Pane();
pane.registerPlugin(ChromaticPlugin);
```


## Usage
```js
pane.addBlade({
  view: 'chromatic',
  label: 'palette',
  colors: ['red', 'blue', 'green']
});
```


[tweakpane]: https://github.com/cocopon/tweakpane/
