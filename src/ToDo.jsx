function ToDo(){

    function callFun(){
        alert("Function Called")
    }

    return(
        <div>
            <h1>Vivek Patel ToDos</h1>
            <img src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1784538000&v=beta&t=_JCPx897oSf9JbR-6poXYlZp_PEUgrCko3nLg62Nn-c" alt="Vivek Patel" class="photo" width={200} height={200}/>

            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            {/* calling JS function which is inside ToDo function*/}
            <button onClick={callFun}>Click Me</button>
        </div>
    )
}

export default ToDo