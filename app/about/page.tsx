import {
  FirstSlide,
  SecondSlide,
  ThirdSlide,
  FourthSlide,
} from './components/molecules';

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
      <section>5</section>
    </>
  );
}
