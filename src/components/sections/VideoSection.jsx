import { useState } from 'react';
import { Play, X } from 'lucide-react';
import WatchStory from '../../assets/LandingImages/watch-story.jpg';

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        id="video"
        className="relative  bg-gray-900 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${WatchStory})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <div className="max-w-2xl lg:max-w-3xl text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-medium text-white mb-4">
                See Our Healthcare Excellence in Action
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-12">
                Watch how we deliver world-class medical care with compassion and expertise
              </p>

               <div
                className="inline-block justify-center items-center bg-[purple] rounded-2xl p-6 sm:p-8 cursor-pointer group"
                onClick={() => setIsVideoOpen(true)}
               >
                <div className="flex items-center justify-center ml-4 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 " fill="currentColor" />
                </div>
                <p className="text-white mt-3 sm:mt-4 font-semibold text-sm sm:text-base">
                  Watch Our Story
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full h-full max-w-none">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nstyX0Fo2yc"
              title="Healthcare Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
