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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class Test extends Component {

    constructor() {
        super()
        this.state = {
            data: timeData,
            open: false,
            firstName: "",
            lastName: "",
            phone: "",
            timeId: 0
        }
    }

    handleOpen = (id) => {
        this.setState(prevState => {
            return {
                open: true,
                timeId: id
            }
        })
    };

    handleClose = (id) => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    submitHandle = () => {
        this.setState(prevState => {
            const updatedData = prevState.data.map(times => {
                if (times.id === this.state.timeId) {
                    times.submitted = true;
                } return times;
            }) 

            return {
                data: updatedData,
                open: false,
            }
        })
        console.log(this.state.timeId)
    }

    render() {

        const { classes } = this.props;
        const submittedStyle = {
            backgroundColor: "red"
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
                            {this.state.data.map(times => (
                                <TableRow key={times.id} onClick={() => this.handleOpen(times.id)} hover style={{ cursor: "pointer" }}>
                                    <TableCell component="th" scope="row" align="center" style={times.submitted ? submittedStyle : null}>{times.time}</TableCell>
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
                        <form className={classes.container} noValidate autoComplete="off">
                            <Typography variant="h6" className={classes.tableTitle}>
                                Please enter the following information:
                            </Typography>
                            <TextField
                                id="standard-name"
                                label="First Name"
                                className={classes.textField}
                                value={this.state.firstName}
                                onChange={this.handleChange('firstName')}
                                margin="normal"
                            // name="firstName"
                            />
                            <TextField
                                id="standard-name"
                                label="Last Name"
                                className={classes.textField}
                                value={this.state.lastName}
                                onChange={this.handleChange('lastName')}
                                margin="normal"
                            // name="lastName"
                            />
                            <TextField
                                id="standard-name"
                                label="Phone"
                                className={classes.textField}
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}
                                margin="normal"
                            // name="phone"
                            />
                            <Button variant="outlined" color="primary" fullWidth={true} onClick={this.submitHandle}>
                                Submit
                            </Button>
                        </form>
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
