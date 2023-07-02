<script>
	import Login from "./lib/Login.svelte";
	import UserPanel from "./lib/UserPanel.svelte";
	import { user } from "./stores/user";
</script>

{#if $user !== null}
	<UserPanel />
{:else}
	<Login />
{/if}
