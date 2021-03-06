const { Client, ChatInputCommandInteraction, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js")
const EditReply = require("../../Systems/EditReply")

module.exports = {
    name: "roles",
    description: "send roles button",
    category: "ReactionRoles",

    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({content: ":x: | Tu n'a pas la permissions", ephemeral: true})
        let giveawayButton = new ButtonBuilder().setLabel("Giveaway").setCustomId("giveaway").setStyle(ButtonStyle.Primary).setEmoji("🎉")
        let annonceButton = new ButtonBuilder().setLabel("Annonce").setCustomId("annonce").setStyle(ButtonStyle.Primary).setEmoji("📌")
        let rolesButtons = new ActionRowBuilder()
            .addComponents([giveawayButton, annonceButton])
        interaction.reply({content: "Panel envoyé !", ephemeral: true})
        interaction.channel.send({components: [rolesButtons]})
    }

}