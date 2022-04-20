import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `    🔥𝐌𝐘 𝐌𝐀𝐒𝐓𝐄𝐑 𝐆𝐑𝐎𝐔𝐏🔥
        
       *🔥𝐍𝐀𝐓𝐒𝐔 𝐬𝐮𝐩𝐩𝐨𝐫𝐭:🔥* *https://chat.whatsapp.com/IhQHex7AahB64RBZ20bbvb:*
        *🔥𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐌𝐲 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🔥:*https://www.instagram.com/akuma__24/?hl=en*`,
           MessageType.text
        ))
        const n = [
            'https://telegra.ph/file/3b819b2cb2be451775dde.mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Sent you the support Link in personal message \n` }
        )

        }
}
