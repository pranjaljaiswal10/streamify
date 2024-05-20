import { IoImage } from "react-icons/io5";

const HomePageShimmer = () => {
  return (
  
  <div className="animate-pulse sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
    {
      Array(12).fill(" ").map((item,index)=>(
     <div key={index} className="m-2 p-2 w-72">
     <div className="bg-gray-400 h-[153px] w-[273px] rounded-lg flex justify-center items-center">
      <IoImage className="bg-gray-400"/>
     </div>
     <div className="flex mt-3">
      <div className="rounded-full h-12 w-12 bg-gray-400"></div>
      <div className="ml-1">
      <div className="rounded bg-gray-400 h-4 w-52 mb-3"></div>
      <div className="rounded bg-gray-400 h-4 w-32 mb-3"></div>
      </div>
     </div>
     </div>
      ))
}
  </div>)
};

export default HomePageShimmer;
