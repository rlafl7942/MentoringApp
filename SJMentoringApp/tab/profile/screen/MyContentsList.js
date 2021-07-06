import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';

//navigation
import {useNavigation} from '@react-navigation/native';

//axios
import axios from 'axios';

const MyContentsList = (props) => {
  const [contentList, setContentList] = useState([]);
  const navigation = useNavigation();
  const [student_id, setStudent_id] = useState('');
  const [myContents, setMyContents] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        `${axios.defaults.baseURL}/profile/${props.route.params.student_id}/posts`,
        {
          headers: {
            Authorization: axios.defaults.headers.common['Authorization'],
          },
        },
      )
      .then((response) => {
        setMyContents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={myContents}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Contents', {
                  user_id: student_id,
                  user_info: item,
                });
              }}>
              <View style={styles.content_container}>
                <Text style={styles.bold_font}>
                  <Text style={{color: '#498C5A'}}> {'📄 '} </Text>
                  {item.subject} {item.role == 1 ? '멘토' : '멘티'}
                </Text>
                <Text>
                  {item.start_date.replace('T15:00:00.000Z', '')} ~{' '}
                  {item.end_date.replace('T15:00:00.000Z', '')}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content_container: {
    padding: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#AFDCBD',
    height: 70,
    justifyContent: 'center',
  },
  bold_font: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
});

export default MyContentsList;
