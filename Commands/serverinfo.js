const Discord = require('discord.js');

exports.run = (client, message, args, config) => {
  function checkBots(guild) {
    let botCount = 0; // This is value that we will return
    guild.members.forEach(member => { // We are executing this code for every user that is in guild
      if(member.user.bot) botCount++; // If user is a bot, add 1 to botCount value
    });
    return botCount; // Return amount of bots
  }

  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++; // If user isn't bot, add 1 to value. 
    });
    return memberCount;
  }

  
  function checkVerif(guild) {

    let Verf = guild.verificationLevel.toInteger,
    VerifLvlNone = 0,
    VerifDescNone = '**None**: Unrestricted.',
    VerifLvlLow = 1,
    VerifDescLow = '**Low**: Must have a verified email on their Discord.',
    VerifLvlMedium = 2,
    VerifDescMedium = '**Medium**: Must also registered on Discord for longer than 5 minutes.',
    VerifLvlHigh = 3,
    VerifDescHigh = '**High**: Must also be a member of this Discord Server for longer than 10 minutes.',
    VerifLvlExtreme = 4,
    VerifDescExtreme = '**Extreme**: Must have a verified phone on their Discord Account'

    if(Verf = VerifLvlNone){
      Verf = VerifDescNone;
    }else{
    if(Verf = VerifLvlLow){
      Verf = VerifDescLow;
    }else{
    if(Verf = VerifLvlMedium){
      Verf = VerifDescMedium;
    }else{
    if(Verf = VerifLvlHigh){
      Verf = VerifDescHigh;
    }else{
    if(Verf = VerifLvlExtreme){
      Verf = VerifDescExtreme;
    }}}}};
    
    return Verf;
  }

  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} `, message.guild.iconURL) // Will set text on top of embed to <guild name> - Informations, and will place guild icon next to it
    .setColor('#f4df42') // Will set color of embed
    .addField('Server Owner: ', message.guild.owner, true) // Will add in-line field with server owner
    .addField('Server Region: ', message.guild.region, true) // Will add in-line field with server region
    .addField('Channel Count: ', message.guild.channels.size, false) // Will add in-line field with total channel count
    .addField('Total Member Count: ', message.guild.memberCount, true) // Will add in-line field with total member count
    // Now we will use our methods that we've created before
    .addField('Humans: ', checkMembers(message.guild), true)
    .addField('Bots: ', checkBots(message.guild), true)
    // We also can add field with verification level of guild
    .addField('Verification Level: ', checkVerif(message.guild), true)
    // And now, we can finally add footer and timestamp
    .setFooter('Guild created at:')
    .setTimestamp(message.guild.createdAt); // Will set timestamp to date when guild was created

    // And now we can send our embed
    return message.channel.send(embed);
}
