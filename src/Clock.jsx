import { useEffect, useState } from "react";

const Clock = ({color}) => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    }, []);

    return (
        <div>
            <h2
                style={{color:color,
                        backgroundColor:'#000',
                        width:"120px",
                        padding:'10px',
                        borderRadius:'10px'
                }}
            >{time}</h2>
        </div>
    )
}

export default Clock;