function College({ names }) {
    const nameElements = []

    if (names && names.length > 0) {
        for (let index = 0; index < names.length; index++) {
            nameElements.push(<h2 key={index}>{names[index]}</h2>)
        }
    }

    return (
        <div>
            <h1>College Names</h1>
            {nameElements.length > 0 ? nameElements : <h2>No colleges available</h2>}
        </div>
    )
}

export default College;