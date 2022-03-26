import React, { useEffect, useState } from "react"
import {
	View,
	Button,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useDispatch } from "react-redux"
import { editTodo } from "../features/todos/todoSlice"

export function TodoItemText({
	inputVisible,
	todo,
	setInputVisible,
	onCompleteClick,
}) {
	const [textInput, setTextInput] = useState(todo.text)
	const dispatch = useDispatch()

	const submitEditTextHandler = (e) => {
		e.preventDefault()
		dispatch(editTodo({ id: todo._id, text: textInput }))
		setInputVisible(false)
	}

	console.log(inputVisible)
	return (
		<View style={{ flex: 1 }}>
			{inputVisible ? (
				<View>
					<TextInput onChangeText={setTextInput} value={textInput} />
					<TouchableOpacity style={[styles.actionIcon]} onPress={submitEditTextHandler}>
						<Icon name="done" size={20} color="#fff" />
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.todoText}>
					<TouchableOpacity style={{ flex: 1 }} onPress={onCompleteClick}>
						<Icon name="done" size={20} color="#fff" />
						<Text
							style={{
								borderRadius: 7,
								textDecorationLine: todo?.complete ? "line-through" : "none",
							}}
						>
							{todo?.text}
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	todoText: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
})
