<script>
	let showChat = true;
</script>

<style>
	.container, .online-container {
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

{#if showChat}
<div class="container">
	<div class="menu-panel">
		<button on:click={() => showChat = true} class="menu-button">Chat</button>
		<button on:click={() => showChat = false} class="menu-button">Pessoas Online</button>
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
{/if}

{#if !showChat}
<div class="online-container">
	<div class="menu-panel">
		<button on:click={() => showChat = true} class="menu-button">Chat</button>
		<button on:click={() => showChat = false} class="menu-button">Pessoas Online</button>
	</div>

	<div class="online-panel">
		<div class="online-user">
			<div class="user-avatar">
				<img src="https://avatars.githubusercontent.com/u/47280579?v=4" alt="Avatar Thais">
			</div>
			<div class="username">
				<span>Lucas</span>
			</div>
		</div>

		<div class="online-user">
			<div class="user-avatar">
				<img src="https://github.com/willpinha" alt="Avatar Willian">
			</div>
			<div class="username">
				<span>willpinha</span>
			</div>
		</div>

		<div class="online-user">
			<div class="user-avatar">
				<img src="https://github.com/Gabicolombo" alt="Avatar Gabriela">
			</div>
			<div class="username">
				<span>Gabicolombo</span>
			</div>
		</div>

		<div class="online-user">
			<div class="user-avatar">
				<img src="https://avatars.githubusercontent.com/u/47280579?v=4" alt="Avatar Silas">
			</div>
			<div class="username">
				<span>SilasReisUSP</span>
			</div>
		</div>
			
	</div>

</div>
{/if}
