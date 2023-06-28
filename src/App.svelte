<script>
	import { connect } from "./utils/chat";
	import { isConnected, username } from "./stores/chat";
	import UserPanel from "./lib/UserPanel.svelte";

	let usernameInput = "";

	function handleClick() {
		connect(usernameInput);
		username.set(usernameInput);
	}
</script>

{#if $isConnected}
	<UserPanel />
{:else}
	<div class="flex flex-col gap-2 border-2 p-8">
		<input bind:value={usernameInput} placeholder="Enter a username..." />

		<button on:click={handleClick}>Enter</button>
	</div>
{/if}
