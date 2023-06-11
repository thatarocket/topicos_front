<script>
	import ChatPanel from "./lib/ChatPanel.svelte";
	import OnlinePanel from "./lib/OnlinePanel.svelte";

	let showChat = true;
</script>

<div class="container">
	<div class="menu-panel">
		<button on:click={() => showChat = true} class="menu-button">
			Chat
		</button>
		<button on:click={() => showChat = false} class="menu-button">
			Pessoas Online
		</button>
	</div>

	<div class="main-panel">
		{#if showChat}
			<ChatPanel />
		{:else}
			<OnlinePanel />
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		align-items: center;
		gap: 2rem; 
	}

	.menu-panel {
		display: flex;
		gap: 1rem; 
	}

	.main-panel {
		width: 50%;
		padding: 1rem;
		border: 1px solid black;
		border-radius: 0.25rem;
	}

	.menu-button {
		padding: 1rem;
		border: none;
		color: white;
		border-radius: 0.5rem;
		background-color: #641ae6;
	}

	.menu-button:hover {
		background-color: #5616c5;
		cursor: pointer;
	}
</style>