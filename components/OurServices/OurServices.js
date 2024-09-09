import React from 'react'
import { Card } from '../ui/card';

const OurServices = () => {
  return (
    <section id="services" className="bg-slate-50 py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="space-y-6">
        <div className="animate-fade-up">
          <h2 className="text-3xl font-bold text-black tracking-tighter sm:text-4xl">Our Services</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
          {`We offer a wide range of sustainability and risk assessment services to help organizations achieve
          their goals.`}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-up">
          <Card className="p-6 space-y-4">
            <HazeIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">HAZID</h3>
            <p className="text-muted-foreground">
              Comprehensive hazard identification to proactively manage risks.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <HazeIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">HAZOP</h3>
            <p className="text-muted-foreground">
              In-depth analysis of potential hazards and operability issues.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <HazeIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">SIL Assessment</h3>
            <p className="text-muted-foreground">
              Determine the required Safety Integrity Level for your systems.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <HazeIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">Quantitative Risk Assessment</h3>
            <p className="text-muted-foreground">Comprehensive analysis of risks and their potential impacts.</p>
          </Card>
          <Card className="p-6 space-y-4">
            <HazeIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">ESG Services</h3>
            <p className="text-muted-foreground">
              {`Helping organizations achieve their environmental, social, and governance goals.`}
            </p>
          </Card>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurServices


function ChevronDownIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
      </svg>)
    );
  }
  
  
  function HazeIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m5.2 6.2 1.4 1.4" />
        <path d="M2 13h2" />
        <path d="M20 13h2" />
        <path d="m17.4 7.6 1.4-1.4" />
        <path d="M22 17H2" />
        <path d="M22 21H2" />
        <path d="M16 13a4 4 0 0 0-8 0" />
        <path d="M12 5V2.5" />
      </svg>)
    );
  }
  
  
  function MenuIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>)
    );
  }