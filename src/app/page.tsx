import Image from 'next/image'
import RegistrationForm from './auth/components/RegistrationForm'
import LoginForm from './auth/components/LoginForm'

export default function Page() {
  return (
    <main>
      <RegistrationForm />
      {/* <LoginForm /> */}
    </main>
  )
}

Page.getStaticProps = () => ({
  props: {
    hello: 'world',
  },
})
