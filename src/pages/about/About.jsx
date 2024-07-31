import "./About.css"
import OurStory from "../../components/ourStory/OurStory"
import Statistics from "../../components/statistics/Statistics"
import Team from "../../components/team/Team"
import Services from "../../components/services/Services"

const About = () => {
  return (
    <div className='about'>
      <OurStory />
      <Statistics />
      <Team />
      <Services />
    </div>
  )
}

export default About