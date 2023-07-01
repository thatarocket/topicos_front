<script>
	import { sendMessage, getHistory } from "../utils/chat";
	import { MessageBuilder } from "../utils/message";
	import { receivedMessages } from '../stores/chat';

	let messages = [];

	let content = "";

	function sendText() {
		sendMessage(MessageBuilder.buildText(content, localStorage.getItem("username")));
		content = "";
	}

	function toBase64(binaryData) {
		return binaryData.toString("base64");
	}
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
		class="flex flex-1 text-white flex-col gap-6 overflow-y-auto bg-gradient-to-l from-gray-900 to-gray-950 p-4"
	>
		{#each $receivedMessages as msg}
			{msg.usuario} - {msg.data}
			{#if msg.tipo === "texto"}
				<div>
					{msg.mensagem.texto}
				</div>
			{:else if msg.tipo === "imagem"}
				<div>
					{msg.mensagem.descricao}
					<img src="{toBase64(msg.mensagem.imagem)}" alt="" />
				</div>
			{:else if msg.tipo === "video"}
				<div>
					{msg.mensagem.descricao}
					<video src="data:video/mp4;base64,{toBase64(msg.mensagem.video)}" width="240" height="160" controls>
						<track kind="captions" />
					</video>
				</div>
			{:else }
				<div>
					{msg.mensagem.descricao}
				</div>
			{/if}
		{/each}
	</div>

	<div class="flex justify-between bg-gray-800 px-4 py-3">
		<input
			bind:value={content}
			class="flex-1 rounded-lg rounded-r-none bg-gray-700 p-2 text-white outline-none"
			type="text"
			placeholder="Envie uma mensagem..."
		/>

		<button
			class="flex items-center gap-2 rounded-lg rounded-l-none bg-green-600 px-4 py-2 text-white hover:bg-green-700"
			on:click={sendText}
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

			<div>Enviar</div>
		</button>
	</div>
</div>
