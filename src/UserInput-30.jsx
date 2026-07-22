// import { forwardRef } from "react"

// const UserInput=(props, ref)=>{
//     return(
//         <div>
//             <input ref={ref} type="text" />
//         </div>
//     )
// }

// export default forwardRef(UserInput);

// this will work after react 19 above was not supported now
const UserInput=(props)=>{
    return(
        <input type="text" ref={props.ref}/>
    )
}

export default UserInput;