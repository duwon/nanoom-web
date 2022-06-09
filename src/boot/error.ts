import { boot } from 'quasar/wrappers'
// outside of a Vue file
import { Notify } from 'quasar'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.config.errorHandler = (err) => {
    const message = err instanceof Error ? err.message : 'Unkndown Error'

    Notify.create({
      type: 'negative',
      timeout: 0,
      message,
      actions: [
        { label: '확인', color: 'white', handler: () => { /* ... */ } }
      ]
    })
  }
})
