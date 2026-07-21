function App21() {

    const cardStyle = {
        border: '1px solid #cccccc3b',
        boxShadow: '1px 2px 3px 0px #cccccc57',
        width: '200px',
        margin: "10px"
    }


    return (
        <>
            <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Inline Style in React JS</h1>
        <div style={{display:'flex', flexWrap:'wrap'}}>    
            {/* Inline CSS demo */}
            <div style={
                {
                    border: '1px solid #cccccc3b',
                    boxShadow: '1px 2px 3px 0px #cccccc57',
                    width: '200px',
                    margin: "10px"
                }
            }>
                <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div style={{ padding: '5px' }}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div>


            {/* Card Style Demo - Applying card style define as const*/}
            <div style={cardStyle}>
                <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div style={{ padding: '5px' }}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div>

            {/* start - Copy above cards to show flex wrap cards go down in next raw auto based on screen size */}
            {/* <div style={cardStyle}>
                <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div style={{ padding: '5px' }}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div>

            <div style={cardStyle}>
                <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div style={{ padding: '5px' }}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div>

            <div style={cardStyle}>
                <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div style={{ padding: '5px' }}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div>

            <div style={cardStyle}>
                <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div style={{ padding: '5px' }}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div>

            <div style={cardStyle}>
                <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div style={{ padding: '5px' }}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div>

            <div style={cardStyle}>
                <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div style={{ padding: '5px' }}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div>

            <div style={cardStyle}>
                <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div style={{ padding: '5px' }}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div>

            <div style={cardStyle}>
                <img style={{ width: '200px' }} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div style={{ padding: '5px' }}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div> */}
            {/* End - Copy above cards to show flex wrap cards go down in next raw auto based on screen size */}
        </div>    
        </>
    )

}

export default App21