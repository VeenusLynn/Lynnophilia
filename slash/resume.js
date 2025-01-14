const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("resume").setDescription("Resumes the music"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("Queue is empty, try `/play` to add songs")

		queue.setPaused(false)
        await interaction.editReply("Music has been paused! Use `/resume` to resume the music")
	},
}
