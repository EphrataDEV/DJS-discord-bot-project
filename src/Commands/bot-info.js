const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "bot-info",
	description: "Shows an embed",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		const user = message instanceof Discord.CommandInteraction ? message.user : message.author;

		embed
			.setTitle("This is a test embed")
			.setURL("https://github.com/Joseph-developer1/basic-discord-bot-project")
			.setAuthor(
				client.user.username,
				client.user.avatarURL({ dynamic: true }),
				"https://github.com/Joseph-developer1/basic-discord-bot-project"
			)
			.setDescription(
				"this is some plain text,\nhere is a link: [this is a test link](https://github.com/Joseph-developer1/basic-discord-bot-project)"
			)
			.setColor("#2ade1d")
			.setThumbnail()
			.setTimestamp()
			.setImage(
				client.user.avatarURL({ dynamic: true })
			)
			.addFields(
				{
					name: "Bot Version",
					value: "1.0.0",
					inline: true
				},
				{
					name: "Bot Name",
					value: client.user.username,
					inline: true
				}
			);

		message.reply({ embeds: [embed] });
	}
});