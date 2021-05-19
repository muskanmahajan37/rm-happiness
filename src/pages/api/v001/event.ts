/**
 * event.ts
 * Copyright (C) 2021
 *
 * @author Edgard Leal
 * @module event.ts
 */

import WebSocketEvents, { Event } from '../../../websocket/websocket-events'

function validate(payload: Event): Promise<Event> {
  if (!payload || !payload.type) {
    return Promise.reject(new Error('invalid payload'))
  }
  return Promise.resolve(payload)
}

function publishEvent(event: Event): Promise<Event> {
  WebSocketEvents.getInstance().newSale(event)
  return Promise.resolve(event)
}

function noContentResponse(res: any) {
  return () => res.status(204).end()
}

function errorHandler(res: any) {
  return (error: any) => res.status(400).end(error?.message)
}

/**
 * Register a new event
 *
 * @author edgardleal
 * @since 19.05.21
 */
export default async function event(req: any, res: any): Promise<void> {
  console.log('new request...') // eslint-disable-line
  WebSocketEvents.getInstance().setHttpServer(res.connection.server)
  validate(req.body)
    .then(publishEvent)
    .then(noContentResponse(res))
    .catch(errorHandler(res))
}
