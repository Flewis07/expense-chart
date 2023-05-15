export default function Day(props:any) {

    const divStyle = { height: `${props.percent}%`, backgroundColor: `${props.bgColor}`, color: `${props.bgColor}` };
    
    return(
        <li className='flex flex-col justify-end h-full w-8 md:w-20 items-center gap-2'>
            <div className="price-block grid bg-dark-brown text-very-pale-orange p-2 rounded-md text-center z-50">
                <p>${props.amount}</p>
            </div>
            <div className='stat-line rounded-md w-8 sm:w-14' style={divStyle}>.</div>
            <p className='text-medium-brown'>{props.day}</p>
        </li>
    )
}