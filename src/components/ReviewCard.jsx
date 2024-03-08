import { star } from "../assets/icons"

const ReviewCard=({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL}
         alt="customre"
         className="rounded-full object-cover"
         width={120}
         height={120}
         />
         <p className="mt-6 mx-w-sm text-center info-text">{feedback}</p>
         <div className="mt-3 flex justify-center items-center gap-2">
            <img src={star}
            width={25}
            height={25}
            className="object-contain m-0"
             alt="" />
             <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
             <h3 className="mt-1 font-palanquin text-center font-bold text-3xl">{customerName}</h3>
         </div>

    </div>
  )
}

export default ReviewCard