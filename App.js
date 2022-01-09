
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Pressable, Modal} from 'react-native';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [todoList, setTodoList] = useState([])
  const [shouldModalBool, setShouldModalBool] = useState(false)

  const handleAddTodo = (givenTodo) => {
    setTodoList(latestTodoList => [...latestTodoList, givenTodo])
    // setNewTodo('')
    setShouldModalBool(false)
  }

  useEffect(()=> {
    console.log({todoList});
  }, [])

  return (
    <View style={styles.container}>
      <AddTodo 
        visible={shouldModalBool}
        handleAddTodo={handleAddTodo}
        setShouldModalBool={setShouldModalBool}
      />
      <Pressable style={styles.button} onPress={()=>setShouldModalBool(true)}>
        <Text style={styles.text}>Add New Todo</Text>
      </Pressable>

      <View >
        <FlatList 
          data={todoList}
          renderItem={(item) => (
            <TodoItem 
              todoName={item.item}
            />
          )} 
        />
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'black',
  },
});
