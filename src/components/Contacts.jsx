import React from 'react'

const Contacts = () => {
  const handleButtonClick = () => {
    // Open email client with prefilled subject and body
    window.location.href = 'mailto:sumitmaddeshiya99@gmail.com?subject=Project Discussion&body=Hi, I would like to discuss a project with you.';
  }

  return (
    <div id="contacts" className='w-[90%]'>
      <div className="cousine w-full flex justify-between items-center text-white text-lg font-thin pt-2">
        <p>Contact</p>
        <p>
          05/<span className="text-gray-400">05</span>
        </p>
      </div>
      <div className='text-white text-[13.5vw] kanit-extrabold w-full text-center py-24' style={{ lineHeight: "11vw" }}>
        <h1>LETS WORK</h1>
        <h1>TOGETHER</h1>
      </div>
      <div className="w-full flex justify-center item-center">
        <button
          onClick={handleButtonClick}
          className='text-black bg-white py-2 px-5 rounded-md font-semibold'
        >
          Discuss Project
        </button>
      </div>
    </div>
  )
}

export default Contacts;
