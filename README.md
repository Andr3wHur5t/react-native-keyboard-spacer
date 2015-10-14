[![NPM](https://nodei.co/npm/react-native-keyboard-spacer.png?downloads=true)](https://nodei.co/npm/react-native-keyboard-spacer/)

# react-native-keyboard-spacer

Plug and play iOS react-native keyboard spacer view.

![image](http://giant.gfycat.com/ThriftyCelebratedChital.gif)
## Quick Start

Install View: `npm install --save react-native-keyboard-spacer`

Follow Setup instructions for [react-native-keyboardevents](https://github.com/johanneslumpe/react-native-keyboardevents)

## Example Usage

The view will automatically perform a layout animation when the keyboard appears or disappears.

```
var React = require('React');
var { TextEntry } = React;
var KeyboardSpacer = require('react-native-keyboard-spacer');

class App extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<TextEntry style={{flex: 1}}/>
				<View style={{
					backgroundColor: 'red',
					height: 5,
					left: 0, 
					right: 0,
					bottom: 0}}/>
				<KeyboardSpacer/>
			</View>
		);
	}
}

React.AppRegistry.registerComponent('DemoApp',  () => App);
```

