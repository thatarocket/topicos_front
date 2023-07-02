import { io } from "socket.io-client";

class Messenger {
	constructor(socket) {
		this.socket = socket;
	}

	text(content) {
		console.log(content);
		console.log(this.socket);
		this.socket.emit("message", {
			type: "text",
			data: { content },
		});
	}

	image(binary, caption) {
		this.socket.emit("message", {
			type: "image",
			data: { binary, caption },
		});
	}
}

export class User {
	constructor(username) {
		this.username = username;
		this.socket = this.createSocket();
		this.history = [];
	}

	createSocket() {
		const socket = io("http://localhost:3000");

		socket.on("connect", () => {
			console.log("Connected to server");
		});

		socket.on("disconnect", () => {
			console.log("Disconnected from server");
		});

		socket.once("history", (history) => {
			this.history = history;
		});

		socket.on("message", (message) => {
			console.log("OPAAAAAAAA");
			this.history.push(message);
		});

		return socket;
	}

	send() {
		return new Messenger(this.socket);
	}
}
