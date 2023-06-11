<script>
	let showChat = true;

    const users = {
        thatarocket: {
            name: "Thais",
            avatar: "https://avatars.githubusercontent.com/thatarocket"
        },
        willpinha: {
            name: "Willian",
            avatar: "https://avatars.githubusercontent.com/willpinha"
        },
        Gabicolombo: {
            name: "Gabriela",
            avatar: "https://avatars.githubusercontent.com/Gabicolombo"
        },
        SilasReisUSP: {
            name: "Silas",
            avatar: "https://avatars.githubusercontent.com/SilasReisUSP"
        }
    }
</script>

<style>
	.online-container {
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

<div class="online-container">

    {#each Object.entries(users) as [username, info]}
        <div class="online-panel">
            <div class="online-user">
                <div class="user-avatar">
                    <img src={info.avatar} alt="Avatar">
                </div>
                <div class="username">
                    <span>{username}</span>
                </div>
            </div>
        </div>
    {/each}

	
</div>