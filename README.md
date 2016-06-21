[![NPM](https://nodei.co/npm-dl/react-native-keyboard-spacer.png?months=3&height=2)](https://nodei.co/npm/react-native-keyboard-spacer/)

# react-native-keyboard-spacer

Plug and play iOS react-native keyboard spacer view.

![image](https://media.giphy.com/media/3oEjHJwLyYg7upTyYo/giphy.gif)
## Quick Start

Install View: `npm install --save react-native-keyboard-spacer`

## Example Usage

The view will automatically perform a layout animation when the keyboard appears or disappears.

```javascript
import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TextInput
} from 'react-native';

class DemoApp extends Component {
  render() {
    return (
      <View style={[{flex: 1}]}>
        {/* Some random image to show scaling */}
        <Image source={{uri: 'http://img11.deviantart.net/072b/i/2011/206/7/0/the_ocean_cherry_tree_by_tomcadogan-d41nzsz.png', static: true}}
                 style={{flex: 1}}/>

        {/* The text input to put on top of the keyboard */}
        <TextInput style={{left: 0, right: 0, height: 45}}
              placeholder={'Enter your text!'}/>

        {/* The view that will animate to match the keyboards height */}
        <KeyboardSpacer/>
      </View>
    );
  }
}

AppRegistry.registerComponent('DemoApp', () => DemoApp);
```
### Properties - Basic

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| topSpacing | 0 | `number` | Add or subtract additional spacing from keyboard height |
| animationConfig | [A default animation](https://github.com/Andr3wHur5t/react-native-keyboard-spacer/blob/expose-layout-animations/KeyboardSpacer.js#L14) | `LayoutAnimationConfig` | [LayoutAnimation](https://facebook.github.io/react-native/docs/layoutanimation.html#content) configuration object |

### Properties - Methods

| Prop  | Params  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| onToggle | `toggleState` | `function` | onToggle method is called when when keyboard toggles. Two parameters passed through, keyboardState (boolean, true if keyboard shown) and keyboardSpace (height occupied by keyboard) |
