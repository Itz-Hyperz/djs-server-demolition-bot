module.exports = {
    name: 'forcequit',
    description: 'Stops the demolition process.',
    aliases: ['stopall', 'cancel', 'block'],
    async execute(client, message, args, Hyperz, config){
    
    console.info("\x1b[37m\x1b[42mSuccess\x1b[0m: Operation completed! (^_^)/~");
    
    client.destroy()
    
    },
}