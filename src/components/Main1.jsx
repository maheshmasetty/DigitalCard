import Info from './info';
import Interests from './interests';
import About from './about';

export default function Main() {
  return (
    <main className='main'>
      <Info />
      <About />
      <Interests />
    </main>
  );
}