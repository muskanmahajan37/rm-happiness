import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import LoginTemplate from 'templates/Login'

export default function Home() {
  return <LoginTemplate />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: `/dashboard`,
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
