import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  return (
    <section className="px-2 lg:px-20">
      <div className="mb-11">
        <h3 className="text-4xl font-bold font-palanquin capitalize text-center">
          What our <span className="text-coral-red">customers</span> say?
        </h3>
        <p className="info-text text-center max-w-lg mx-auto my-4">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className="block lg:flex justify-between items-center">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} imgUrl={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
