import {star} from '../assets/icons/index'

const ReviewCard = ({imgUrl,customerName, rating, feedback}) => {
  return (
    <div className="text-center">
        <img src={imgUrl} alt=""  className="h-44 w-44 rounded-full mx-auto"/>
        <p className="max-w-sm info-text my-6">{feedback}</p>
        <span className='flex justify-center items-center gap-x-4 my-4'> <img src={star} alt="" /> {rating}</span>
        <h3 className="text-2xl font-bold ">{customerName}</h3>
    </div>
  )
}

export default ReviewCard