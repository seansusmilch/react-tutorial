import React, {useEffect, useRef} from "react"

// export const Header : React.FC = () => {
//     return (
//         <header className="jumbotron">
//             <h1>Simple React Todo App
//                 <span id="inH1"></span>
//             </h1>
//             <p>Please add to-do item(s) through the input field</p>
//         </header>
//     )
// }

interface Props {
    headerSpan: boolean
}

export const Header = (props:Props)=>{

    const isInitialMount = useRef(true)
    console.log(isInitialMount);
    

    useEffect(()=>{
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        if(isInitialMount.current){
            isInitialMount.current = false
        }else{
            document!.getElementById("inH1")!.innerHTML = "clicked"
            document!.getElementById("inH1")!.style.backgroundColor = bgColor;
        }
    },[props.headerSpan])

    return (
        <header className="jumbotron">
            <h1>Simple React Todo App <span id="inH1"></span></h1>
            <p>Please add to-do item(s) through the input field</p>
        </header>
    )
}

// export default class Header extends React.Component<Props>{
//     componentDidUpdate(prevProps:any, prevState:any){
//         var x = Math.floor(Math.random() * 256);
//         var y = Math.floor(Math.random() * 256);
//         var z = Math.floor(Math.random() * 256);
//         var bgColor = "rgb(" + x + "," + y + "," + z + ")";

//         if (prevProps.headerSpan !== this.props.headerSpan) {
//             document!.getElementById("inH1")!.innerHTML = "clicked"
//             document!.getElementById("inH1")!.style.backgroundColor = bgColor;
//         }
//     }

//     render(){
//         return (
//             <header className="jumbotron">
//                 <h1>Simple React Todo App <span id="inH1"></span></h1>
//                 <p>Please add to-do item(s) through the input field</p>
//             </header>
//         )
//     }
// }