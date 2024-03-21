
import { Banner, Blog, News, Services, Shop } from '@/compoments'
const HomePage = () => {
  return (
    <div>
      <Banner />
      <News />
      <div className="container">
        <hr />
      </div>
      <Shop />
      <Blog />
      <Services />
    </div>
  );
};

export default HomePage;
