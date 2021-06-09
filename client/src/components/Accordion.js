import React, { useState, Fragment } from 'react';
import { Typography, Box } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const clacRepos = ({userData}) => {
	let total = 0;
	let endFound = false;

	while (!endFound) {
		if (userData[`repo_name_${total}`]) {
			total++;
		} else {
			endFound = true;
		}
	}

  console.log(total);

	return total;
}

const Accordion = withStyles({
 root: {
	 	boxShadow: 'none'
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
		padding: '0px',
    marginBottom: -1,
    minHeight: 56,
		borderTop: '1px solid #dcdcdc',
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
     margin: '5px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
		display: 'inline-block',
  },
}))(MuiAccordionDetails);

function RepoAccordion(data) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
		<Box width="100%">
      <Accordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary 
					aria-controls="paneld-content" 
					expandIcon={<ExpandMoreIcon />}
					id="paneld-header">
					<Typography component="p">Repositories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {
            [...Array(clacRepos(data))].map((_, index) => {
                return <Fragment>
                    <Typography component="p">{data.userData[`repo_name_${index}`]}</Typography>
                    <Typography component="p">{data.userData[`repo_desc_${index}`]}</Typography>
                    <Typography component="a" href={data.userData[`repo_url_${index}`]}>Visit</Typography>
                  </Fragment>
            })
          }
        </AccordionDetails>
      </Accordion>
		</Box>
  );
}

export default RepoAccordion;
