import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Pressable, Modal} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const AddTodo = (props) => {
    const [newTodo, setNewTodo] = useState('')

    const handleTodoSubmit = () => {
        props.handleAddTodo(newTodo)
        setNewTodo('')
    }

    const handleCancel = () => {
        props.setShouldModalBool(false)
        setNewTodo('')
    }

    return (
    <Modal visible={props.visible}>
        <View style={styles.model}>
            <View style={styles.addTodoSection}>
                <TextInput 
                    placeholder='Enter your goals'
                    style={styles.inputBox}
                    value={newTodo}
                    onChangeText={setNewTodo}
                />
                {/* <Button title="Add Todo" /> */}
            </View>
            <View style={styles.actionBtns}>
                <Pressable onPress={handleCancel} style={{...styles.actionBtn, backgroundColor: 'red'}}>
                    <Text style={styles.text}>Close Modal</Text>
                </Pressable> 
                <Pressable onPress={handleTodoSubmit } style={{...styles.actionBtn,backgroundColor: 'blue'}}>
                    <Text style={styles.text}>Add Todo</Text>
                </Pressable> 
            </View>
            
        </View>
     
    </Modal>
    )
}

export default AddTodo

const styles = StyleSheet.create({
  addTodoSection: {
    flexDirection: 'row',
    // paddingTop: 200
  },
  inputBox: {
    flex: 0.8,
    borderWidth: 2,
    borderColor: 'black',
    padding: 15
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  model: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: 'red'
  },
  actionBtns: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10
  },
  actionBtn: {
      padding: 10
  }
})
