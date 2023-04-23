import TemplatePointers from "./TemplatePointers"
import intro from "./intro.png"
import logo from "./logo192.png"
import { TypeAnimation } from "react-type-animation"
function LandingIntro() {

  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <div className='text-3xl text-center font-bold '> 
            <TypeAnimation
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em', textAlign: 'center', marginTop: '1rem', color: 'White' }}
              sequence={['Study Share', 5000, ' ', 5000, 'Study Share',
              ]}
            />
          </div>


          <div className="text-center mt-12"><img src={intro} alt="StudyShare" className="w-48 inline-block"></img></div>

          <TemplatePointers />

        </div>

      </div>
    </div>
  )

}

export default LandingIntro