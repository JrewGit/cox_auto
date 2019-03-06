import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    tableTitle: {
        marginTop: '5vh',
        marginLeft: '3vh'
    },
    root: {
        width: '70vw',
        marginTop: '10vh',
        margin: 'auto',
        overflowX: 'auto',
    },
});

let id = 0;
function createData(name) {
    id += 1;
    return { id, name };
}

const rows = [
    createData('9:00am - 10:00am'),
    createData('10:00am - 11:00am'),
    createData('11:00am - 12:00pm'),
    createData('12:00pm - 1:00pm'),
    createData('1:00pm - 2:00pm'),
    createData('2:00pm - 3:00pm'),
    createData('3:00pm - 4:00pm'),
    createData('4:00pm - 5:00pm'),
];

function Footer(props) {
    const { classes } = props;

    function handleClick() {
        console.log('Something else')
    }
    return (
        <div>
            <Typography variant="h5" className={classes.tableTitle}>
                Please choose from the following time slots:
            </Typography>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" scope="row" align="center">Time Slots Available:</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id} hover onClick={handleClick}>
                                <TableCell component="th" scope="row" align="center">{row.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
