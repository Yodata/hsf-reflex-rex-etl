const router = require('./router')

describe('router.actions', () => {
  test('AskAction route exists', () => {
    expect(router.hasRoute({type: 'AskAction'})).toBe(true)
  })
  test('AskAction handler is a function', async () => {
    await expect(router.find({type: 'AskAction'})).toBeInstanceOf(Function)
  })
})

describe('router.router', () => {
  test('router.beforeRoute returns notification.object', () => {
    let message = { type: 'Notification', object: { type: 'Action' } }
    expect(router.callRoute('beforeRoute')(message)).resolves.toMatchObject({type: 'Action'})
  })
})