import { get } from "svelte/store";
import { MessageBuilder } from "./message";
import { socket, receivedMessages } from "../stores/chat";

export function connect(name) {
	socket.set(createSocket(name));
}

function createSocket(name) {
	const socket = new WebSocket(`ws://localhost:2829/${name}`);

	socket.onopen = () => {
		console.log("Connected to server");
	};

	socket.onclose = () => {
		console.log("Disconnected from server");
	};

	socket.onmessage = (event) => {
		console.log(event.data)
		const messages = JSON.parse(event.data);
		console.log(messages)
		receivedMessages.update((oldMessages) => [...oldMessages, ...messages]);
	};


	return socket;
}

export function disconnect() {
	socket.update((socket) => {
		socket.close();
		return null;
	});
}

export function sendMessage(message) {
	get(socket).send(JSON.stringify(message));
}

export function getConnectedUsers() {}

export function getHistory() {}
