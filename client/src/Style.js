import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
	  flexGrow: 1,
	},

	tabs: {
		borderBottom: '1px solid #dcdcdc'
	},

	tab : {
		padding: 0
	},

	aTag: {
		width: '100%',
		height: '100%',
		textDecoration: "none",
	},

	headerMain: {
		padding: 40,
	},

	title: {
		fontSize: 29,
		paddingBottom: 10
	},

	subTitle: {
		fontSize: 20
	},

	user: {
		minWidth: 550,
		maxWidth: 550,
		marginTop: 40
	},

	p: {
		padding: "3px 0",
	},

	paper: {
		margin: 70,
		minWidth: 600,
		maxWidth: 600,
		minHeight: 700,
		borderTop: "4px solid #dcdcdc",
	}
});

export default useStyles;
