import React from "react"
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Icon from "react-native-vector-icons/MaterialIcons"
import { Form } from "./components/Form"
import { TodoList } from "./components/TodoList"

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaView style={styles.wrapper}>
				<View style={styles.header}>
					<Text style={styles.textHeader}>Todo App</Text>
					{/* <Icon name="delete" size={25} color="red"/> */}
				</View>
				<Form />
				<TodoList />
			</SafeAreaView>
		</Provider>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 2,
		margin: 10,
		backgroundColor: "#fff"
	},
	header: {
		padding: 20,
		flexDirection: "row", 
		alignItems: "center",
		justifyContent: "center"
	},
	textHeader: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#cdaaaf"
	},
	
})
