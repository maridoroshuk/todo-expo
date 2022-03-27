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

	const submitEditTextHandler = () => {
		dispatch(editTodo({ id: todo._id, text: textInput }))
		setInputVisible(false)
	}

	return (
		<View style={{ flex: 1 }}>
			{inputVisible ? (
				<View>
					<TextInput
						onChangeText={setTextInput}
						autoFocus={true}
						value={textInput}
						onSubmitEditing={submitEditTextHandler}
					/>
				</View>
			) : (
				<View style={styles.todoText}>
					<TouchableOpacity style={styles.todoText} onPress={onCompleteClick}>
						<Icon name="done" size={20} color="#fff" />
						<Text
							style={{
								marginLeft: 15,
								borderRadius: 7,
								textDecorationLine: todo?.complete ? "line-through" : "none",
								opacity: todo?.complete ? 0.3 : 1
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
		textAlign: "center",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
})
