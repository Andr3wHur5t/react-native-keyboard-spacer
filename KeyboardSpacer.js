/**
 * Created by andrewhurst on 10/5/15.
 */
import React, { Component, PropTypes } from 'react';
import {
  Keyboard,
  LayoutAnimation,
  View,
  Platform,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default class KeyboardSpacer extends Component {
  static propTypes = {
    topSpacing: PropTypes.number,
    onToggle: PropTypes.func,
    style: View.propTypes.style,
    animationConfig: PropTypes.object,
  };

  static defaultProps = {
    topSpacing: 0,
    // From: https://medium.com/man-moon/writing-modern-react-native-ui-e317ff956f02
    animationConfig: {
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
    onToggle: () => null,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      keyboardSpace: 0,
      isKeyboardOpened: false
    };
    this._listeners = null;
    this.updateKeyboardSpace = this.updateKeyboardSpace.bind(this);
    this.resetKeyboardSpace = this.resetKeyboardSpace.bind(this);
  }

  componentDidMount() {
    const updateListener = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const resetListener = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
    this._listeners = [
      Keyboard.addListener(updateListener, this.updateKeyboardSpace),
      Keyboard.addListener(resetListener, this.resetKeyboardSpace)
    ];
  }

  componentWillUpdate(props, state) {
    if (state.isKeyboardOpened !== this.state.isKeyboardOpened) {
      LayoutAnimation.configureNext(props.animationConfig);
    }
  }

  componentWillUnmount() {
    this._listeners.forEach(listener => listener.remove());
  }

  updateKeyboardSpace(frames) {
    if (!frames.endCoordinates) {
      return;
    }
    const keyboardSpace = frames.endCoordinates.height + this.props.topSpacing;
    this.setState({
      keyboardSpace,
      isKeyboardOpened: true
    }, this.props.onToggle(true, keyboardSpace));
  }

  resetKeyboardSpace() {
    this.setState({
      keyboardSpace: 0,
      isKeyboardOpened: false
    }, this.props.onToggle(false, 0));
  }

  render() {
    return (
      <View style={[styles.container, { height: this.state.keyboardSpace }, this.props.style]} />);
  }
}
