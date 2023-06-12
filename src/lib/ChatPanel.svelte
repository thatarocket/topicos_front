<script>
    const msgs = [
        {
            username: "willpinha",
            content: "Eita essa é uma mensagem muito longa não é mesmo?",
            date: "10/10/2010"
        },
        {
            username: "thatarocket",
            content: "Curto",
            date: "11/10/2010"
        }
    ]
</script>

<div class="container">
    {#each msgs as msg}
        <div class="message">
            <div class="message-title">{msg.username}</div>
            <div class="message-body">{msg.content}</div>
            <div class="message-footer">{msg.date}</div>
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.5rem;
    }

    .message {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .message-title {
        font-weight: bold;
        font-size: 0.9rem;
        color: #2a323c;
    }

    .message-body {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: #5616c5;
        font-size: 1rem;
        color: white;
    }

    .message-footer {
        align-self: flex-end;
        color: #2a323c;
        font-size: 0.8rem;
    }
</style>