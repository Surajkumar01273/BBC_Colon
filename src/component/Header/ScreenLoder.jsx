import React from "react";
import Loader from '../Header/Loader';

const LoadingScreen = () => {
  return (
    <div className="p-6 space-y-4 lg:grid lg:grid-cols-3 gap-4">
    
      <Loader width="w-full" height="h-[200px]" />
      
    
      <Loader width="w-3/4" height="h-[200px]" />
      
   
      <Loader width="w-full" height="h-[200px]" />
      <Loader width="w-5/6" height=" lg:h-20 h-[180px]" />
      <Loader width="w-2/3" height="lg:h-20 h-[160px]" />

      <Loader width="w-60" height="h-16" rounded="rounded-lg" />

    </div>
  );
};

export default LoadingScreen;
