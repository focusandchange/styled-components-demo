import React, { useState, useEffect, PropsWithChildren } from 'react';
import { formatTimeStamp, getTimeStampInterval } from '../../utils/format-time';

interface CountDownProps {
  expiresTime: number,
  timeInterval: number
}

function CountDown({ expiresTime, timeInterval }: PropsWithChildren<CountDownProps>) {
  const [formatTime, setFormatTime] = useState('00:00');
  const [responseExpiresTime, setResponseExpiresTime] = useState(expiresTime);
  let timer: any = null;
  
  useEffect(() => {
    let currentTime = Date.now();
    let currentSeconds = ~~(currentTime / 1000);
    let expiresSeconds = ~~(responseExpiresTime / 1000);
    if (currentSeconds !== expiresSeconds) {
      timer = setTimeout(() => {
        setFormatTime(formatTimeStamp(getTimeStampInterval(currentTime, responseExpiresTime)))
      }, 1000);
    } else {
      setResponseExpiresTime(currentTime + 1000 + timeInterval)
      setFormatTime(formatTimeStamp(getTimeStampInterval((currentTime - 1000), responseExpiresTime)))
    }

    return () => clearTimeout(timer)
  })

  window.onunload = function() {
    localStorage.setItem('perviousExpiresTime', responseExpiresTime + '')
  }

  return (
    <span>
      {formatTime}
    </span>
  )
}

export { CountDown };