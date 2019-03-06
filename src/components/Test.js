import React, { Component } from 'react';
import timeData from '../timeData';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

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
    modalStyle: {
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        marginTop: '40vh',
        margin: 'auto'
    }
});

class Test extends Component {

    constructor() {
        super()
        this.state = {
            data: timeData,
            open: false
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(id) {
    //     // console.log(id)
    // }

    handleOpen = (id) => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {

        const { classes } = this.props;

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
                            {this.state.data.map(times => (
                                <TableRow key={times.id} onClick={() => this.handleOpen(times.id)} hover>
                                    <TableCell component="th" scope="row" align="center">{times.time}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className={classes.modalStyle}>
                        <Typography variant="h6" id="modal-title">
                            Text in a modal
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                        {/* <SimpleModalWrapped /> */}
                    </div>
                </Modal>
            </div>
        );
    }
}

Test.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Test);
