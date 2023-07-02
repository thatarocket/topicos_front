import { io } from "socket.io-client";
import { updateHistory } from './history.js';

const socket = io("http://localhost:3000");

class Messenger {
	constructor(username, socket) {
		this.socket = socket;
		this.username = username;
	}

	text(content) {
		console.log(content);
		this.socket.emit("message", {
			usuario: this.username,
			tipo: "texto",
			data: new Date().toLocaleDateString("pt-BR"),
			mensagem: {
				texto: content
			}
		});
		content = "";
	}

	image(data) {
		console.log(data);
		var reader = new FileReader();
		let message = {}
		reader.onloadend = function(){
			message = {
				usuario: this.username,
				tipo: "imagem",
				data: new Date().toLocaleDateString("pt-BR"),
				mensagem: {
					imagem: reader.result,
					descricao: "descricao",
					tipoImagem: data.type,
					tamanho: data.size
				}
			}
			console.log(this.username);
			this.socket.emit("message", message);
		
		}.bind(this);
		
		reader.readAsDataURL(data);
	}

	video(data){
		console.log(data);

		// let message = {
		// 	usuario: this.username,
		// 	tipo: "video",
		// 	data: new Date().toLocaleDateString("pt-BR"),
		// 	mensagem: {
		// 		video: data,
		// 		descricao: "descricao",
		// 		tipoVideo: data.type,
		// 		tamanho: data.size
		// 	}
		// }
		// console.log(message);
		// this.socket.emit("message", message);
		var reader = new FileReader();
		let message = {}
		reader.onloadend = function(){
			message = {
				usuario: this.username,
				tipo: "video",
				data: new Date().toLocaleDateString("pt-BR"),
				mensagem: {
					video: reader.result,
					descricao: "descricao",
					tipoVideo: data.type,
					tamanho: data.size
				}
			}
			console.log(reader.result);
			
			this.socket.emit("message", message);
		}.bind(this);
		
		reader.readAsArrayBuffer(data);
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

		socket.on("history", (history) => {
			console.log(history);
			this.history = history;
			updateHistory(history);
		});

		socket.on("message", (message) => {
			
			this.history.push(message);
  		updateHistory([message]);
		});

		return socket;
	}

	getHistory() {
    	return this.history;
  	}

	send() {
		console.log(this.username);
		return new Messenger(this.username, this.socket);
	}
}
