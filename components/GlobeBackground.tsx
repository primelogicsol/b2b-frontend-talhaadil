export default function GlobeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 w-[200%] h-full animate-globe-spin opacity-10">
        {/* This SVG is a simplified world map outline. For a more detailed globe,
                you might consider a 3D library like Three.js, but for a subtle background,
                this animated SVG provides the desired effect. */}
        <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M999.5 250C999.5 388.375 775.875 499.5 500 499.5C224.125 499.5 0.5 388.375 0.5 250C0.5 111.625 224.125 0.5 500 0.5C775.875 0.5 999.5 111.625 999.5 250Z"
            stroke="#e2e8f0"
            strokeOpacity="0.1"
          />
          <path d="M500 0.5V499.5" stroke="#e2e8f0" strokeOpacity="0.1" />
          <path d="M0.5 250H999.5" stroke="#e2e8f0" strokeOpacity="0.1" />
          <path
            d="M250 0.5C388.375 0.5 499.5 111.625 499.5 250C499.5 388.375 388.375 499.5 250 499.5C111.625 499.5 0.5 388.375 0.5 250C0.5 111.625 111.625 0.5 250 0.5Z"
            stroke="#e2e8f0"
            strokeOpacity="0.1"
          />
          <path
            d="M750 0.5C888.375 0.5 999.5 111.625 999.5 250C999.5 388.375 888.375 499.5 750 499.5C611.625 499.5 500.5 388.375 500.5 250C500.5 111.625 611.625 0.5 750 0.5Z"
            stroke="#e2e8f0"
            strokeOpacity="0.1"
          />
          {/* Add more paths for landmass outlines if desired */}
          <path d="M300 100C350 50 450 50 500 100C550 150 650 150 700 100" stroke="#e2e8f0" strokeOpacity="0.1" />
          <path d="M200 400C250 350 350 350 400 400C450 450 550 450 600 400" stroke="#e2e8f0" strokeOpacity="0.1" />
        </svg>
      </div>
    </div>
  )
}
