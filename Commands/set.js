const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if (message.author.id !== "459175543154147328") return message.channel.send("Only Owners can use this command");
    if (!args[0]) return message.channel.send('**Proper Usage: w!set <play, stream, listen, watch> <game>**')
    
    const command = args.shift().toLowerCase();
    let status = message.content.split(" ").slice(2);
  try { 
    if (command === "stream") {
      bot.user.setActivity("with Ziqqi", { type: "STREAMING", url: "https://www.twitch.tv/imziqqi"})
    }
    if (command === "watch") {
      bot.user.setActivity(status.join(" "), { type: "WATCHING"})
    }
    if (command === "listen") {
      bot.user.setActivity(status.join(" "), { type: "LISTENING"})
    }
    if (command === "play") {

      bot.user.setActivity(status.join(" "), { type: "PLAYING"})
    }
  } catch(err) {
    console.log(err)
  }
}
