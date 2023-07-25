import Link from 'next/link'
import Description from './components/description';
import 'water.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='container'>
        <h1>Jaką alternatywką jesteś?</h1>
        <Link href="/quiz"><button>Start button</button></Link>
      </div>
        <Description></Description>
    </main>
  )
}
