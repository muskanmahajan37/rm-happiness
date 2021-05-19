import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

import DashboardTemplate from 'templates/Dashboard'

export default function Dashboard() {
  useEffect(() => {
    const socket = io()
    socket.on('new_sale', (event: any) => {
      console.log('Event: %o', event) // eslint-disable-line
    })
  }, [])
  return <DashboardTemplate />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: `/`,
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
