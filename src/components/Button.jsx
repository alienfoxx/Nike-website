

const Button=({label,iconURL}) => {
  return (
    <button className="flex justify-center items-center text-lg font-montserrat px-7 py-4 border gap-2 leading-none bg-coral-red rounded-full text-white border-coral-red">
        {label}
        <img src={iconURL}
         alt="arrow right icon" 
         className="ml-2 rounded-full w-5 h-5"
         />

    </button>
  )
}

export default Button