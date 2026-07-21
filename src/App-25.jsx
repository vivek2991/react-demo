import styled from "styled-components"

// npm i styled-components - run in the command line

function App25(){

    const Heading = styled.h1`
        color:red;
        border: 1px solid green;
        border-radius:5px;
        margin:20px;
        padding:10px;
    `
    const Heading4 = styled.h4`
        color:blue;
        border: 1px solid green;
        border-radius:5px;
        margin:20px;
        padding:5px;
    `

    // you can use these as object insted of const Heading = styled.h1`` both will work
    const HeadingAnotherWay = styled.h1({
        color: 'yellow',
        border: '1px solid green',
        borderRadius:'5px',
        margin:'20px',
        padding:'10px',
    })

    const StyleBtn = styled.button`
        color: white;
        background-color: #3479b9;
        border-radius: 10px;
        border-color: red;
        width: 130px;
        height:40px;
        margin:20px;
    `

    const Para = styled.p`
        font-size:20px;
        color: #986532;
        margin: 20px;
    `

    return(
    <>
        <h1>Styled Components</h1>
        <Heading>Hello I am Vivek</Heading>
        <Heading4>Hello I am Smriti</Heading4>
        <HeadingAnotherWay>Hello I am Vk</HeadingAnotherWay>
        <Para>Hello I am paragraph, Here you can see the style of the paragraph</Para>
        <StyleBtn>Login</StyleBtn>
        <StyleBtn>Sign Up</StyleBtn>
    </>
    )

}

export default App25