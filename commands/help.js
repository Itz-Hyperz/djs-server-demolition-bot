module.exports = {
    name: 'help',
    description: 'Pings the bot.',
    aliases: ['helpmenu', 'helpme'],
    async execute(client, message, args, Hyperz, config){
        const member = message.member
        const guild = message.guild.id
        const helpEmbed = new Hyperz.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setTitle(`Destroyer Bot Help Menu:`)
        .setURL('https://github.com/itz-hyperz')
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
        .setThumbnail(message.guild.iconURL())
        .addFields(
            { name: 'The Commands:', value: '`help` - Shows **all** the __available__ commands.\n`begin` - Begins to destroy the entire server.\n`forcequit` - Forecefully kicks the bot from the server, stopping all current actions.\n`ping` - Pings the bot.'},
        )
        .setTimestamp()
        .setFooter(`${config["main_config"].copyright}`)
    
        message.author.send(helpEmbed)
        message.delete().catch(err => console.log(err));
    }
}