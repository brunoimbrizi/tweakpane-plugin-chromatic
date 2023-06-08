# Tweakpane plugin chromatic
Color palette viewer for [Tweakpane][tweakpane].


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
