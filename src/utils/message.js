export class MessageBuilder {
	static buildText(content) {
		return {
			type: "text",
			content,
		};
	}

	static buildImage(url, caption) {
		return {
			type: "image",
			url,
			caption,
		};
	}

	static isValid(message) {
		return message && message.type && message.type in ["text", "image"];
	}
}
