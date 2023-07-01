import { get } from "svelte/store";
import { MessageBuilder } from "./message";
import { username, socket, receivedMessages } from "../stores/chat";

export function connect(name) {
	socket.set(createSocket(name));
	username.set(name);
}

function createSocket(name) {
	const socket = new WebSocket(`ws://10.0.0.105:2829/${name}`);

	socket.onopen = () => {
		console.log("Connected to server");
	};

	socket.onclose = () => {
		console.log("Disconnected from server");
		receivedMessages.set([]);
	};

	socket.onmessage = (event) => {
		const messages = JSON.parse(event.data);
		receivedMessages.update((oldMessages) => [...oldMessages, ...messages]);
	};

	return socket;
}

export function disconnect() {
	socket.update((socket) => {
		socket.close();
		return null;
	});
	username.set(null);
}

export function sendMessage(message) {
	get(socket).send(JSON.stringify(message));
}

export function getConnectedUsers() {}

export function getHistory() {}
