import { writable } from "svelte/store";
import api from "./api";

// Current logged in user, if any
export const user = writable(null);

export function isAuthenticated() {
	return localStorage.getItem("tokens") !== null;
}

export async function login(username, password) {
	try {
		const response = await api.post("/login", {
			usuario: username,
			senha: password,
		});

		const { nome, usuario, tokens } = response.data.user;
		let user_aux = {
			nome: nome,
			usuario: usuario,
			token: tokens[0].token
		}
		console.log(user_aux);
		user.set({ name: nome, username: usuario });
		localStorage.setItem("token", tokens[0].token);
		localStorage.setItem("user", JSON.stringify(user_aux));
		localStorage.setItem("username", usuario);
	} catch (error) {
		const { message } = error.response.data;

		return message;
	}
}

export async function register(name, username, password) {
	try {
		const response = await api.post("/cadastro", {
			nome: name,
			usuario: username,
			senha: password,
		});
		return true;
	} catch (error) {
		return false;
	}
}
