import React, { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'
const Confettie = ({tweenDuration}) => {
    const[widthdimension,setwidthdimention]=useState({width:window.innerWidth,height:window.innerHeight})
    const main=()=>{
setwidthdimention({width:window.innerWidth,height:window.innerHeight});
    }
    const [confettiActive, setConfettiActive] = useState(true);
    useEffect(()=>{
        window.addEventListener('resize',main);
        return()=>{
            window.removeEventListener('resize',main);
        }
    },[widthdimension])
    useEffect(() => {
        const timer = setTimeout(() => {

          setConfettiActive(false);
        }, 6000);

        return () => clearTimeout(timer);
      }, []);
  return (
    <div>
    {confettiActive && (
        <ReactConfetti width={widthdimension.width} height={widthdimension.height} tweenDuration={tweenDuration} />
      )}
    </div>
  )
}

export default Confettie
