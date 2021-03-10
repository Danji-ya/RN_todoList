import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({id, text, checked, delTodo, checkTodo }) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => checkTodo(id)}>
            {checked ? (
              <View style={styles.completeCircle}>
                <Icon name="circledowno" size={30} color="#3143e8" />
              </View>
            ) : (
              <View style={styles.circle}></View>
            )}
              
          </TouchableOpacity>

          <Text style={[styles.text, checked ? styles.strikeText : styles.unstrikeText]}>{text}</Text>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => delTodo(id)}>
              <Icon name="delete" size={30} color="#e33057" />
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 1,
        fontWeight: '500',
        fontSize: 20,
        marginVertical: 20,
    },
    circle: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderColor: 'blue',
      borderWidth: 2,
      marginRight: 20,
      marginLeft: 20,
    },
    completeCircle: {
        marginRight: 20,
        marginLeft: 20,
    },
    strikeText: {
      color: '#bbb',
      textDecorationLine: 'line-through',
    },
    unstrikeText: {
      color: '#29323c',
    },
    buttonContainer: {
      marginVertical: 10,
      marginHorizontal: 10,
    },
});

export default TodoListItem;