import Header from '@/components/Header';
import Footer from './Footer';
import SpecialDish from '@/components/SpecialDish';
import SpecialDishSection from '@/components/SpecialDishSection';
import Working from '@/components/Working';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main className="flex-grow">
        <SpecialDish className="container mx-auto p-16" />
        <SpecialDishSection className="my-16"/>



        <Link to={'/menu'} className=' my-16 relative px-4 md:px-0'>
          <img className=' mx-auto my-4' src="Section.png" alt="" />          
        </Link>

        <Working/>
      </main>

      <Footer />
    </div>
  );
}