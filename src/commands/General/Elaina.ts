/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "natsu",
			aliases:['nat'],
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
                        modsOnly:true,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://telegra.ph/file/913ab3710227ee3917bf1.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🔥 *Natsu* 🎊\n\n🔥 *Description: A WhatsApp Bot With Rich Creation Features.*\n\n🌐 *URL: https://github.com/akumasugi/Savage.git* \n\n 📒 *Guide: https://github.com/akumasugi/Savage.git* \n`,
			}
		);
	};
}
