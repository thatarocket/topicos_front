<script>
	import Login from "./lib/Login.svelte";
	import UserPanel from "./lib/UserPanel.svelte";

	import { isConnected } from "./stores/chat";
</script>

{#if $isConnected}
	<UserPanel />
{:else}
	<Login />
{/if}
