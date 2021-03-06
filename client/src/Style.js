import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},

	tabs: {
		borderBottom: '1px solid #dcdcdc'
	},

	tab : {
		padding: 0,
		height: '100%'
	},

	goToCode: {
		position: 'relative',
		left: '47%',
		color: '#a0a0a0',
		'&:hover': {
			color: 'blue'
		},
		'@media (max-width: 700px)': {
			left: '45%'
		}
	},

	aTag: {
		width: '100%',
		height: '100%',
		textDecoration: "none",
		padding: '11px 0',
	},

	headerMain: {
		padding: 25
	},

	title: {
		fontSize: 29,
		paddingBottom: 10
	},

	subTitle: {
		fontSize: 20
	},

	fieldset: {
		all: 'unset'
	},

	user: {
		minWidth: 550,
		'@media (max-width:700px)': {
			minWidth: 350,
		  },
		maxWidth: 550,
		marginTop: 40,
		marginRight: 10,
		marginLeft: 10
	},

	repoBox: {
		paddingBottom: 15
	},

	p: {
		padding: "3px 0",
	},

	paper: {
		margin: 70,
		minWidth: 600,
		'@media (max-width:700px)': {
			minWidth: 350,
		},
		maxWidth: 600,
		minHeight: 200,
		paddingBottom: 25,
		borderTop: "4px solid #dcdcdc",
	},

	content: {
		alignItems:"center",
		justifyContent:"center",
		maxWidth: 992,
		margin: "auto",
		marginTop: 30,
	  },
	  paperAbout: {
		padding: theme.spacing(1),
		margin: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	  },
	  paragraph: {
		padding: theme.spacing(5, 20),
		'@media (max-width:700px)': {
			padding: theme.spacing(5),
		  },
		margin: theme.spacing(3),
		textAlign: 'left',
		color: theme.palette.text.secondary,
		"& h1":{
			textAlign: 'center',
		}
	},

	contact: {
		padding: theme.spacing(1),
		margin: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},

	button: {
		padding: theme.spacing(1, 5),
		margin: theme.spacing(3),
	},

	paragraphError: {
		padding: theme.spacing(0, 30),
		'@media (max-width:1050px)': {
			padding: theme.spacing(0, 15),
		  },
		  '@media (max-width:700px)': {
			padding: theme.spacing(0),
		  },
		margin: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		"& h1":{
			textAlign: 'center',
		},
		"& img":{
			width: "100%",
		}
	},

	accordionSum: {
		padding: theme.spacing(0, 1)
	}
}));

export default useStyles;
