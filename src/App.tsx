import React from 'react';
import { SimplePageTemplate } from './theme/SimplePageTemplate';
import { MonitoringPage } from './containers/MonitoringPage/MonitoringPage';

function App() {
  return (
    <SimplePageTemplate>
      <MonitoringPage />
    </SimplePageTemplate>
  );
}

export default App;