type Props = {};
const Card = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="object-cover w-full border border-gray-800 rounded-xl aspect-video bg-gradient-to-t from-theme-accent-opaque to-theme-primary-opaque"></div>
      <div className="w-full h-4 border rounded-md border-theme-accent-opaque bg-gradient-to-r from-theme-primary-opaque "></div>
      <div className="w-3/5 h-4 border rounded-md border-theme-accent-opaque bg-gradient-to-r from-theme-primary-opaque "></div>
    </div>
  );
};

export { Card };
