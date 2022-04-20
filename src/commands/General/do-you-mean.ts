import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/c45239a35731170a273c1.mp4'
        ]
        let lucy = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: lucy }, MessageType.video, {
            quoted: M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `𝐂𝐎𝐌𝐄 𝐎𝐍𝐍 🔥🔥 *${M.sender.username}!* 𝐔𝐒𝐄 🔥*${this.client.config.prefix}help*? \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
