[![NPM](https://nodei.co/npm/react-native-keyboard-spacer.png?downloads=true)](https://nodei.co/npm/react-native-keyboard-spacer/)

# react-native-keyboard-spacer

Plug and play iOS react-native keyboard spacer view.

![image](http://giant.gfycat.com/ThriftyCelebratedChital.gif)
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
  Text,
  View,
  TextInput
} = React;

var DemoApp = React.createClass({
  render: function() {
    return (
      <View style={[{backgroundColor: 'green', flex: 1}]}>
        <TextInput style={{backgroundColor: 'yellow', flex: 1}}/>
        <View style={{backgroundColor: 'red', left: 0, right: 0, height: 5}}/>
        <KeyboardSpacer/>
      </View>
    );
  }
});

AppRegistry.registerComponent('DemoApp', () => DemoApp);
```

