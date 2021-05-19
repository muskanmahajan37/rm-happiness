import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

import DashboardTemplate from 'templates/Dashboard'

export default function Dashboard() {
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
