import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  const handleClick = () => {
    const userChoice = window.confirm("Do you want to visit my GITHUB profile?");
    if (userChoice) {
      window.location.href = 'https://github.com/SALHASAID';
    } else {
      const link = document.createElement('a');
      link.href = '/Resume/SALHA_ANALYST_RESUME(1).pdf'; // Update this path to your CV file
      link.download = 'SALHA_ANALYST_RESUME(1).pdf'; // The name of the file to be downloaded
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <Layout>
      <Section grid>
        <Hero handleClick={handleClick}/>
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
