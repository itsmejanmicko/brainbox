// Navbar.tsx
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { constant } from '../../config/constant';
import CartSection from '../section/CartSection';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className="container flex items-center justify-between h-16 gap-4">
          <a href="/" className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="font-bold text-xl">{constant.NAV_LINK.SHOP}</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a
                href="/"
                className={`text-sm font-medium hover:underline underline-offset-4 ${isActive('/') ? 'text-blue-500' : ''}`}
            >
              {constant.NAV_LINK.HOME}
            </a>
            <a
                href="/product"
                className={`text-sm font-medium hover:underline underline-offset-4 ${isActive('/product') ? 'text-blue-500' : ''}`}
            >
              {constant.NAV_LINK.PRODUCT}
            </a>
            <a
                href="/categories"
                className={`text-sm font-medium hover:underline underline-offset-4 ${isActive('/categories') ? 'text-blue-500' : ''}`}
            >
              {constant.NAV_LINK.CATEGORIES}
            </a>
            <a
                href="/about"
                className={`text-sm font-medium hover:underline underline-offset-4 ${isActive('/about') ? 'text-blue-500' : ''}`}
            >
              {constant.NAV_LINK.ABOUT}
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex items-center">
              <input
                  type="search"
                  placeholder="Search..."
                  className="w-[200px] md:w-[300px] border py-1 rounded-md"
              />
              <button type="submit" className="icon-button">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </button>
            </form>
            <button
                onClick={handleOpenCart}
                className="icon-button">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Open cart</span>
            </button>
            <button className="icon-button md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
            <nav className="md:hidden border-t p-4">
              <div className="flex flex-col space-y-4">
                <a
                    href="/"
                    className={`text-sm font-medium hover:underline underline-offset-4 ${isActive('/') ? 'text-blue-500' : ''}`}
                >
                  {constant.NAV_LINK.HOME}
                </a>
                <a
                    href="/product"
                    className={`text-sm font-medium hover:underline underline-offset-4 ${isActive('/product') ? 'text-blue-500' : ''}`}
                >
                  {constant.NAV_LINK.PRODUCT}
                </a>
                <a
                    href="/categories"
                    className={`text-sm font-medium hover:underline underline-offset-4 ${isActive('/categories') ? 'text-blue-500' : ''}`}
                >
                  {constant.NAV_LINK.CATEGORIES}
                </a>
                <a
                    href="/about"
                    className={`text-sm font-medium hover:underline underline-offset-4 ${isActive('/about') ? 'text-blue-500' : ''}`}
                >
                  {constant.NAV_LINK.ABOUT}
                </a>
                <form className="flex items-center">
                  <input
                      type="search"
                      placeholder="Search..."
                      className="w-full"
                  />
                  <button type="submit" className="icon-button">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
            </nav>
        )}
        <CartSection isCartOpen={isCartOpen} handleOpenCart={handleOpenCart} />
      </header>
  );
}
