const Triangle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="darkGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="6" />
          <feFlood floodColor="#a1c4fd" floodOpacity="1" result="floodOut" />
          <feComposite
            in="floodOut"
            in2="blurOut"
            operator="in"
            result="compOut"
          />
          <feMerge>
            <feMergeNode in="compOut" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>

          <feOffset result="offOut2" in="SourceAlpha" dx="0" dy="0" />
          <feGaussianBlur result="blurOut2" in="offOut2" stdDeviation="10" />
          <feFlood floodColor="#a1c4fd" floodOpacity="1" result="floodOut2" />
          <feComposite
            in="floodOut2"
            in2="blurOut2"
            operator="in"
            result="compOut2"
          />
          <feMerge>
            <feMergeNode in="compOut2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

export default Triangle;
