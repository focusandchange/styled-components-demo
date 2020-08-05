/**
 * 返回格式化后的时间
 * @param {number} timeStamp 
 */
export const formatTimeStamp = (timeStamp: number) => {
  const date = new Date(timeStamp);
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  return `${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

/**
 * 返回距离过期时间的间隔
 * @param {number} currentTime 
 * @param {number} endTime 
 */
export const getTimeStampInterval = (currentTime: number, espiresTime: number) => espiresTime - currentTime;