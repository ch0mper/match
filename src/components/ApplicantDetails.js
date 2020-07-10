import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Avatar from '@material-ui/core/Avatar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const ApplicantDetails = ({ applicant }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar style={{ backgroundColor: '#3f51b5' }}>
          {applicant.name[0]}
        </Avatar>
        <div style={{ marginLeft: 8, fontSize: '1.2rem' }}>
          {applicant.name}
        </div>
      </div>
    </AccordionSummary>
    <AccordionDetails style={{ flexDirection: 'column', marginTop: -8 }}>
      <div>Location: {applicant.location}</div>
      <div>Business: {applicant.businessName}</div>
      <div>Revenue: ${applicant.revenue}</div>
      <div>Industry: {applicant.industry}</div>
      <div>No. of employees: {applicant.employees}</div>
      <div>{applicant.businessDescription}</div>
    </AccordionDetails>
  </Accordion>
)

export default ApplicantDetails
