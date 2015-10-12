/**
 * Created by andrewhurst on 10/5/15.
 */
var React = require('react-native'),
    KeyboardEvents = require('react-native-keyboardevents'),
    KeyboardEventEmitter = KeyboardEvents.Emitter;
var { View, LayoutAnimation } = React;

// From: https://medium.com/man-moon/writing-modern-react-native-ui-e317ff956f02
const animations = {
    layout: {
        spring: {
            duration: 500,
            create: {
                duration: 300,
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 200
            }
        },
        easeInEaseOut: {
            duration: 300,
            create: {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.scaleXY
            },
            update: {
                delay: 100,
                type: LayoutAnimation.Types.easeInEaseOut
            }
        }
    }
};

class KeyboardSpacer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            keyboardSpace: 0
        };

        this.updateKeyboardSpace = this.updateKeyboardSpace.bind(this);
        this.resetKeyboardSpace = this.resetKeyboardSpace.bind(this);
    }

    componentWillUpdate(props, state) {
        if (state.isKeyboardOpened !== this.state.isKeyboardOpened)
            LayoutAnimation.configureNext(animations.layout.spring);
    }

    updateKeyboardSpace(frames) {
        if (!frames.endCoordinates)
            return;
        this.setState({
            keyboardSpace: frames.endCoordinates.height,
            isKeyboardOpened: true
        });
    }

    resetKeyboardSpace() {
        this.setState({
            keyboardSpace: 0,
            isKeyboardOpened: false
        });
    }

    componentDidMount() {
        KeyboardEventEmitter.on(KeyboardEvents.KeyboardDidShowEvent, this.updateKeyboardSpace);
        KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillHideEvent, this.resetKeyboardSpace);
    }

    componentWillUnmount() {
        KeyboardEventEmitter.off(KeyboardEvents.KeyboardDidShowEvent, this.updateKeyboardSpace);
        KeyboardEventEmitter.off(KeyboardEvents.KeyboardWillHideEvent, this.resetKeyboardSpace);
    }

    render() {
        return (<View style={[{height: this.state.keyboardSpace, left: 0, right: 0, bottom: 0, backgroundColor: '#FFFFFF'}]}/>);
    }
}

module.exports = KeyboardSpacer;
