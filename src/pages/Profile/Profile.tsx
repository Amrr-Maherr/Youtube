import { User, Video, PlayCircle, Clock, Calendar, Mail, Globe } from "lucide-react";

const Profile = () => {
  return (
    <div className="mx-auto">
      {/* Channel Banner */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-xl mb-6" />

      {/* Channel Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 px-4">
        <div className="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-16 h-16 text-gray-400" />
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-bold mb-2">My Channel</h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400 text-sm mb-4">
            <span>@mychannel</span>
            <span>•</span>
            <span>1.2M subscribers</span>
            <span>•</span>
            <span>245 videos</span>
          </div>
          <p className="text-gray-300 max-w-2xl mb-4">
            Welcome to my channel! Here you'll find amazing content about technology, tutorials, and entertainment. 
            Subscribe to stay updated with the latest videos.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Subscribe
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Join
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800 mb-6 px-4">
        <div className="flex gap-8">
          <button className="pb-3 border-b-2 border-white font-medium text-white">
            Videos
          </button>
          <button className="pb-3 border-b-2 border-transparent text-gray-400 hover:text-white transition-colors">
            Shorts
          </button>
          <button className="pb-3 border-b-2 border-transparent text-gray-400 hover:text-white transition-colors">
            Playlists
          </button>
          <button className="pb-3 border-b-2 border-transparent text-gray-400 hover:text-white transition-colors">
            Community
          </button>
          <button className="pb-3 border-b-2 border-transparent text-gray-400 hover:text-white transition-colors">
            About
          </button>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((video) => (
          <div key={video} className="cursor-pointer group">
            <div className="aspect-video bg-gray-800 rounded-xl mb-3 overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-gray-600 group-hover:to-gray-700 transition-colors flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-gray-500" />
              </div>
              <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                10:{(video * 23).toString().padStart(2, "0")}
              </span>
            </div>
            <div className="flex gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex-shrink-0 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm line-clamp-2 mb-1 text-white">
                  Amazing Video Title {video} - Tutorial for Beginners 2026
                </h3>
                <p className="text-gray-400 text-xs hover:text-white transition-colors">My Channel</p>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <span>125K views</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video} days ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
