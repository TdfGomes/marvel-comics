import express from 'express'
import { createProxyMiddleware, Options } from 'http-proxy-middleware'
import path from 'path'
import crypto from 'crypto'
import cors from 'cors'
import './lib'

const ts: number = new Date().getTime()
const data = `${ts}${process.env.PRIVATE_KEY}${process.env.PUB_KEY}`
const hash: string = crypto.createHash('md5').update(data).digest('hex')

const app = express()

const PORT = process.env.PORT || 8000

const options: Options = {
  target: 'http://gateway.marvel.com/v1/public',
  changeOrigin: true,
  pathRewrite: (path: string) => {
    const sliptedPath = path.split(/^\/api|\?/)
    const queryString = sliptedPath.length > 2 ? `&${sliptedPath.pop()}` : ''
    const auth = `?format=comic&noVariants=true&ts=${ts}&apikey=${process.env.PUB_KEY}&hash=${hash}${queryString}`

    const newPath: string | undefined = sliptedPath[1]?.concat(auth) || path

    return newPath
  },
}

app.use(cors())
app.use('/api', createProxyMiddleware(options))

if (process.env.NODE_ENV === 'production') {
  console.log('====>PRODUCTION<====')
  app.use(express.static(path.join(__dirname, '../../app/build')))

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../app/build', 'index.html'))
  })
}

app.listen(PORT, () => console.log(`gateway is running on port: ${PORT}`))
