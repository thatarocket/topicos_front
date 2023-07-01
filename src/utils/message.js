export class MessageBuilder {
	static buildText(content, username) {
		return {
			usuario: username,
			data: new Date().toISOString(),
			tipo: "texto",
			mensagem: {
				texto: content
			}
		};
	}

	static buildImage(png, url, caption, username) {
		return {
			usuario: username,
			data: new Date().toISOString(),
			tipo: "imagem",
			mensagem: {
				imagem: png,
				descricao: caption,
				tipoImagem: 'png',
				tipo: 10293
			}
		};
	}
}