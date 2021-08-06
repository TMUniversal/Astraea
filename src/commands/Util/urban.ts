import { AstraeaCommand, AstraeaCommandOptions } from '../../lib/Structures/Command'
import { Message, MessageEmbed } from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'
import { Args } from '@sapphire/framework'
import Urban from '../../lib/UrbanFetch'

@ApplyOptions<AstraeaCommandOptions>({
	name: 'urban',
	description: ' Get definitions of things on the trusty Urban Dictionary',
	nsfw: true
})
export default class example extends AstraeaCommand {
	public async run (message: Message, args: Args): Promise<Message> {
		const search = (await args.pickResult('string')).value

		if (!search) return await message.channel.send('No search provided')

		const list = await Urban(search)
		const embed = new MessageEmbed()
			.setTitle(list.word)
			.setDescription(list.definition)
			.addField('Example', list.example)
			.setURL(list.permalink)
			.setFooter(`Author: ${list.author} | ID: ${list.defid} | Upvotes: ${list.thumbs_up} | Downvotes: ${list.thumbs_down}`)

		return await message.channel.send(embed)
	}
}