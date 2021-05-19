/**
 * websocket-events.ts
 * Copyright (C) 2021
 *
 * @author Edgard Leal
 * @module websocket-events.ts
 */
import debug from 'debug'
import { Server } from 'socket.io'
import http from 'http'

/**
 * To activate this log, set the invironment variable DEBUG to value: rm:websocket
 *
 * DEBUG='rm:websocket'
 *
 */
const logger = debug('rm:websocket')

export const NEW_SALE_EVENT = 'new_sale'

export enum SaleType {
  CREDIT = 'credit',
  DEBIT = 'debit',
  BOLETO = 'boleto'
}

export interface Event {
  type: SaleType
  value: number
  date?: Date
}

/**
 * Manage event on websocket
 * @author edgardleal@gmail.com
 * @since 19.05.21
 */
export default class WebsocketEvents {
  private static instance: WebsocketEvents

  private socket?: Server

  private httpServer?: http.Server

  private constructor() {
    logger('Creating WebsocketEvents instance...') // eslint-disable-line
  }

  setHttpServer(s: http.Server) {
    if (!this.httpServer) {
      logger('httpServer is not difined yet...') // eslint-disable-line
      this.httpServer = s
      logger('Creating socket...') // eslint-disable-line
      this.getServer()
    }
  }

  private getServer() {
    if (!this.socket) {
      this.socket = new Server(this.httpServer)
    }
    return this.socket
  }

  setUp(s: Server) {
    this.socket = s
  }

  newSale(sale: Event) {
    this.getServer().emit(NEW_SALE_EVENT, sale)
    logger('New event sended: %o', sale) // eslint-disable-line
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new WebsocketEvents()
    }
    return this.instance
  }
}
