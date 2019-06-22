const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let replies = ["One", "Two", "Three", "Four", "Five", "Six"];
    let result = Math.floor((Math.random() * replies.length));

    message.delete().catch(O_o => {});

        let newembed = new Discord.RichEmbed()
            .setAuthor("A dice has been rolled!")
            .setColor("#00FF00")
            .setDescription("Rolled By: " + message.author.username + "\n:game_die:Result: " + replies[result]);

        message.channel.send(newembed); 
};
