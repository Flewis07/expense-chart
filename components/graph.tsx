import Day from "./day";

export default function Graph(props:any) {

    const data = props.data;
    const total = props.total;

    return(
        <div className='py-5'>
            <ul className='flex justify-evenly md:justify-center h-72 sm:h-56'>
                {
                    data.map((day:any, index:any) => {
                        const percent = ((day.amount / total * 100 * 3).toFixed(0))
                        console.log(total)
                        const date = new Date()
                        let bgColor = "hsl(10, 79%, 65%)"
                        if(day.day === date.toDateString().slice(0, 3).toLowerCase()){
                            bgColor = "hsl(186, 34%, 60%)"
                        }
                        return (
                            <div key={index}>
                                <Day percent={percent} bgColor={bgColor} day={day.day} amount={day.amount} />   
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

