<script>
	import { User } from "../utils/user";
	import { user } from "../stores/user";

	let username = "";
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center gap-5 bg-gradient-to-l from-gray-900 to-gray-950 text-white"
>
	<div
		class="flex flex-col items-center gap-6 rounded-lg border bg-slate-800 p-4"
	>
		<div class="font-semibold">🛸 SocketChat</div>

		<input
			class="rounded border bg-transparent p-2"
			bind:value={username}
			placeholder="Insira um nome de usuário..."
		/>

		<button
			class="rounded bg-slate-300 px-2 py-1 text-slate-950 hover:bg-slate-400"
			on:click={() => ($user = new User(username))}>💬 Entrar</button
		>
	</div>

	<div class="text-xs">
		Desenvolvido com ❤️ por Gabriela, Silas, Thais e Willian
	</div>
</div>
