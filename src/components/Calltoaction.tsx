import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const CallToAction = () => {
  const { register, handleSubmit, reset } = useForm<{ email: string }>();

  const onSubmit = (data: { email: string }) => {
    console.log(data);
    toast.success("You've Subscribed to our news letter successfully!");
    reset();
  };

  return (
    <div 
      className="w-full " 
      style={{
        backgroundImage: "url('./transBg.png')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center ">Get Our Updates</h1>
        <p className="pt-2 pb-8 text-xl antialiased text-center ">Find out about events and other news</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
          <input type="text" placeholder="example@email.com" {...register("email")} className="w-3/5 p-3 rounded-l-lg sm:w-2/3 bg-white border-2  border-gray-300" />
          <button type="submit" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-600 text-gray-50">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;