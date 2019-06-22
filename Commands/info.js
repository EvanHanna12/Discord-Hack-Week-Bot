const Discord = require("discord.js")

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();
            if (!message.content.includes('@')) {
                var embed = new Discord.RichEmbed()    
                    .setTitle(message.author.username + "'s Info")    
                    .setThumbnail(message.author.avatarURL)
                    .setColor('0x00D3FF')

                    .addField('ID: ', message.author.id) 
                    .addField('Discriminator: ', message.author.discriminator)
                    .addField('Avatar URL: ', `[View Here](${message.author.avatarURL})`)              
                    .addField('Created At: ', message.author.createdAt) 

                    message.channel.send(embed)
            } else if (message.content.includes('@')) {
                var embed = new Discord.RichEmbed()    
                    .setTitle(user.username + "'s Info")    
                    .setThumbnail(user.avatarURL)
                    .setColor('0x00D3FF')

                    .addField('ID: ', user.id) 
                    .addField('Discriminator: ', user.discriminator)
                    .addField('Avatar URL: ', `[View Here](${user.avatarURL})`)              
                    .addField('Created At: ', user.createdAt) 

                    message.channel.send(embed)
            }
}
