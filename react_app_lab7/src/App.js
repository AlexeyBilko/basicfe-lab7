import React from 'react';

import Header from './components/Header';
import { Content } from './components/Content';
import Image from './components/Image';
import Task2 from './components/task2';

function App() {
  return (
    <div>
      {/* Завдання №1 */}
      <Header/>
      <Content/>
      <Image/>
      
      {/* Завдання №2 */}
      <Task2/> {/*GoodsCard*/ }
    </div>
  );
}

export default App;
