import CustomAccordion from "@/Components/Custom-Component/overrides/accordion"
import { AccordionDetails, AccordionSummary, Icon, Typography } from "@mui/material"


const Test =()=> {
  return (
    <>
    <CustomAccordion>
        <AccordionSummary
          id='panel-header-1'
          aria-controls='panel-content-1'
          
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </CustomAccordion>
    </>
  )
}

export default Test
