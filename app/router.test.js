const router = require('./router')
const SalesForceLead = require('./handle/sales_force_lead')
const addActionJson = require('./handle/add_action.json')

describe('router.routes', () => {
  test('AskAction route', () => {
    expect(router.hasRoute({type: 'AskAction'})).toBe(true)
  })
  test('AddAction route', () => {
    expect(router.hasRoute({type: 'AddAction'})).toBe(true)
  })
})

describe('router.router', () => {
  test('router.beforeRoute returns notification.object', async () => {
    let message = { type: 'Notification', object: { type: 'Action' } }
    await expect(router.callRoute('beforeRoute')(message)).resolves.toMatchObject({type: 'Action'})
  })
  test('router.beforeAction throws when route not found', async () => {
    await expect(router.callRoute('beforeAction')({type: 'AddAction'})).resolves
    await expect(router.callRoute('beforeAction')({type: null})).rejects
  })
  test('router.afterAction receives a SalesForce#Lead', async () => {
    let afterAction = jest.fn(e => e)
    router.addHook('afterAction', afterAction)
    let result = await router.next(addActionJson)
    expect(result).toMatchObject(SalesForceLead)
    expect(afterAction).toHaveBeenCalledWith(expect.objectContaining({HSFId: expect.any(String)}))
  })
})
