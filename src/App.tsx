
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/common/Navbar.tsx";
import Footer from "./components/common/Footer.tsx";


const Login = lazy(() => import('./components/page/LoginPage'));
const Signup = lazy(() => import('./components/page/SignupPage'));
const Home = lazy(() => import('./components/page/HomePage'));
const ProductPage = lazy(() => import('./components/page/ProductPage'));
const LearnPage = lazy(()=>import('./components/page/LearnPage'));
const Categories = lazy(()=>import('./components/page/CategoriesPage.tsx'))

export default function App() {
  return (
      <main>
         <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                  <Route path = "/product" element={<ProductPage />} />
                  <Route path = "/product/get/:id" element={<LearnPage />} />
                  <Route path = "/categories" element={<Categories />} />
              </Routes>
            </Suspense>
          <Footer />
      </main>
  );
}
