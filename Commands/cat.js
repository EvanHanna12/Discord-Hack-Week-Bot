const discord = require("discord.js");
let sa = require("superagent");

exports.run = async (client, message, args) => {
            let { body } = await sa
                .get(`https://catfact.ninja/fact`);
                
            let o = new discord.RichEmbed()
                .setColor(0xFFFFFF)
                .setDescription("**" + body.fact + "**")
                .setFooter(`catfact.ninja`)
            message.channel.send(o)
}
