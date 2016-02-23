[![NPM](https://nodei.co/npm-dl/react-native-keyboard-spacer.png?months=3&height=2)](https://nodei.co/npm/react-native-keyboard-spacer/)

# react-native-keyboard-spacer

Plug and play iOS react-native keyboard spacer view.

![image](http://fat.gfycat.com/InconsequentialBothAmericankestrel.gif)
## Quick Start

Install View: `npm install --save react-native-keyboard-spacer`

## Example Usage

The view will automatically perform a layout animation when the keyboard appears or disappears.

```javascript
var React = require('react-native');
var KeyboardSpacer = require('react-native-keyboard-spacer');
var {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TextInput
} = React;

var DemoApp = React.createClass({
  render: function() {
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
});

AppRegistry.registerComponent('DemoApp', () => DemoApp);
```
### Properties - Basic

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| topSpacing | 0 | `number` | Add or subtract additional spacing from keyboard height |

### Properties - Methods

| Prop  | Params  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| onToggle | `toggleState` | `function` | onToggle method is called when when keyboard toggles. Returns true or false |
