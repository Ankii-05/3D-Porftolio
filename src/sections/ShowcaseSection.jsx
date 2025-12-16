import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import { expCards } from '../constants'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
    
    
    const projects = [project1Ref.current, project1Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y:50, opacity:0
            },
            {
                y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )
    })
    useGSAP(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      );
    }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <a
                href="https://resumexpert-frontend.onrender.com/"
                target="_blank"
              >
                <img src={project1} alt="Resume Xpert" />
              </a>
            </div>
            <div className="text-content">
              <h2>Build Job-Winning Resumes using ResumeXpert</h2>
              <p className="text-white-50 md:text-xl">
                ResumeXpert is a professional resume builder designed to create
                ATS-optimized resumes that get past automated screening systems
                and into the hands of recruiters. Build job-winning resumes with
                proper formatting, keyword optimization, and industry-standard
                structure.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <a href="https://pokemon-showcase.onrender.com/" target='_blank'>
                  <img src={project2} alt="Pokemon Showcase" />
                </a>
              </div>
              <div>
                <h2>Pokedex - A Pokemon Showcase </h2>
              </div>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <a href="https://food-website-nwnp.onrender.com" target='_blank'>
                  <img src={project3} alt="Food Delivery Application" />
                </a>
              </div>
              <div>
                <h2>Food Deliver Application</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection