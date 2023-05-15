import Image from 'next/image'

export default function Balance(props:any) {

    const balance = 1500 - props.total

    return (
        <div className='flex bg-soft-red self-end py-6 px-8 rounded-xl'>
          <div className='basis-2/3 text-very-pale-orange'>
            <p>My balance</p>
            <h2>${balance}</h2>
          </div>
          <div className='grid basis-1/3 justify-end'>
            <Image className='self-center' src='/logo.svg' width={50} height={50} alt='logo' />
          </div>
        </div>
    )
}