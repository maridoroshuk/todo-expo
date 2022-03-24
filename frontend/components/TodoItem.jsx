import React, { useState } from "react"
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

export function TodoItem({ todo }) {
	console.log(todo.text)
	return (
		<View style={styles.todoItem}>
			<View style={{ flex: 1 }}>
				<Text
					style={{
						marginVertical: 8,
						flexDirection: "row",
						borderRadius: 7,
						textDecorationLine: todo?.complete ? "line-through" : "none",
					}}
				>
					{todo?.text}
				</Text>
			</View>
			{!todo?.complete && (
				<TouchableOpacity style={[styles.actionIcon]}>
					<Icon name="done" size={20} color="#fff" />
				</TouchableOpacity>
			)}
			<TouchableOpacity
				style={[styles.actionIcon, { backgroundColor: "#f9c2ff" }]}
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
	actionIcon: {
		height: 25,
		width: 25,
		backgroundColor: "#cdaaaf",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 5,
		borderRadius: 5,
	},
	todoItem: {
		padding: 20,
		backgroundColor: "#cdaaaf",
		flexDirection: "row",
		elevation: 12,
		borderRadius: 7,
		marginVertical: 5,
	},
})
