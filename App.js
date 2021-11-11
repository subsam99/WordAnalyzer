/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {styles} from './component/Styles';
import React, { Component } from 'react';
import type {Node} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { tsImportEqualsDeclaration } from '@babel/types';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      word: '',   // Empty string
      cons: 0,    // Consonant count
      vowel: 0,   // Vowel count
      chars: 0,   // Word character count
      output: 0   // Output view toggle
    }
  }

  analyze() {
    if(this.state.word == '') {
      return Alert.alert('You must enter a word!');
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];               // Vowel array
    let charArr = this.state.word.toLowerCase().split('');  // Turns word to array of lowercase characters

    let consCnt = 0;
    let vowelCnt = 0;

    for(let index = 0; index < charArr.length; index++) {
      vowels.includes(charArr[index]) ? vowelCnt++ : consCnt++; // Checks if the character is a vowel or not
    }

    this.setState({
      cons: consCnt,
      vowel: vowelCnt,
      chars: charArr.length,
      output: 1
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Word Analyzer</Text>

        <View style={styles.box}>
          <View style={styles.row}>
            <Text style={styles.column}>Word</Text>
            <TextInput onChangeText={(word) => this.setState({word, output: 0})}              // Whenever a change of input is detected, the output is also hidden
                       placeholder='Enter word...' style={[styles.input, styles.column]}/>
          </View>

          <View style={styles.row}>
            <Text style={styles.column}/>
            <TouchableHighlight onPress={() => this.analyze()} style={[styles.column, styles.button]}>
              <Text style={styles.buttonText}>Analyze</Text>
            </TouchableHighlight>
          </View>
        </View>
        
        <View style={this.state.output ? [styles.box, styles.show] : styles.hide} /* This view is shown when a word is analyzed, and hidden when a change of input is detected */>
          <View style={styles.row}>
            <Text style={styles.column}>Word</Text>
            <Text style={styles.column}>: {this.state.word}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.column}>No of Consonants</Text>
            <Text style={styles.column}>: {this.state.cons}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.column}>No of Vowels</Text>
            <Text style={styles.column}>: {this.state.vowel}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.column}>No of Characters</Text>
            <Text style={styles.column}>: {this.state.chars}</Text>
          </View>
        </View>
      </View>
    )
  }
};