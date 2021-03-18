import React, { useEffect } from 'react'
import AccountHeader from '../components/AccountHeader';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(19.5),
        fontFamily: 'Montserrat',
        fontWeight: 500,
        color: '#29293a'
    }
}));

function Faqs(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <React.Fragment>
            <AccountHeader show={props.show} />
            <div className="container wrapper">
                <div className="text-center mb-4">
                    <h2 style={{ fontFamily: 'Montserrat' }}>Frequently Asked Questions</h2>
                </div>
            </div>

            <div className="d-flex justify-content-center faqs-page-questions">
                <div className={classes.root}>

                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>How will I pay to mDhobi?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: 'Montserrat' }} variant="p">
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Can I have a fast laundry delivery service?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>What if I am not at home when you drop the laundry?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Can I get the garments ironed after wash?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>How clean is your store?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: 'Montserrat' }} variant="p">
                            The cleanliness of our store is our pride. In fact we have special team to handle the cleanliness of the store. <br/>
                            You will never find a better laundry destination than LaundroKart in Bangalore.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Can I have a fast laundry delivery service?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>What if I am not at home when you drop the laundry?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Can I get the garments ironed after wash?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>How will I pay to mDhobi?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: 'Montserrat' }} variant="p">
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Can I have a fast laundry delivery service?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>What if I am not at home when you drop the laundry?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Can I get the garments ironed after wash?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>How will I pay to mDhobi?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: 'Montserrat' }} variant="p">
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Can I have a fast laundry delivery service?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>What if I am not at home when you drop the laundry?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Can I get the garments ironed after wash?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>


            <br />
            <br />
            <Footer />
        </React.Fragment>
    )
}

export default Faqs
