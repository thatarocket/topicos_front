<script>

</script>

<div class="container">
    <div class="message">
        <div class="message-title">
            willpinha
        </div>
        <div class="message-body">
            Eita essa é uma mensagem muito longa não é mesmo?
        </div>
        <div class="message-footer">
            <div>Enviado em 10/10/2010</div>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .message {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
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
        display: flex;
        justify-content: flex-end; 
        color: #2a323c;
        font-size: 0.8rem;
    }
</style>