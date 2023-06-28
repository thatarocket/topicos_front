import { writable, derived } from "svelte/store";

export const username = writable(null);

export const socket = writable(null);

export const isConnected = derived(socket, ($socket) => $socket !== null);

export const receivedMessages = writable([]);
