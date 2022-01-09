
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const mochTodos = [
    'sdfsdfsdfsdf',
    'dfghfdhh',
    'sdfsdfscvbnvcbndfsdf',
    'cvbnvcn',
  ]

  const handleTodoChange = (givenTodoText) => {
    setNewTodo(givenTodoText)
  }

  const handleAddTodo = () => {
    setTodoList(latestTodoList => [...latestTodoList, newTodo])
    setNewTodo('')
  }
  
  useEffect(()=> {
    console.log({todoList});
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.addTodoSection}>
        <TextInput 
          placeholder='Enter your goals'
          style={styles.inputBox}
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Button title="Add Todo" onPress={handleAddTodo}/>
      </View>


      <View >
        {todoList.map( todoName => (
          <View key={todoName} style={styles.todoItem}>
            <Text>{todoName}</Text>
          </View>
        ) 
        )}
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  inputBox: {
    flex: 0.8,
    borderWidth: 2,
    borderColor: 'black',
    padding: 5
  },
  addTodoSection: {
    flexDirection: 'row'
  },
  todoItem: {
    marginVertical: 10,
    backgroundColor: '#a3c2c2',
    minWidth: '80%',
    flexDirection: 'row',
    padding: 10 ,
    // flex: 1
  }
});
