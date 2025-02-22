import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-500">
          MyWebsite
        </Link>
        <div className="flex gap-4">
          <Link href="/login" className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">
            Login
          </Link>
          <Link href="/signup" className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-400">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
