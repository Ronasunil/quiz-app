function UserAvatar() {
  return (
    <div className="flex justify-center items-center gap-2 py-2 px-4  shadow-md shadow-indigo-200 hover:shadow-md hover:shadow-indigo-500 hover:cursor-pointer transition-all duration-300  rounded-lg  ">
      <img
        className="h-11 w-11 rounded-full"
        src="https://i.ibb.co/0jhT2pzb/default-icon.webp"
        alt=""
      />
      <span className="text-xl font-normal">Rona</span>
    </div>
  );
}

export default UserAvatar;
