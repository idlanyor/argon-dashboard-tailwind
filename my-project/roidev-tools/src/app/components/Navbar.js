export default function Navbar() {
  return (
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-semibold">Logo</a>

          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:text-gray-200">Beranda</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Tentang Kami</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Layanan</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Kontak</a></li>
          </ul>
        </div>
      </nav>
  )
}