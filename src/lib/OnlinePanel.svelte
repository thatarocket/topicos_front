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
	.container {
		display: flex;
		flex-direction: column;
		align-items: left;
        gap: 0.3rem;
	}
    
    .online-user {
        display: flex;
        border: 1px solid #641ae6;
        justify-content: flex-start;
        align-items: center;
        padding: 5px;
        border-radius: 0.25rem;
    }

    .online-user:hover {
        background-color: #dddcdc;
        cursor: pointer;
    }

    .user-avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
    }

    .username {
        font-size: 1rem;
        margin: 10px;
    }

    .title-page {
        display: flex;
        justify-content: center;
    
    }

    .title-text {
        font-size: 1.5rem;
        color: rgb(54, 29, 196);
        font-weight: bold;
        margin: 2px;
    }

</style>

<div class="container">

    <div class="title-page">
        <h1 class="title-text">Usuários online</h1>
    </div>

    {#each Object.entries(users) as [username, info]}
        <div class="online-user">
            <img class="user-avatar" src={info.avatar} alt="Avatar">
            <div class="username">
                <span>{username}</span>
            </div>
        </div>
    {/each}
</div>