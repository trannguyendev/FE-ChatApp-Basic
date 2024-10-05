const ProfileSection = () => {
  return (
    <div className="w-1/4 bg-white shadow-lg">
      <div className="p-4 text-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto"></div>
        <div className="mt-4 font-bold">Dianne Jhonson</div>
        <div className="text-sm text-gray-600">Junior Developer</div>
        <div className="mt-4">
          <button className="p-2 bg-blue-500 text-white rounded w-full">
            View Friends
          </button>
          <button className="p-2 bg-blue-500 text-white rounded w-full mt-2">
            Add to Favorites
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="font-bold">Attachments</div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="p-2 bg-gray-200 rounded text-center">PDF</div>
          <div className="p-2 bg-gray-200 rounded text-center">VIDEO</div>
          <div className="p-2 bg-gray-200 rounded text-center">MP3</div>
          <div className="p-2 bg-gray-200 rounded text-center">IMAGE</div>
        </div>
        <div className="mt-4">
          <button className="p-2 bg-blue-500 text-white rounded w-full">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
