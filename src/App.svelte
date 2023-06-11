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
		border: 1px solid black;
		border-radius: 0.25rem;
	}

	.message {
		padding: 1rem;
		border: 1px solid black;
		border-radius: 0.25rem;
	}
</style>

<div class="container">
	<div class="menu-panel">
		<div class="menu-button">Chat</div>
		<div class="menu-button">Pessoas Online</div>
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
