import { assert } from 'chai'

import FacebookNotification from './src/providers/facebook-notification'
import SlackAdapterNotification from './src/providers/slack-adapter-notification'
import SlackNotification from './src/providers/slack-notification'

const providers: any[] = [
    new FacebookNotification(),
    new SlackAdapterNotification(
        new SlackNotification()
    )
]

describe('INotification', () => {
    it('Are providers compatible?', () => {
        providers.forEach(p => {
            assert.typeOf(p.post, 'function')
        })
    })
})