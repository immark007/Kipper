import ImgMain from "../../../../public/Component 1.svg";

export default function Main() {
  return (
    <div className="flex flex-col lg:flex-row justify-around p-2">
      <div className="flex order-2 flex-col justify-center text-center md:px-4 lg:text-left lg:px-5 lg:p-2 xl:order-1 2xl:max-w-3xl">
        <p className="text-lg mt-2 uppercase tracking-widest text-titleGray  lg:text-xl xl:text-2xl font-semibold">kipper consultoria</p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl xl:max-w-3xl 2xl:text-7xl font-bold text-title">
          A consultoria que você busca para seu software
        </h1>
      </div>

      <div className="mt-8 order-1 flex flex-col justify-center items-center lg:mt-0 lg:order-2">
        <img 
          src={ImgMain} 
          alt="img-main" 
          className="w-full bg-transparent max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:w-92 2xl:w-full 2xl:mr-9"
        />
      </div>
    </div>
  );
}
