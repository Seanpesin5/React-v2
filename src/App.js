import React from 'react';
import FormComponent from './comps/FormComponent';
import HeaderComponent from './comps/HeaderComponent';
import { FormProvider } from './context/FormContext';
import './App.css';
const App = () => {
  return (
      <FormProvider>
          <div className="App">
              <HeaderComponent />
              <FormComponent />
          </div>
      </FormProvider>
  );
}

export default App;