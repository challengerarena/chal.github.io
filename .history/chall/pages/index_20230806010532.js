import CustomHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <CHead />
      <Header />

      <main>
        {/* Ana sayfa içeriğini buraya ekleyin */}
        <h1>Merhaba, Dünya!</h1>
      </main>

      <Footer />
    </div>
  );
}

export default Home;