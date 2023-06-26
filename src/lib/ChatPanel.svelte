<script>
	// Importe o cliente Socket.IO
  import { io } from 'socket.io-client';
	import { user } from "../auth";

	let username = "";

	user.subscribe((value) => {
		if (value) {
			username = value.username;
		}
	});
	console.log(JSON.parse(localStorage.getItem("user")));
  // Defina a URL do servidor Socket.IO
  const socket = io('http://localhost:2828');

	socket.on('connect', () => {
    console.log('Connected to server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });

	let mensagem = '';

	function enviarMensagem() {
		
    console.log('Mensagem enviada:', mensagem);
    // Lógica para enviar a mensagem para o servidor ou fazer qualquer outra ação com ela
    // Exemplo adicional: enviar mensagem para o Socket.IO
    socket.emit('chat message', { tipo: 'texto', mensagem: mensagem, data: '26/06/2023', usuario: localStorage.getItem('username')});
  }

	const msgs = [
		{
			username: "willpinha",
			content: "Eita essa é uma mensagem muito longa não é mesmo?",
			date: "10/10/2010",
		},
		{
			username: "thatarocket",
			content: "Eita",
			date: "11/10/2010",
		},
		{
			username: "silasreis",
			content: "Tendi nada gente",
			date: "12/10/2010",
		},
		{
			username: "gabicolombo",
			content:
				"Gente vocês viram essa nova atualização do Fortnite, muito bom. Vamo jogar Fortnite galera?",
			date: "13/10/2010",
		},
		{
			username: "test",
			content: "test",
			date: "13/10/2010",
		},
		{
			username: "test",
			content: "test",
			date: "13/10/2010",
		},
		{
			username: "test",
			content: "test",
			date: "13/10/2010",
		},
		{
			username: "test",
			content: "test",
			date: "13/10/2010",
		},
	];
</script>

<div class="flex flex-1 flex-col">
	<div
		class="flex items-center justify-between bg-gray-800 px-4 py-2 text-white"
	>
		<div class="text-lg">🛸 SocketChat</div>
		<div class="text-sm">
			Desenvolvido com <span class="text-xs">❤️</span> por Gabriela, Silas,
			Thais e Willian
		</div>
	</div>

	<div
		class="flex flex-1 flex-col gap-6 overflow-y-auto bg-gradient-to-l from-gray-900 to-gray-950 p-4"
	>
		{#each msgs as msg}
			<div class="flex gap-3 self-start">
				<img
					class="h-8 w-8 rounded-full"
					src="https://avatars.githubusercontent.com/{msg.username}"
					alt={msg.username}
				/>
				<div
					class="flex flex-col rounded-lg border border-gray-700 bg-gray-800 px-2 py-1"
				>
					<div class="text-sm text-green-500">
						@{msg.username}
					</div>
					<div class="text-white">{msg.content}</div>
					<div class="self-end text-sm text-gray-400">
						{msg.date}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="flex justify-between bg-gray-800 px-4 py-3">
		<input
			class="flex-1 rounded-lg rounded-r-none bg-gray-700 p-2 text-white outline-none"
			type="text"
			bind:value="{mensagem}"
			placeholder="Envie uma mensagem..."
		/>

		<button
			class="flex items-center gap-2 rounded-lg rounded-l-none bg-green-600 px-4 py-2 text-white hover:bg-green-700"
			on:click="{enviarMensagem}"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#fff"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path
					d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
				/></svg
			>

			<div class="">Enviar</div>
		</button>
	</div>
</div>
