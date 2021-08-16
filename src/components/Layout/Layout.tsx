import { FC } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Layout.scss';

const Layout: FC = ({ children }) => (
  <div className='Layout'>
    <Header />
    <main className='Layout__main'>
      <div className='Layout__main-content'>{children}</div>
      <Footer />
    </main>
  </div>
);

export default Layout;
