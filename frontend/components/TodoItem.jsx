import React, { useState } from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../features/todos/todoSlice"
import { TodoItemText } from "./TodoItemText"

export function TodoItem({ todo }) {
	const [inputVisible, setInputVisible] = useState(false)

	const dispatch = useDispatch()

	const completeHandler = () => {
		dispatch(toggleTodo({ id: todo._id, complete: !todo.complete }))
	}

	const deleteHandler = () => {
		dispatch(deleteTodo(todo._id))
	}

	return (
		<View style={styles.todoItem}>
			<TodoItemText
				onCompleteClick={completeHandler}
				inputVisible={inputVisible}
				todo={todo}
				setInputVisible={setInputVisible}
			/>
			{!todo?.complete && (
				<TouchableOpacity
					style={[styles.actionIcon]}
					onPress={() => setInputVisible(true)}
				>
					<Icon name="edit" size={20} color="#fff" />
				</TouchableOpacity>
			)}
			<TouchableOpacity
				style={[styles.actionIcon, { backgroundColor: "#cdaaaf" }]}
				onPress={deleteHandler}
			>
				<Icon name="delete" size={20} color="#fff" />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	itemText: {
		fontSize: 15,
		color: "#eee",
	},
	todoItem: {
		padding: 20,
		backgroundColor: "#cdaaaf",
		flexDirection: "row",
		elevation: 12,
		borderRadius: 7,
		marginVertical: 5,
	},
	actionIcon: {
		height: 25,
		width: 25,
		backgroundColor: "#cdaaaf",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 5,
		borderRadius: 5,
	},
})
