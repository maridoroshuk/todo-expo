import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	FlatList,
	StatusBar,
} from "react-native"
import { getTodo, reset } from "../features/todos/todoSlice"
import { TodoItem } from "./TodoItem"

const DATA = [
	{ _id: 1, text: "learn expo", complete: false },
	{ _id: 2, text: "learn expo", complete: true },
	{ _id: 3, text: "learn expo", complete: false },
]

export function TodoList() {
	return (
		<View>
			{DATA.length > 0 ? (
				<SafeAreaView style={styles.container}>
					<FlatList
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ padding: 20, paddingBottom: 10 }}
						data={DATA}
						renderItem={({ item }) => <TodoItem todo={item} />}
						keyExtractor={(item) => item._id}
					/>
				</SafeAreaView>
			) : (
				<Text style={styles.empty_todo}>You have not set any todo</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: StatusBar.currentHeight || 0,
	},
})
