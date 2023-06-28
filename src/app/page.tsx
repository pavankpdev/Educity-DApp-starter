import Image from 'next/image'
import Product from "@/components/Product";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div
          className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'}
        >
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </main>
  )
}
