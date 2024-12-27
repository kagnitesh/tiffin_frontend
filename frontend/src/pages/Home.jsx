import Header from '@/components/Header';
import Footer from './Footer';
import SpecialDish from '@/components/SpecialDish';
import SpecialDishSection from '@/components/SpecialDishSection';
import Working from '@/components/Working';
import { Link } from 'react-router-dom';
import SectionHeader4 from '@/components/SectionHeader4';


export default function Home() {
  const colaborateContent = 'Collaborate with us to provide delicious lunch, dinner, tea, coffee, and breakfast for your employees. We also offer catering services for company events and parties, tailored to your needs.';
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main className="flex-grow">
        <div className="bg-light-yellow bg-opacity-30 pb-16">
          <SpecialDish className="container mx-auto" />
        </div>

        <SpecialDishSection />
        
        <div className="mt-8">
          <SectionHeader4 text={colaborateContent} color={"white"} textColor={"#111111"} />

          <div className="flex flex-wrap justify-center container mx-auto mt-6">
            <div className="lg:w-1/2 w-full p-4 relative">
              <img
                className="w-full md:h-auto h-[380px] object-cover rounded-2xl"
                src={'collaborate/bg-2.png'}
                alt="Collaborate with us"
              />
              <div className="absolute top-0 left-0 bottom-0 py-12 pl-10 w-full pr-10 md:w-2/3">
                <div className="flex flex-col items-start justify-center h-full">
                  <h3 className="text-xl text-[#553F1C]">Elevate Your</h3>
                  <h1 className="text-4xl font-semibold mb-3 text-[#553F1C]">Office Breaks!</h1>
                  <p className="text-base text-[#795A28]">Refresh your team with our premium tea and coffee service.</p>
                  <Link
                    className="rounded-full inline-block bg-[#795A28] text-black px-7 py-4 mt-7"
                    to={'/contact'}
                  >Contact us</Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full p-4 relative">
              <img
                className="w-full md:h-auto h-[380px] object-cover rounded-2xl"
                src={'collaborate/bg-1.png'}
                alt="Collaborate with us"
              />
              <div className="absolute top-0 left-0 bottom-0 py-12 px-10 w-full md:w-2/3">
                <div className="flex flex-col items-start justify-center h-full">
                  <h3 className="text-xl text-[#FFA31E]">Host the Perfect</h3>
                  <h1 className="text-4xl font-semibold mb-3 text-[#FFA31E]">Office Party!</h1>
                  <p className="text-base text-white">Turn your office celebrations into unforgettable experiences with our end-to-end party solutions.</p>
                  <Link
                    className="rounded-full inline-block bg-[#FFA31E] text-white px-7 py-4 mt-7"
                    to={'/contact'}
                  >Contact us</Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full p-4 relative">
              <img
                className="w-full md:h-auto h-[380px] object-cover rounded-2xl"
                src={'collaborate/bg-3.png'}
                alt="Collaborate with us"
              />
              <div className="absolute top-0 left-0 bottom-0 py-12 pl-10 w-full pr-10 md:w-2/3">
                <div className="flex flex-col items-start justify-center h-full">
                  <h3 className="text-xl text-[#FFA31E]">Collaborate with Us for</h3>
                  <h1 className="text-4xl font-semibold mb-3 text-[#FFA31E]">Perfect Tiffins!</h1>
                  <p className="text-base text-white">Transform your workplace with our hassle-free tiffin service, delivering healthy meals to your employees every day.</p>
                  <Link
                    className="rounded-full inline-block bg-[#FFA31E] text-black px-7 py-4 mt-7"
                    to={'/contact'}
                  >Contact us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{background: `url('/banner.png')`, backgroundSize: 'cover'}} className="container rounded-xl my-20">
          <div className="p-20">
            <h1 className="text-white text-4xl mb-3">The fastest</h1>
            <h1 className="text-white text-5xl font-semibold mb-3">Delivery <span className="text-primary">Food</span></h1>
            <Link
              className="btn-order"
              to={'/menu'}
            >Order now</Link>
          </div>
        </div>

        <Working/>
      </main>

      <Footer />
    </div>
  );
}
