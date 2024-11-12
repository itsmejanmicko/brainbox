import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/common/Navbar.tsx";
import Footer from "./components/common/Footer.tsx";
import Terms from "./components/common/Terms.tsx";
import Contact from './components/common/Contact.tsx';
import { Toaster } from "sonner";
import { ProtectedRoute } from "./hooks/ProtectedRoute.tsx";
import { AuthProvider } from "./hooks/AuthContext.tsx";

// Lazy-loaded pages
const Login = lazy(() => import('./components/page/LoginPage'));
const Signup = lazy(() => import('./components/page/SignupPage'));
const Home = lazy(() => import('./components/page/HomePage'));
const ProductPage = lazy(() => import('./components/page/ProductPage'));
const LearnPage = lazy(() => import('./components/page/LearnPage'));
const Categories = lazy(() => import('./components/page/CategoriesPage.tsx'));
const AboutPage = lazy(() => import("./components/page/AboutPage.tsx"));

export default function App() {
    return (
        <AuthProvider>
            <main>
                <Toaster />
                <div className="ml-3 mr-3">
                    <Navbar />
                </div>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />

                        <Route
                            path="/product"
                            element={
                                <ProtectedRoute>
                                    <ProductPage />
                                </ProtectedRoute>
                            }
                        />

                        {/* Protected Routes for LearnPage and Categories */}
                        <Route
                            path="/product/get/:id"
                            element={
                                <ProtectedRoute>
                                    <LearnPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/categories"
                            element={
                                <ProtectedRoute>
                                    <Categories />
                                </ProtectedRoute>
                            }
                        />

                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>

                <div className="ml-3 mr-3">
                    <Footer />
                </div>
            </main>
        </AuthProvider>
    );
} 