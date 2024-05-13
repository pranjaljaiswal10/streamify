


const HomePageShimmer = () => {
  return (<div className="animate-pulse">
  {
    Array(12).fill(" ").map((item)=>{
     <div>
     <div className="bg-gray-200 h-[153px] w-[273px]"></div>
     <div className="flex">
      <div className="rounded-full h-4 w-4 bg-gray-200"></div>
      <div className="rounded-lg bg-gray-200"></div>
     </div>
     </div>
    })
  }
  </div>)
};

export default HomePageShimmer;
