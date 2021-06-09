import React, { useState, Fragment } from 'react';
import {
	Typography,
	Button, } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function RepoAccordion(data) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary aria-controls="paneld-content" id="paneld-header">
					<Button> Repos ({data.repos})</Button>
        </AccordionSummary>
        <AccordionDetails>
					{
						<Fragment>
							<p>{data.userData.repo_desc_0}</p>
							<p>{data.userData.repo_url_0}</p>
						</Fragment>
						//data.userData && Object.keys(data.userData).map(prop => {
						//	console.log(data.userData[prop[1]])
						//	return <Typography>{data.userData[prop]}</Typography>
						//})
					}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default RepoAccordion;
