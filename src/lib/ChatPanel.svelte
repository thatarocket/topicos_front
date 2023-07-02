<script>
	import { user } from "../stores/user";
	import { history } from "../utils/history";
	import { IconUpload } from "@tabler/icons-svelte";

	let content = "";

	function toBase64(binaryData) {
		return binaryData.toString("base64");
	}

	let files;

	function uploadFile() {
		const file = files[0];
		console.log(file);

		switch (file.type) {
			case "image/png":
				$user.send().image(file);
				break;
			case "image/jpg":
				$user.send().image(file);
				break;
			case "video/mp4":
				$user.send().video(file);
				break;
			default:
				console.log("Opa a gente não suporta esse arquivo");
		}
	}

	// function uploadFile2(inputElement) {
	// 	var file = inputElement.files[0];
	// 	var reader = new FileReader();
	// 	reader.onloadend = function () {
	// 		console.log(reader.result);

	// 	};
	// 	let data = {
	// 			usuario: "Silas",
	// 			data: new Date().toLocaleDateString("pt-BR"),
	// 			tipo: "imagem",
	// 			mensagem: {
	// 				imagem: reader.result,
	// 				descricao: "descricao chumbada",
	// 				tipoImagem: inputElement.files[0].mimetype,
	// 				tamanho: inputElement.files[0].size,
	// 			},
	// 		};
	// 	reader.readAsDataURL(file);
	// 	$user.send().image(data)
	// }
</script>

<style>




</style>

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
		class="flex flex-1 flex-col gap-8 overflow-y-auto bg-gradient-to-l from-gray-900 to-gray-950 p-4 text-white"
	>
		{#each $history as msg}
			<div class="flex flex-col items-start gap-2">
				<div class="text-sm text-blue-400">@{msg.usuario}</div>
				{#if msg.tipo === "texto"}
					<div class="rounded-lg bg-slate-900 px-4 py-2">
						{msg.mensagem.texto}
					</div>
				{:else if msg.tipo === "imagem"}
					<div>
						{msg.mensagem.descricao}
						<img src={toBase64(msg.mensagem.imagem)} alt="" />
					</div>
				{:else if msg.tipo === "video"}
					<div>
						{msg.mensagem.descricao}
						<video
							src="data:video/mp4;base64,{toBase64(
								msg.mensagem.video
							)}"
							width="240"
							height="160"
							controls
						>
							<track kind="captions" />
						</video>
					</div>
				{:else if msg.tipo === "enquete"}
					<div class="flex flex-col gap-3">
						<div>{msg.mensagem.descricao}</div>

						<div class="flex flex-col gap-2">
						{#each msg.mensagem.opcoes as option}
							<div class="rounded border p-2 flex justify-between bg-slate-800">

								<div class="flex items-center gap-2">
									<input type="checkbox" class="bg-slate-600" />
									<span>{option.opcao}</span>
								</div>
								
								<span class="text-sm text-slate-300">Votos: {option.votos}</span>
							</div>
						{/each}
						</div>
					</div>
				{/if}
				<div class="text-sm text-slate-300">{msg.data}</div>
			</div>
		{/each}
	</div>

	<div class="flex gap-4 bg-gray-800 px-4 py-3">
		<div class="flex flex-1">
			<input
				bind:value={content}
				class="rounded-lg flex-1 rounded-r-none bg-gray-700 p-2 text-white outline-none"
				type="text"
				placeholder="Envie uma mensagem..."
			/>

			<button
				class="flex items-center gap-2 rounded-lg rounded-l-none bg-green-600 px-4 py-2 text-white hover:bg-green-700"
				on:click={() => {
					$user.send().text(content);
					content = "";
				}}
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

		<label for="fileUpload" class="hover:bg-green-600 hover:cursor-pointer text-white rounded-full bg-green-500 flex justify-center items-center p-4">
			<IconUpload />
		</label>
		<input id="fileUpload" type="file" class="hidden" bind:files on:change={uploadFile} />
	</div>
</div>
