import Head from 'next/head'
import FoodMenu from '../../../components/FoodBox/FoodBox'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Menu</title>
        <meta name="description" content="A delicious food menu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FoodMenu />
      </main>
    </div>
  )
}
