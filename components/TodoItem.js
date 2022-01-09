import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TodoItem = (props) => {
    return (
        <View style={styles.todoItem} onTouchStart={props.onDelete}>
            <Text >{props.todoName}</Text>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
  todoItem: {
    marginVertical: 10,
    backgroundColor: '#a3c2c2',
    minWidth: '80%',
    flexDirection: 'row',
    padding: 10 ,
    // flex: 1
  },
})
