import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';

/**
 * Login Screen by 예리
 * 21.06.09
 */
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pwd: '',
    };
  }
  signin(id, pwd) {
    /**
     * signin with student_id
     * 21.06.16 by 예리
     */
    axios
      .post(`http://34.64.111.90:8080/api/v1/signin`, {
        student_id: id,
        password: pwd,
      })
      .then((response) => {
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.log('wrong!');
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerView}>
          <View
            style={{
              flexDirection: 'column',
              display: 'flex',
              alignItems: 'center',
            }}>
            <Text style={styles.title}>세 멘 토</Text>
            <Text
              style={{
                fontSize: 17,
                color: '#AFDCBD',
                fontWeight: 'bold',
              }}>
              Sejong University Mentoring Service
            </Text>
          </View>
          <View style={styles.login}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.textInput}
                placeholder={'학번을 입력하세요.'}
                onChangeText={(num) => {
                  this.setState({id: num});
                }}
              />
              <TextInput
                style={styles.textInput}
                placeholder={'비밀번호를 입력하세요.'}
                onChangeText={(password) => {
                  this.setState({pwd: password});
                }}
              />
            </View>
            <Button
              title="로그인"
              color="#AFDCBD"
              onPress={() => {
                //this.signin(this.state.id, this.state.pwd);
                this.props.navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerView: {
    width: '80%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: '7%',
    marginTop: '8%',
    color: '#AFDCBD',
  },
  login: {
    width: '100%',
    height: '60%',
    borderRadius: 50,
    marginTop: '20%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputView: {
    width: '85%',
    height: '50%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  textInput: {
    paddingLeft: '3%',
    backgroundColor: 'white',
    borderColor: '#AFDCBD',
    borderBottomWidth: 1,
  },
});
