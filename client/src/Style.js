import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	user: {
		minWidth: 550,
		maxWidth: 550,
		marginTop: 40
	},

	title: {
		fontSize: 29,
	},

	headerMain: {
		padding: 40,
	},

	root: {
	  flexGrow: 1,
	},

	aTag: {
		width: '100%',
		height: '100%',
		textDecoration: "none",
	},

	p: {
		padding: "10px 0",
	},

	paper: {
		margin: 40,
		minWidth: 600,
		maxWidth: 600,
		minHeight: 700,
		borderTop: "12px solid #dcdcdc",
	}

});


export default useStyles;
