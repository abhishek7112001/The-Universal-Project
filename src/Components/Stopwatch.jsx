import React, {useState, useEffect, useRef} from 'react'

const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{

        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return ()=>{
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() -time;
        
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        let hours = Math.floor(time / (1000 * 60 *60));
        let min = Math.floor(time / (1000 * 60) % 60);
        let sec = Math.floor(time / (1000) % 60);
        let millisec = Math.floor((time %1000)/10);

        hours = String(hours).padStart(2, '0');
        min = String(min).padStart(2, '0');
        sec = String(sec).padStart(2, '0');
        millisec = String(millisec).padStart(2, '0');

        return `${hours}:${min}:${sec}:${millisec}`;
    }


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-orange-400 border-2 rounded-lg m-1 font-[cursive]"
        style={{
            backgroundImage: 'url("./stopbg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {/* <h1 className="text-6xl mb-5 text-white">Stopwatch</h1> */}
        <div className="border-2 rounded-lg p-28 shadow-lg bg-green-200/40 backdrop-blur-lg">
            <div className="flex flex-col justify-center items-center mb-5">
                <h2 className="text-4xl font-bold">{formatTime(time)}</h2>
            </div>
            <div className="mt-5 flex space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded shadow transform hover:scale-105 transition-transform duration-300" onClick={start}>
                    Start
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded shadow transform hover:scale-105 transition-transform duration-300" onClick={stop}>
                    Stop
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded shadow transform hover:scale-105 transition-transform duration-300" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    </div>

  )
}

export default Stopwatch