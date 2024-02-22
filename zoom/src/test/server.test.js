const txt = 'Listening on http://localhost:3000'

jest.mock('../server', () => {
  const handleListen = jest.fn(() => {
    // eslint-disable-next-line no-console
    return console.log(txt)
  })
  return { handleListen }
})

const server = require('../server')

describe('server', () => {
  const spy = jest.spyOn(console, 'log')

  it('should shows a log', () => {
    server.handleListen()
    expect(spy).toHaveBeenCalledWith(txt)
  })
})
