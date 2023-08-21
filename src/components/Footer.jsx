import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images/index";
import { footerLinks, socialMedia } from "../constants/index";
const Footer = () => {
  return (
    <>
    <section className="flex justify-between items-start gap-20 text-white flex-wrap max-lg:flex-col">
      <div className=" flex flex-col gap-5">
        <img src={footerLogo} alt="" height={46} width={150} />
        <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="flex items-center gap-x-4">
          {socialMedia.map((icon) => (
            <div key={icon.alt} className="bg-white p-2 rounded-full">
              <img src={icon.src} alt={icon.alt} height={24} width={24} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        {footerLinks.map((link) => (
          <div key={link.title}>
            <h3 className="text-2xl font-bold mb-5 font-montserrat">{link.title}</h3>
            {link.links.map((lk) => (
              <div key={lk.name} className="my-4">
                <a href={lk.link} className=" font-palanquin text-lg hover:underline">{lk.name}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
      
    </section>
    <div className="flex lg:flex-row flex-col justify-between text-white items-center">
       <div  className=" flex items-center gap-4 mt-8">
       <img src={copyrightSign} alt="" />
        <p>Copyright. All rights reserved.</p>
       </div>
       <p>Terms & Condition</p>
      </div>
    </>
  );
};
 
export default Footer;
