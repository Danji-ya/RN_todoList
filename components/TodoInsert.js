import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Add an item!"/>
            <TouchableOpacity style={styles.button}>
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