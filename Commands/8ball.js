const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply("Usage: w!8ball [question]");
    let question = args.slice().join(" ");
    let color = ""
    let replies = ['Yes', 'Perhaps in the Future', 'No', 'Ask again later', 'Probably Not', 'Definitely', 'Definitely Not'];
    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(`${replies[result]}`)
};

module.exports.help = {
    name: "8ball",
    desc: "Ask 8ball your question",
    usage: `w!8ball <queustion>`
}
