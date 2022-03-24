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
import { TodoItem } from "./TodoItem"

// const DATA = [
// 	{ _id: 1, text: "learn expo", complete: false },
// 	{ _id: 2, text: "learn expo", complete: true },
// 	{ _id: 3, text: "learn expo", complete: false },
// ]

export function TodoList({ todoList }) {
	return (
		<View style={styles.wrapper}>
			{todoList.length > 0 ? (
				<SafeAreaView style={styles.container}>
					<FlatList
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
	wrapper: {
		flex: 1,
		width: "100%",
		marginTop: StatusBar.currentHeight || 0,
	},
})
