import React, {Component, PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

/**
 * Level Button
 * 21.06.17 by 예리
 */
export default class LevelButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={
          this.props.click[this.props.id]
            ? styles.levelButtonSelected
            : styles.levelButton
        }
        onPress={() => this.props.callback(this.props.id)}>
        <Text style={{fontSize: 17}}>{this.props.level}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  levelButton: {
    borderColor: '#AFDCBD',
    borderWidth: 2,
    width: '25%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingBottom: '2%',
  },
  levelButtonSelected: {
    backgroundColor: '#AFDCBD',
    borderColor: '#AFDCBD',
    borderWidth: 2,
    width: '25%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingBottom: '2%',
  },
});
