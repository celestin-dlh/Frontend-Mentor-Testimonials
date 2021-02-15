import './styles/App.css'
import Testimonial from './Testimonial'
import DanielImage from './assets/image-daniel.jpg'
import JeanetteImage from './assets/image-jeanette.jpg'
import JonathanImage from './assets/image-jonathan.jpg'
import KiraImage from './assets/image-kira.jpg'
import PatrickImage from './assets/image-patrick.jpg'

const testimonials = [
  {
    name: "Daniel Clifford",
    verifiedGraduate: true,
    title: `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.`,
    text: `“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
    transition and have heard some people who had an amazing experience here. I signed up 
    for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
    The next 12 weeks was the best - and most grueling - time of my life. Since completing 
    the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”`,
    image: DanielImage,
    colStart: 1,
    colEnd: 3,
    backgroundColor: 'hsl(263, 55%, 52%)',
    textColor: '#CFCFCF',
    borderColor: '#A775F1',
    haveQuote: true
  },
  {
    name: "Jonathan Walters",
    verifiedGraduate: true,
    title: `The team was very supportive and kept me motivated`,
    text: `“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
    for a big company. This was one of the best investments I’ve made in myself. ”`,
    image: JonathanImage,
    colStart: 3,
    colEnd: 4,
    backgroundColor: 'hsl(217, 19%, 35%)'
  },

  {
    name: "Jeanette Harmon",
    verifiedGraduate: true,
    title: `An overall wonderful and rewarding experience`,
    text: `“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
    while doing something I love. ”`,
    image: JeanetteImage,
    rowStart: 2,
    rowEnd: 3,
    nameColor: '#48556A',
    titleColor: '#48556A',
    textColor: '#48556A',
  },
  {
    name: "Patrick Abrams",
    verifiedGraduate: true,
    title: `Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.`,
    text: `“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
    gave me the confidence necessary to be able to go out in the world and present myself as a capable 
    junior developer. The standard is above the rest. You will get the personal attention you need from 
    an incredible community of smart and amazing people. ”`,
    image: PatrickImage,
    rowStart: 2,
    rowEnd: 3,
    colStart: 2,
    colEnd: 4,
    backgroundColor: 'hsl(219, 29%, 14%)',
    titleColor: '#ECF2F8',
    borderColor: '#733FC8'
  },
  {
    name: "Kira Whittle",
    verifiedGraduate: true,
    title: `Such a life-changing experience. Highly recommended!`,
    text: `“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
    professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
    student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
    did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
    project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
    could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
    experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
    100% recommend! ”`,
    image: KiraImage,
    rowStart: 1,
    rowEnd: 3,
    nameColor: '#48556A',
    titleColor: '#48556A',
    textColor: '#48556A',
  },
]

function App() {
  return (
    <div className="container">
      <div className="card">
        {testimonials.map(testimonial => (
          <Testimonial
            {...testimonial} 
            key={testimonial.name}
          />
        ))}
      </div>
    </div>
  )
}

export default App
