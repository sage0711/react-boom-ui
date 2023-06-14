import { useState, useEffect, useRef } from 'react';
import Landing from "../Landing";

const Greeting = () => {

    const [flag, setFlag] = useState(0);

    useEffect(() => {}, [flag]);

    const wrongButtonRef = useRef(null);

    return (
          flag ? <Landing /> :
            <div style={{
                backgroundColor: "white", 
                position: 'absolute', 
                top: "50%", 
                left: '50%', 
                transform: "translate(-50%, -50%)",
                padding: "30px"
                }}
            >
                <h1>SO + O2 = ?</h1>
                <hr />
                <button 
                    ref={wrongButtonRef} 
                    onClick={()=>{
                        console.log(wrongButtonRef.current.innerHTML="Try Again")
                        }}

                    style={
                        {
                            outline: 'none',
                            border: 'none',
                            color: 'white',
                            backgroundColor: "black",
                            marginRight: '10px',
                            cursor: "pointer",
                            padding: "5px"
                        }
                    }
                        >
                            SO3
                        </button>
                <button 
                    onClick={()=>setFlag(1)}
                    style={
                        {
                            outline: 'none',
                            border: 'none',
                            color: 'white',
                            backgroundColor: "black",
                            marginLeft: "10px",
                            cursor: "pointer",
                            padding: '5px'
                        }
                    }
                    >BOOM</button>
            </div>
    );
}

export default Greeting;