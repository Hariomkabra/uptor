const Navbar = () => {
  return (
    <nav className="bg-black shadow-sm fixed w-full z-50 border-b border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-yellow-400">U</span>
              <span className="text-white">ptor</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
