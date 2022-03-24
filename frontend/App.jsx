import React, { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Provider, useDispatch, useSelector } from "react-redux"
import { store } from "./app/store"
import { Form } from "./components/Form"
import { TodoList } from "./components/TodoList"
import { getTodo, reset } from "./features/todos/todoSlice"

function App() {
	const dispatch = useDispatch()

	const { todoList, isLoading, isError, message } = useSelector(
		(state) => state.todos
	)

	useEffect(() => {
		dispatch(getTodo())
		if (isError) {
			console.log(message)
		}
		return () => {
			dispatch(reset())
		}
	}, [isError, message, dispatch])

	return (
		<Provider store={store}>
			<View style={styles.wrapper}>
				<View style={styles.header}>
					<Text style={styles.textHeader}>Todo App</Text>
					{/* <Icon name="delete" size={25} color="red"/> */}
				</View>
				<Form />
				<TodoList todoList={todoList} />
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 2,
		margin: 5,
		backgroundColor: "#fff",
	},
	header: {
		padding: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	textHeader: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#cdaaaf",
	},
})

export default App
