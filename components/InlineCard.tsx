const InlineCard = () => {
  return (
    <div className="flex object-cover w-full gap-4 p-2 border-gray-800 rounded-md cursor-pointer hover:bg-gradient-to-t to-theme-accent-opaque from-gray-900">
      <div className="w-32 border border-gray-800 rounded-md aspect-video rouned-md bg-theme-primary-opaque"></div>
      <div className="flex flex-col w-full gap-2">
        <div className="h-4 border-gray-800 rounded-md md:w-3/5 rouned-md bg-theme-accent-opaque"></div>
        <div className="h-4 border-gray-800 rounded-md md:w-2/5 rouned-md bg-theme-accent-opaque"></div>
        <div className="w-1/2 h-4 border-gray-800 rounded-md md:w-3/6 rouned-md bg-theme-accent-opaque"></div>
      </div>
    </div>
  );
};

export { InlineCard };
