/**
 * Created by andrewhurst on 10/5/15.
 */
var React = require('react-native');

var {
    DeviceEventEmitter,
    LayoutAnimation,
    View, 
    Platform
} = React;

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
            keyboardSpace: 0,
            isKeyboardOpened: false
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
            keyboardSpace: frames.endCoordinates.height + ('topSpacing' in this.props ? this.props.topSpacing : 0),
            isKeyboardOpened: true
        }, () => ('onToggle' in this.props ? this.props.onToggle(true) : null));
    }

    resetKeyboardSpace() {
        this.setState({
            keyboardSpace: 0,
            isKeyboardOpened: false
        }, () => ('onToggle' in this.props ? this.props.onToggle(true) : null));
    }

    componentDidMount() {
        if (Platform.OS == "android") {
            this._listeners = [
                DeviceEventEmitter.addListener('keyboardDidShow', this.updateKeyboardSpace),
                DeviceEventEmitter.addListener('keyboardDidHide', this.resetKeyboardSpace)
            ];            
        } else {
            this._listeners = [
                DeviceEventEmitter.addListener('keyboardWillShow', this.updateKeyboardSpace),
                DeviceEventEmitter.addListener('keyboardWillHide', this.resetKeyboardSpace)
            ];
        }
    }

    componentWillUnmount() {
        this._listeners.forEach(function(/** EmitterSubscription */listener) {
            listener.remove();
        });
    }

    render() {
        return (<View style={[{height: this.state.keyboardSpace, left: 0, right: 0, bottom: 0}, this.props.style]}/>);
    }
}

module.exports = KeyboardSpacer;
