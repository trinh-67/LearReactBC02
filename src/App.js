import logo from './logo.svg';
import './App.css';

import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';

import DataBinding from './DataBinding/DataBinding'; 
import BTHeader from './components/BaiTapLayout/BTHeader';
import ProductList from './components/BaiTapLayout/ProductList';
import Slider from './components/BaiTapLayout/Slider';
import BannerSale from './components/BaiTapLayout/BannerSale';
import DemoData from './DataBinding/DemoData';



function App() {
  return (
    <div className="App">
      <BaiTapLayout />
      <BTHeader />
      <DataBinding />
      <DemoData />
      <Slider />
      <ProductList />
      <BannerSale />
      
    </div>
  );
}

export default App;
