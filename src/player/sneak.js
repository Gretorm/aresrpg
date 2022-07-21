import logger from '../logger.js'
import { World } from '../events.js'
const types = ['packet/entity_action']
const log = logger(import.meta)
export const Action = {
  START_SNEAKING: 0,
  STOP_SNEAKING: 1,
  LEAVE_BED: 2,
  START_SPRINTING: 3,
  STOP_SPRINTING: 4,
  START_JUMP_HORSE: 5,
  STOP_JUMP_HORSE: 6,
  OPEN_HORSE_INV: 7,
  START_ELYTRA_FLY: 8,
}
export default {
  /** @type {import('../context.js').Reducer} */
  reduce(state, { type, payload }) {
    if (types.includes(type)) {
      let updateSneak = state.sneaking
      if (payload.entityId === 0) {
        if (payload.actionId === Action.START_SNEAKING) {
          updateSneak = true
        } else if (payload.actionId === Action.STOP_SNEAKING) {
          updateSneak = false
        }
      }
      return {
        ...state,
        sneaking: updateSneak,
      }
    }
    return state
  },

  observe({ client, get_state, world, dispatch }) {
    client.on('entity_action', packet => {
      console.log('XD')
      worl_sneak({
        world,
        client,
      })
    })
    const on_sneak = options => client.write('entity_metadata', options)

    world.events.on(World.SNEAKING, on_sneak)

    client.once('end', () => {
      world.events.off(World.SNEAKING, on_sneak)
    })
  },
}
export function worl_sneak({ world, client: { uuid: sender } }) {
  const metadata = {
    1: null,
    2: 0,
    3: 0.0,
    4: 'jsp',
    5: true,
    6: null,
    7: true,
    8: [0.0, 0.0, 0.0],
    9: null,
    10: true,
    11: 0,
    12: true,
    13: 0,
    14: null,
    15: null,
    16: null,
    17: 0,
    18: 5,
    19: null,
    20: null,
    21: null,
  }

  const options = {
    entityId: sender,
    metadata,
  }
  log.info(sender)
  world.events.emit(World.SNEAKING, options)
}
