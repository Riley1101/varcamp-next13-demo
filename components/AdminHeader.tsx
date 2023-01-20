import Image from "next/image";

function AdminHeader() {
  return (
    <header className="w-full bg-theme-accent-opaque h-[4em]   flex items-center p-4 rounded-lg border  border-gray-800">
      <Image
        className="border border-gray-800 rounded-full cursor-pointer outline-gray-800 outline"
        src="/admin.jpg"
        width={45}
        height={45}
        alt="var camp logo"
      ></Image>
      <input
        type="text"
        placeholder="Search"
        className="px-6 py-2 mx-auto transition-all duration-500 border border-none rounded-full outline-none focus:placeholder:text-theme-accent text-theme-primary hover:bg-gradient-to-r hover:from-theme-accent-opaque hover:border-gray-800 border-theme-accent-opaque bg-theme-accent-opaque"
      />
      <span className="px-4 py-1 text-sm border border-gray-800 rounded-full cursor-pointer hover:bg-gray-800 bg-theme-accent-opaque">
        Logout
      </span>
    </header>
  );
}

export { AdminHeader };
