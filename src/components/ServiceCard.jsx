const ServiceCard = ({ imgUrl,subText, label }) => {
  
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className="bg-coral-red h-11 w-11 rounded-full flex items-center justify-center">
        <img src={imgUrl} alt="" className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold  my-5 font-palanquin">{label}</h3>
      <p className="info-text">{subText}</p>
    </div>
  );
};

export default ServiceCard;
