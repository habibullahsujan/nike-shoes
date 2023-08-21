import { Button } from "../components/index";
const Subscribe = () => {
  return (
    <div className="block lg:flex gap-x-10">
      <div className="flex-1">
        <h2 className="text-4xl font-bold">
          Sign Up for <span className="text-coral-red">Updates</span> &
          Newsletter
        </h2>
      </div>
     <div className="flex-1">
     <div className="flex justify-between border px-6 py-3 rounded-full border-black mx-auto">
        <input type="email" className="outline-none" placeholder="subscribe@nike.com" />
        <Button label={"Sign Up"} />
      </div></div> 
    </div>
  );
};

export default Subscribe;
