import React, { useState, useEffect, FC } from 'react';
import { formatTimeStamp, getTimeStampInterval } from '../../utils/format-time';

let timer: any = null;

interface CountDownProps {
  expiresTime: number,
  timeInterval: number
}

export const CountDown: FC<CountDownProps> = ({ expiresTime, timeInterval }) => {
  const [formatTime, setFormatTime] = useState('');
  const [responseExpiresTime, setResponseExpiresTime] = useState(expiresTime);

  useEffect(() => {
    (async function() {
      let currentTime = Date.now();
      let currentSeconds = ~~(currentTime / 1000);
      let expiresSeconds = ~~(responseExpiresTime / 1000);
      
      if (currentSeconds !== expiresSeconds) {
        timer = await setTimeout(() => {
          setFormatTime(formatTimeStamp(getTimeStampInterval(currentTime, responseExpiresTime)))
        }, 1000);
      } else {
        setResponseExpiresTime(currentTime + timeInterval)
        timer = await setTimeout(() => {
          setFormatTime(formatTimeStamp(getTimeStampInterval((currentTime + 1000), (currentTime + timeInterval))))
        }, 1000);
      }

      window.addEventListener('unload', saveTime)
    })()

    return () => {
      clearTimeout(timer);
      window.removeEventListener('unload', saveTime)
    }
  }, [formatTime])

  function saveTime() {
    localStorage.setItem('perviousExpiresTime', responseExpiresTime + '')
  }

  return (
    <span>
      { formatTime }
    </span>
  )
};