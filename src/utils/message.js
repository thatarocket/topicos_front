export class MessageBuilder {
	static buildText(content) {
		return {
			data: new Date().toISOString(),
			tipo: "texto",
			mensagem: {
				texto: content
			}
		};
	}

	static buildImage(url, caption) {
		return {
			type: "image",
			url,
			caption,
		};
	}
}