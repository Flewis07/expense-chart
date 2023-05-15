export default function Total(props:any) {
  return(
    <div className='py-10'>
      <p className='text-medium-brown'>Total this month</p>
      <div className='flex'>
        <div className='basis-1/2'>
          <h1>${props.total}</h1>
        </div>
        <div className='basis-1/2 text-end'>
          <p>+2.4%</p>
          <p className='text-medium-brown'>from last month</p>
        </div>
      </div>
    </div>
  )
}