type Props = {};
const Card = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2 group ">
      <div className="object-cover w-full transition-all duration-300 border border-gray-800 cursor-pointer group-hover:bg-theme-accent-opaque rounded-xl aspect-video bg-gradient-to-t from-theme-accent-opaque to-theme-primary-opaque"></div>
      <div className="w-full h-4 border rounded-md border-theme-accent-opaque bg-gradient-to-r from-theme-primary-opaque "></div>
      <div className="w-3/5 h-4 border rounded-md border-theme-accent-opaque bg-gradient-to-r from-theme-primary-opaque "></div>
    </div>
  );
};

export { Card };
