import React, { useState } from "react"
import {
	View,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useDispatch } from "react-redux"
import { createTodo } from "../features/todos/todoSlice"

export function Form() {
	const [text, setText] = useState("")

	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault()

		dispatch(createTodo({ text, completed: false }))
		setText("")
	}

	return (
		<View style={styles.newTodo}>
			<View style={styles.newTodoInput}>
				<TextInput placeholder="What needs to be done?" />
			</View>
			<TouchableOpacity>
				<View style={styles.buttonContainer}>
					<Icon name="add" color="#fff" size={20}/>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	newTodo: {
		color: "#fff",
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	newTodoInput: {
		backgroundColor: "#fff",
		elevation: 40,
		flex: 1,
		height: 50,
		marginVertical: 20,
		marginRight: 30,
		borderRadius: 30,
		padding: 15,
	},
	buttonContainer: {
		height: 50,
		width: 50,
		backgroundColor: "#cdaaaf",
		borderRadius: 25, 
		elevation: 40,
		justifyContent: "center",
		alignItems: "center"
	},
})
