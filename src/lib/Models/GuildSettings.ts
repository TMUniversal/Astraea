import { model, Schema } from 'mongoose'
import type { Settings } from './types'

const schema = new Schema({
  registeredAt: { type: String, required: false, default: Date.now() },
  guild_id: { required: true, type: String },
  settings: {
    required: false,
    type: Object,
    default: {
      prefix: null,
      anti: {
        unmentionable: false
      },
      mute: {
        role_id: null
      }
    }
  }
})

export default model<Settings>('GuildSettings', schema)
