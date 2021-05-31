import React,{useState} from 'react';

//material UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles({
    root: {
    //   width: 500,
    },
});


const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('codedBy');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Developed By Nitin" value="codedBy" icon={<CodeIcon />} />
            <BottomNavigationAction label="Available at Github" value="GitHubIcon" icon={<GitHubIcon />} />
            <BottomNavigationAction label="Follow on Linkedin" value="LinkedInIcon" icon={<LinkedInIcon />} />
            <BottomNavigationAction label="Hosted on Live Server" value="LanguageIcon" icon={<LanguageIcon />} />
        </BottomNavigation>
    )
}

export default Footer
