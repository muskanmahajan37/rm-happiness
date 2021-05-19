import Main from 'components/Main'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

export default function Home() {
  useEffect(() => {
    const socket = io()
    socket.on('new_sale', (event: any) => {
      console.log('Event: %o', event) // eslint-disable-line
    })
  }, [])
  return (
    <Main
      title="Central da felicidade"
      description="Aqui vai ser o ponto de paz (ou não) do time"
    />
  )
}
