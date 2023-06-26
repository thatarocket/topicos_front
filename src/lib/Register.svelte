<script>
	import { register } from "../auth";

	let name = "";
	let username = "";
	let password = "";

	async function handleRegister() {
		if (await register(name, username, password)) {
			alert("Registrado com sucesso!");
		} else {
			alert("Erro ao registrar!");
		}
	}
</script>

<div class="flex flex-col gap-6 p-6">
	<input bind:value={name} type="text" placeholder="Insira um nome..." />

	<input
		bind:value={username}
		type="text"
		placeholder="Insira um usuario..."
	/>

	<input
		bind:value={password}
		type="password"
		placeholder="Insira uma senha..."
	/>

	<button on:click={handleRegister} class="">Registrar</button>
</div>
