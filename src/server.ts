/**
 * server.ts
 * Copyright (C) 2021
 *
 * @author Edgard Leal
 * @module server.ts
 */
import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

import WebSocketEvents from './websocket/websocket-events'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

const server = require('http').Server(app) // eslint-disable-line
const io = require('socket.io')(server) // eslint-disable-line

app.prepare().then(() => {
  createServer((req: any, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err?: any) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

  WebSocketEvents.getInstance().setUp(io)
})
