import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = ({addTodo}) => {

    const [todoItem, setTodoItem] =useState('');



    const setTodoHandler = e => {
        setTodoItem(e.nativeEvent.text);
    };

    const addTodoHandler = e => {

        addTodo(todoItem);
        setTodoItem('');

    };


    return (
        <View style={styles.inputContainer}>
            <TextInput value={todoItem} style={styles.input} placeholder="Add an item!" onChange={setTodoHandler}/>
            <TouchableOpacity style={styles.button} onPress={addTodoHandler}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent:  'space-between',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#435256',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        

        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOpacity: 1,
                shadowOffset: {height: 2, width: 2},
                shadowRadius: 2,
            },

            android: {
                elevation: 0,
                marginHorizontal: 30,
            },
        })
    },

    text: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white'
    }

});


export default TodoInsert;