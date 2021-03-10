
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([]);


  const addTodo = todo => {
    if( todo.length > 0 ){
      setTodos([...todos, {id: Math.random(), text: todo, checked: false}]);
    }
  };

  const delTodo = id => {
    setTodos(todos.filter( todo => todo.id !== id ));
  }

  const checkTodo = id => {
    setTodos( todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}> My todoList</Text>
      <View style={styles.card}>
        <TodoInsert addTodo={addTodo} />
        <TodoList todos={todos} checkTodo={checkTodo} delTodo={delTodo} />
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B5CCD4',
    // alignItems: 'center',
    // justifyContent: 'center', 화면 정중앙 vertical이 주축
  },
  appTitle: {
    color: '#597484',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
    marginLeft: 10,
    marginRight: 10,
  },
});

export default App;
