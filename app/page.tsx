'use client'
import Balance from '@/components/balance'
import Graph from '@/components/graph'
import Total from '@/components/total'
import { useEffect, useState } from 'react'

export default function Home() {

  const [data, setData] : any = useState([])
  const [total, setTotal] : any = useState(0)
    
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      setData(data)
      let newTotal = 0;
      for(let i = 0; i < data.length; i++) {
        newTotal += data[i].amount
      }
      setTotal(newTotal)
    }   
      fetchData();
    }, [])


  return (
    <div className='bg-cream sm:w-full h-screen'>
      <div className='grid gap-5 w-11/12 md:3/4 xl:w-2/5 h-screen m-auto'>
        <Balance total={total} />
        <div className='grid bg-very-pale-orange self-baseline rounded-xl py-6 px-8'>
          <h2>Spending - Last 7 days</h2>
          <Graph data={data} total={total}/>
          <hr />
          <Total total={total} />
        </div>
      </div>
    </div>
  )
}
