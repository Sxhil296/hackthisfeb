import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
    <div name='questions' className='w-full py-6 px-4'>
      <div className='max-w-[1140px] mx-auto '>
        <h1 className='text-[#d04d29] text-8xl font-bold'>Questions</h1>
      </div>
      <div className='max-w-[1140px] text-white mx-auto grid md:grid-cols-1 mt-10 mb-10'>
            
      <Fragment >
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)}>
         Q- Can I participate remotely?
        </AccordionHeader>
        <AccordionBody>
          Hack This Feb is an in-person hackathon. So remote participation is not applicable.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Q- What is the maximum team size? 
        </AccordionHeader>
        <AccordionBody>
          We encourage you to make a team of minimum 2 and maximum 4 members. If you are a Solo Hacker and do not have a team, you can still register and participate alone.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Q- How much does it cost to participate?
        </AccordionHeader>
        <AccordionBody>
          Each ticket will cost you 189 rupess.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(4)}>
         Q- What is the time duration of HackThisFeb?
        </AccordionHeader>
        <AccordionBody>
          Hack This Feb will start by 10 AM in the morning and end by 3 PM.
        </AccordionBody>
      </Accordion>
    </Fragment>
            

        </div>
    </div>
  );
}