module.exports = async (req, res) => {
  try {
    const appModule = require('../dist/server.generated.js')
    const app = appModule.default || appModule
    return app(req, res)
  } catch (err) {
    console.error('Vercel function bootstrap error:', err)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Server bootstrap failed' }))
  }
}
