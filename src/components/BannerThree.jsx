


const BannerThree = ({ jewelleryInfo }) => {

  
    return (
      <div>
        <div className={`grid grid-cols-2 w-full ${jewelleryInfo.color} py-6 h-[80vh] place-items-center`}>
          <div className='mt-10 text-white flex flex-col items-start pl-12'>
            <div className='text-5xl font-bold'>
              {jewelleryInfo.heading}
  
            </div>
            
            <div className="text-lg">
              {jewelleryInfo.subheading}
   
            </div>
          </div>
  
          <div>
            <img className="object-cover max-w-[600px] rounded-lg mt-4 max-h-[800px] pl-10" src={jewelleryInfo.img}></img>
          </div>
  
        </div>
      </div>
    )
  }
  
  export default BannerThree ;