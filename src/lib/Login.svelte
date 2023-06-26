<script>
	import { login } from "../auth";

	let username = "";
	let password = "";

	async function handleLogin() {
		const message = await login(username, password);

		if (message) {
			alert(message);
		}
	}
</script>

<div class="flex flex-col gap-6 p-6">
	<input
		bind:value={username}
		type="text"
		placeholder="Insira seu usuario..."
	/>

	<input
		bind:value={password}
		type="password"
		placeholder="Insira sua senha..."
	/>

	<button on:click={handleLogin} class="">Entrar</button>
</div>
