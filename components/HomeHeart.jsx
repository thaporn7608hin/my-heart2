import React, { useState } from 'react'

const HomeHeart = () => {
  const [btnSize, setBtnSize] = useState(0)
  const [isYes, setIsYes] = useState(false)
  const [btnMsgNo,setBtnMsgNo] = useState(0)

  const yesButtonSize = (btnSize * 20) + 16;

  const msgNo = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Please",
    "But I really love you",
    "But I really really love you",
    "You're breaking my heart :(",
    "เชอะ"
  ]

  function btnYes(){
    setIsYes(true)
  }

  function btnNo(){
    if (btnMsgNo < msgNo.length-1){
      setBtnSize(btnSize+1)
      setBtnMsgNo(btnMsgNo+1)
    }
  }
  return (
    <>
      {
        isYes ? (
          <>
            <div className="flex items-center justify-center">
              <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="yes-pic" className='w-full' />
            </div>
            <div className='my-20 text-lg font-semibold'>
              <span>จุ๊บๆ จุ๊บๆ รักเธอที่สุดเลย</span>
            </div>
          </>
        ) :
          <>
            <div className="flex items-center justify-center">
              <img src="https://media.tenor.com/vknNeIAWurIAAAAi/tkthao219-bear.gif" alt="bear-asking" className="w-full" />
            </div>
            <div className='my-20 text-lg font-semibold'>
              <span>Do you love me?</span>
            </div>
            <div className='flex justify-center items-center flex-wrap'>
              <button className={` m-5 bg-green-400 px-5 py-3 rounded-md hover:bg-green-500 font-semibold`} style={{ fontSize: yesButtonSize }} onClick={btnYes}>Yes</button>
              <button className=' m-5 bg-red-400 px-5 py-3 rounded-md hover:bg-red-500 font-semibold' style={{ fontSize: '16px' }} onClick={btnNo}>{msgNo[btnMsgNo]}</button>
            </div>
          </>
      }
    </>
  )
}

export default HomeHeart