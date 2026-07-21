import { useState } from "react"

function App22() {

    const [cardStyle, setCardStyle] = useState(
        {
            border: '1px solid #cccccc3b',
            boxShadow: '1px 2px 3px 0px #cccccc57',
            width: '200px',
            margin: "10px"
        }
    )

    const [textColor, setTextColor] = useState('black');
    const [grid, setGrid] = useState(true);

    const updateTheme=(bgColor, textColor)=>{
        setCardStyle({...cardStyle,backgroundColor:bgColor})
        setTextColor(textColor)
    }


    return (
        <>
            <h2 style={{ color: 'red' }}>Dynamic & Conditional Style in React JS</h2>
            
            <button onClick={()=>updateTheme('#ccc', 'red')}>Gray Theme</button>
            <button onClick={()=>updateTheme('white', 'black')}>Default Theme</button>
            <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>

            {/* change grid block and flex based on button click */}
            <div style={{ display: grid?'flex':'block', flexWrap: 'wrap' }}>

                {/* Card Style Demo - Applying card style define as const*/}
                <div style={cardStyle}>
                    <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                    {/* changed textcolor using state textColor. second parameter to set value in update theme*/}
                    <div style={{ padding: '5px', color:textColor }}>
                        <h4>Vivek Patel</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                    {/* changed textcolor using state textColor. second parameter to set value in update theme*/}
                    <div style={{ padding: '5px', color:textColor }}>
                        <h4>Vivek Patel</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                    {/* changed textcolor using state textColor. second parameter to set value in update theme*/}
                    <div style={{ padding: '5px', color:textColor }}>
                        <h4>Vivek Patel</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                    {/* changed textcolor using state textColor. second parameter to set value in update theme*/}
                    <div style={{ padding: '5px', color:textColor }}>
                        <h4>Vivek Patel</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                    {/* changed textcolor using state textColor. second parameter to set value in update theme*/}
                    <div style={{ padding: '5px', color:textColor }}>
                        <h4>Vivek Patel</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                    {/* changed textcolor using state textColor. second parameter to set value in update theme*/}
                    <div style={{ padding: '5px', color:textColor }}>
                        <h4>Vivek Patel</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                    {/* changed textcolor using state textColor. second parameter to set value in update theme*/}
                    <div style={{ padding: '5px', color:textColor }}>
                        <h4>Vivek Patel</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                    {/* changed textcolor using state textColor. second parameter to set value in update theme*/}
                    <div style={{ padding: '5px', color:textColor }}>
                        <h4>Vivek Patel</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                    {/* changed textcolor using state textColor. second parameter to set value in update theme*/}
                    <div style={{ padding: '5px', color:textColor }}>
                        <h4>Vivek Patel</h4>
                        <p>Software Developer</p>
                    </div>
                </div>

            </div>
        </>
    )

}

export default App22