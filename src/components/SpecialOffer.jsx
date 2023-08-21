
import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import {Button} from '../components/index'
const SpecialOffer = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row '>
      <div className='flex-1'>
        <img src={offer} alt=""  width={773}
          height={687}
          className='object-contain w-full'/>
      </div>
      <div className='flex-1 flex-col flex gap-y-8'>
        <h3 className='text-4xl font-bold font-palanquin'><span className='text-coral-red'>Special</span> Offer</h3>
        <p className='info-text '>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='flex flex-wrap gap-5'>
          <Button label={'Shop now'} iconURL={arrowRight}/>
          <button className='text-slate-500 border border-slate-500 rounded-full px-8 py-3 text-lg font-semibold '>Learn more</button>
        </div>
      </div>
      
    </section>
  );
};

export default SpecialOffer;
