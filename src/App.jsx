import CouponBanner from './components/CouponBanner'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/index.scss'

function App() {
  return (
    <>
      <CouponBanner />
      <Header />
      
      <main>
        <h1>Welcome to Skinthia - React Version!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eum possimus sequi, mollitia culpa vel fuga fugiat facere velit voluptatem quo quas sed consequuntur adipisci incidunt tempora aut aliquid totam!</p>
      </main>
      
      <Footer />
    </>
  );
}

export default App;