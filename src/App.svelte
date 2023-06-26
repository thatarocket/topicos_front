<script>
	import Login from "./lib/Login.svelte";
	import UserPanel from "./lib/UserPanel.svelte";

	import { user } from "./auth";

	let isAuthenticated = false;

	user.subscribe((value) => {
		isAuthenticated = value !== null;
	});
</script>

{#if isAuthenticated}
	<UserPanel />
{:else}
	<Login />
{/if}
