const Discord = require('discord.js');

exports.run = (client, message, args) => {

	message.channel.send({
			embed: {
					color: 0xDF9C9D,
					author: {
							name: client.user.username,
							icon_url: client.user.displayAvatarURL
					},
					fields: [{
									name: "• Members:",
									value: `${message.guild.memberCount}`
							}, {
									name: "• Humans:",
									value: `${message.guild.members.filter(member => !member.user.bot).size}`
							}, {
									name: "• Bots:",
									value: `${message.guild.members.filter(member => member.user.bot).size}`
							}, {
									name: "• Members Status:",
									value: `**<:online:476360871246036993> ${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**<:idle:476360871338180611> ${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**<:dnd:476360871837433856> ${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**<:ofline:476360871313014784> ${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**<:streaming:476360870524616715> ${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`
					}]
			}
	})
};
module.exports.help = {
	name: "members",
	category: "utiles"
}
