import { MessageBuilder } from "./message";
import { socket, receivedMessages } from "../stores/chat";

export function connect(name) {
	socket.set(createSocket(name));
}

function createSocket(name) {
	const socket = new WebSocket(`ws://localhost:8080/${name}`);

	socket.onopen = () => {
		console.log("Connected to server");
	};

	socket.onclose = () => {
		console.log("Disconnected from server");
	};

	socket.onmessage = (event) => {
		const message = JSON.parse(event.data);

		receivedMessages.update((messages) => [...messages, message]);
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
	if (!MessageBuilder.isValid(message)) {
		console.error("Invalid message:", message);
		return;
	}

	socket.update((socket) => {
		socket.send(JSON.stringify(message));
		return socket;
	});
}

export function getConnectedUsers() {}

export function getHistory() {}
