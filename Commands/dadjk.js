const discord = require ("discord.js");
let sa = require ("superagent");

exports.run = async (client, message, args) => {
    let {body} = await sa
    .get(`https://icanhazdadjoke.com/slack`);

    let o = new discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setDescription("**" + body.attachments.map(a => a.text) + "**")
        .setFooter('icanhazdadjoke.com')
    message.channel.send(o)
	
}
