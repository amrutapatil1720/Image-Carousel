import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ImageCarousel from './components/wrapComponent/ImageCarousel';

function App() {
  return (
    <Provider store={store}>
      <ImageCarousel />
    </Provider>
  );
}

export default App;
