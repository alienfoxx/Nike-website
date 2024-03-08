import{Hero,CustomersReviews,PopularProducts, Services,SpecialOffers,Subscribe,SuperQuality, Footer} from'./sections';

import Nav from './components/Nav';


const App =() => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />

    </section>
    <section className="padding">
      <PopularProducts />

    </section>
    <section className="padding">
      <SuperQuality />

    </section>
    <section className="padding-x py-10">
      <Services />

    </section>
    <section className="padding">
      <SpecialOffers />

    </section>
    <section className="padding bg-pale-blue">
     <CustomersReviews />

    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />

    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />

    </section>

  </main>
);
export default App;