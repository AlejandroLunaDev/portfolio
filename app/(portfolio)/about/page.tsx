
import {
  FirstSlide,
  SecondSlide,
  ThirdSlide,
  FourthSlide,
  FifthSlide,
} from './components';

export default function About() {
  return (
    <>
      <section>
        <FirstSlide />
      </section>
      <section>
        <SecondSlide />
      </section>
      <section>
        <ThirdSlide />
      </section>
      <section>
        <FourthSlide />
      </section>
      <section>
        <FifthSlide />
      </section>
    </>
  );
}
