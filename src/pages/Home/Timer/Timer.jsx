/* eslint-disable react/prop-types */
import TimerFunc from "./TimerFunc";


// Example usage
function Timer({name, limit, interval:stopage}) {
  const toStop = limit * 60; // minutes to second conversion.
  const interval = stopage * 60; // minutes to second conversion.
//   const song = '../../../assets/ring.mp3.mp3';
  console.log(name, limit, stopage);
  return (
    <div>
      <TimerFunc toStop={toStop} interval={interval}/>
    </div>
  );
}

export default Timer;
