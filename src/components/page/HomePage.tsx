
import Footer from "../common/Footer";
import { constant } from "../../config/constant";
import ProductsSection from "../section/ProductsSection";
import brain from '../../assets/brain.jpg'

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen pl-2 pr-4 font-mono">
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src={brain}
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                   {constant.NAV_LINK.DISCOVER}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                   {constant.NAV_LINK.DESCRIPTION}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="/products" className="btn btn-primary bg-primary text-white px-5 py-4 hover:bg-primary/80">{constant.NAV_LINK.SHOP_NOW}</a>
                  <a href="/categories" className="btn btn-secondary py-4">{constant.NAV_LINK.SHOP_NOW}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
       <ProductsSection />
      </main>
    </div>
  );
};

export default HomePage;
