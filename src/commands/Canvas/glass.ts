import { ApplyOptions } from '@sapphire/decorators'
import { PieceContext } from '@sapphire/framework'
import { AstraeaCommandOptions } from '../../lib/Structures/Command'
import { AstraeaOverlayCommand } from './Base'

@ApplyOptions<AstraeaCommandOptions>({
	name: 'glass',
	description: 'Add a glass overlay to your or someone elses profile picture',
	usage: '[@user]'
})
export default class Glass extends AstraeaOverlayCommand {
	constructor (Context: PieceContext, options: AstraeaCommandOptions) {
		super({ overlay: 'glass' }, Context, options)
	}
}
