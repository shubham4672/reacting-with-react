const Navbar = () => {
  return (
    <>
      <nav className='flex justify-around bg-black text-white py-2'>
        <div className='logo'>
          <span className='font-semibold text-2xl cursor-default'>iTask</span>
        </div>
        <ul className='flex gap-14 items-center'>
          <li className='text-md cursor-pointer hover:text-gray-300'>Home</li>
          <li className='text-md cursor-pointer hover:text-gray-300'>
            Your Tasks
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
