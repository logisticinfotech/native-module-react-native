import React, { Component } from 'react';

import ReactNative, {
  Platform,
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
  TouchableOpacity,
  UIManager,
  TextInput,
  SafeAreaView,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      nativeText: 'Text',
      textData: 'Text',
    };
  }

  setRef = element => {
    this.mySwiftComponentInstance = element;
  };

  onChangeText = text => {
    this.setState({ inputText: text });
  };

  onSetText = event => {
    this.setState({ textData: event.nativeEvent.nativeObject });
  };

  onButtonClick = () => {
    const { inputText } = this.state;
    this.setState({
      nativeText: inputText,
    });
    setTimeout(() => {
      if (Platform.OS === 'ios') {
        UIManager.dispatchViewManagerCommand(
          ReactNative.findNodeHandle(this.mySwiftComponentInstance),
          UIManager.SwiftComponent.Commands.updateValueViaManager,
          []
        );
      }
    }, 300);
  };

  render() {
    const { textData, nativeText } = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.headerTextStyle}>React Native Component</Text>
        <View style={styles.container}>
          <TextInput style={styles.textInputStyle} onChangeText={this.onChangeText} />
          <Text style={styles.instructions}>{textData}</Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonClick}>
            <Text style={styles.textStyle}>Click Here</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTextStyle}>Native {Platform.OS} Component</Text>
        <NativeComponent
          style={styles.nativeCompView}
          nativeText={nativeText}
          onChange={this.onSetText}
          ref={this.setRef}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#558B2F',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingStart: 15,
    paddingEnd: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    padding: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    color: 'black',
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  containerTextInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  nativeCompView: {
    flex: 1,
    padding: 10,
    height: 50,
  },
  headerTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

const NativeComponent = requireNativeComponent('SwiftComponent');
