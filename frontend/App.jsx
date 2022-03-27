import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Provider } from "react-redux"
import { Form } from "./components/Form"
import { TodoList } from "./components/TodoList"
import { store } from "./app/store"

export function App() {
	return (
		<Provider store={store}>
			<View style={styles.wrapper}>
				<View style={styles.header}>
					<Text style={styles.textHeader}>Todo App</Text>
					{/* <Icon name="delete" size={25} color="red"/> */}
				</View>
				<Form />
				<TodoList />
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		margin: 20,
		backgroundColor: "#fff"
	},
	header: {
		padding: 30,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	textHeader: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#cdaaaf"
	}
})

export default App
