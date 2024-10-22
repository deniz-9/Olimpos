const Loading = () => {
  return (
    <div className="relative py-32 font-Montserrat font-bold ">
      <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full top-24 flex items-center justify-center">
        <div className="flex flex-col-reverse justify center items-center gap-12">
          <span className="text-3xl text-darkblue1"></span>
          <svg
            className="animate-spin h-32 w-32 text-blue2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Loading;
