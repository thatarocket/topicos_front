<script>
	import { username } from "../stores/chat";
	import { disconnect } from "../utils/chat";

	const users = {
		thatarocket: {
			name: "Thais",
			avatar: "https://avatars.githubusercontent.com/thatarocket",
		},
		willpinha: {
			name: "Willian",
			avatar: "https://avatars.githubusercontent.com/willpinha",
		},
		Gabicolombo: {
			name: "Gabriela",
			avatar: "https://avatars.githubusercontent.com/Gabicolombo",
		},
		SilasReisUSP: {
			name: "Silas",
			avatar: "https://avatars.githubusercontent.com/SilasReisUSP",
		},
		thatarocket2: {
			name: "Thais",
			avatar: "https://avatars.githubusercontent.com/thatarocket",
		},
		willpinha2: {
			name: "Willian",
			avatar: "https://avatars.githubusercontent.com/willpinha",
		},
		Gabicolombo2: {
			name: "Gabriela",
			avatar: "https://avatars.githubusercontent.com/Gabicolombo",
		},
		SilasReisUSP2: {
			name: "Silas",
			avatar: "https://avatars.githubusercontent.com/SilasReisUSP",
		},
		thatarocket3: {
			name: "Thais",
			avatar: "https://avatars.githubusercontent.com/thatarocket",
		},
		willpinha3: {
			name: "Willian",
			avatar: "https://avatars.githubusercontent.com/willpinha",
		},
		Gabicolombo3: {
			name: "Gabriela",
			avatar: "https://avatars.githubusercontent.com/Gabicolombo",
		},
		SilasReisUSP3: {
			name: "Silas",
			avatar: "https://avatars.githubusercontent.com/SilasReisUSP",
		},
		thatarocket4: {
			name: "Thais",
			avatar: "https://avatars.githubusercontent.com/thatarocket",
		},
		willpinha4: {
			name: "Willian",
			avatar: "https://avatars.githubusercontent.com/willpinha",
		},
		Gabicolombo4: {
			name: "Gabriela",
			avatar: "https://avatars.githubusercontent.com/Gabicolombo",
		},
		SilasReisUSP4: {
			name: "Silas",
			avatar: "https://avatars.githubusercontent.com/SilasReisUSP",
		},
	};
</script>

<div
	class="flex h-screen flex-col border-x border-gray-600 bg-gray-800 text-white"
>
	<div class="border-b border-gray-600 px-2 py-2 text-center text-sm">
		👋 Olá, <span class="font-semibold text-blue-400">@{$username}</span>
	</div>

	<div
		class="flex flex-1 flex-col gap-3 overflow-y-auto bg-gray-900 px-3 pt-3"
	>
		<div class="text-sm">Online no chat</div>
		{#each Object.entries(users) as [username, user]}
			<div
				class="flex items-center gap-3 rounded-full border border-gray-600 bg-gray-800 pr-8 text-gray-400 shadow shadow-gray-900"
			>
				<div class="relative inline-block">
					<img
						src={user.avatar}
						alt={user.name}
						class="h-8 w-8 rounded-full"
					/>
					<div
						class="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 outline outline-4 outline-gray-800"
					/>
				</div>

				<div>{username}</div>
			</div>
		{/each}
	</div>

	<div class="flex justify-center border-t border-gray-600 py-2">
		<button
			on:click={disconnect}
			class="flex items-center gap-1 rounded-lg bg-red-500 px-4 py-1 hover:bg-red-600"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="15"
				height="15"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#fff"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path
					d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"
				/></svg
			>
			<div class="text-sm">Sair do chat</div>
		</button>
	</div>
</div>
