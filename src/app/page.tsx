import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <div>Main page</div>
    </main>
  )
}

Page.getStaticProps = () => ({
  props: {
    hello: 'world',
  },
})
