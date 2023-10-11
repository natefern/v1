import About from './components/home/About'
import SkillSet from './components/home/SkillSet/Skills'
import Certs from './components/home/SkillSet/Certs'
import Contact from './components/home/Contact/Contact'

export default function Home() {

  var aboutMsg = "My commitment to staying at the forefront of ServiceNow's evolving technology allows me to drive efficiency, enhance user experiences, and deliver tangible results. Whether it's designing complex business rules, developing Service Portal widgets, or integrating ServiceNow with external systems, I thrive on helping businesses achieve their implementation goals."
  var whatIm = "I'm a ServiceNow Developer"
  return (
    <main>
      <div className="px-10 hero min-h-screen">
        <div className="bg-transparent hero-content flex-col lg:flex-row-reverse">
          <div>
            <p className='pb-4 text-accent'>Hello, my name is</p>
            <h1 className="text-3xl pb-2 md:text-5xl font-bold text-base-100 inline-flex">Nathan Fernandez</h1>
            <h1 className="text-2xl pb-4 md:text-4xl font-bold text-secondary">{whatIm}</h1>
            <p className="pb-10 text-secondary">{aboutMsg}</p>
            <a href='#about'><button className="btn btn-outline btn-accent">Learn More</button></a>
          </div>
        </div>
      </div>
      <About></About>
      <SkillSet></SkillSet>
      <Certs></Certs>
      <Contact></Contact>
    </main>
  )
}
