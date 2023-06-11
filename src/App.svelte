<script>
	const a = "";
</script>

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

	.chat-panel {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 1rem;
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

	.message {
		padding: 1rem;
		border: 1px solid black;
		border-radius: 0.25rem;
	}
</style>

<div class="container">
	<div class="menu-panel">
		<button class="menu-button">Chat</button>
		<button class="menu-button">Pessoas Online</button>
	</div>

	<div class="chat-panel">
		<div class="message">
			Essa é uma mensagem doida
		</div>

		<div class="message">
			Essa é uma mensagem doida
		</div>
	</div>
</div>
