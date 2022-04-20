/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "alive",
                        aliases: ["Jinda?", "oi", "kahaho"],
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}alive`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://telegra.ph/file/11b8c229c36816bbe920e.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `𝐎𝐢𝐢🔥 𝐎𝐢𝐢🔥 𝐎𝐢𝐢 , 𝐁𝐚𝐤𝐤𝐚🐉, \n\n 𝐈'𝐦 𝐚𝐥𝐰𝐚𝐲𝐬 𝐚𝐜𝐭𝐢𝐯𝐞 🔥. 🔥 \n`,
			}
		);
	};
}
