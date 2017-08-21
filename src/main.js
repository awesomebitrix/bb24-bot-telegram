import User    from './user.js'
import Express from 'express'

const app  = new Express()
    , user = new User()

user.bot.run()

app.set('port', (process.env.PORT || 5000))

app.get('/', (req, res) => {
    res.send('')
  })
  .listen(app.get('port'), () => {
    console.log('Bot is running, listening on port ', app.get('port'))
  })
