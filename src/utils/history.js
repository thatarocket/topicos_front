import { writable } from 'svelte/store';

export const history = writable([]);

export function updateHistory(newHistory) {
  history.update(oldMessages => [...oldMessages, ...newHistory]);
}