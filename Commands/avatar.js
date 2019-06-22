exports.run = async (client, message, args, ops) => {
  if(message.member.roles.some(r=>["Founder", "Administator", "Moderator", "Staff"].includes(r.name)) ) {
  let avatar = args.toString()
    client.user.setAvatar(avatar);
  message.channel.send('Updated');
} else {
  message.reply(`Only the Owner(@Founder @Administator @Moderator @Staff) may change my Avatar`);
}
}
