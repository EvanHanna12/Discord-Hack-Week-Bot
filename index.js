/* global Map*/
const active = new Map();

const Discord = require("discord.js");
const fs = require('fs');
const prefix = process.env.Prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity(`With MasterCoder#0001`)
});

bot.on("guildCreate", guild => {
    console.log(`I have been added to: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setActivity(`Serving ${bot.guilds.size} servers | w!help`);
  });
  
bot.on("guildDelete", guild => {
   console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
   bot.user.setActivity(`Serving ${bot.guilds.size} servers | w!help`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") message.reply("Dm's are not allowed sorry")
    if(message.content.startsWith('r/')) return;
  

    bot.user.setActivity(`Prefix ${prefix}`)
    if(!message.content.startsWith(prefix)){
        console.log("      " + message.author.username + '#' + message.author.discriminator + ' | ' + message.content)
        
    } else {
        console.log("    " + '  ' + message.author.username + '#' + message.author.discriminator + ' | ' + message.content)
    }
    
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        delete require.cache[require.resolve(`./Commands/${command}.js`)];
        let ops = {
        ownerID: process.env.ownerID,
        active: active
        }
        let commandFile = require(`./Commands/${command}.js`);
        commandFile.run(bot, message, args, ops);
    } catch (err) {
        console.error(err);
        
    }

});

bot.on('error', console.error);
   
bot.login(process.env.TOKEN);
