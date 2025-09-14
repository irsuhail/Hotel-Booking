import React from 'react'

<<<<<<< HEAD
const Title = ({ title, subTitle, align, font }) => {
    return (
        <div className={`flex flex-col justify-center items-center text-center ${align === "left" && " md:items-start md:text-left"}`}>
            <h1 className={` text-4xl md:text-[40px] ${font || "font-playfair"}`}>{title}</h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</p>
        </div>
    )
=======
const Title = ({title,subTitle,align,font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align==="left" && "md:items-start md:text-left"}`}>
        <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}>{title}</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</p>

    </div>
  )
>>>>>>> d07792d39304ee2987ae2083b0117e9192edd37f
}

export default Title
