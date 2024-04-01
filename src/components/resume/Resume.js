import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; // import makeStyles
import { Typography, Link } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import ResumePDF from './../../assets/Mongkol.pdf';
import { ResumeIcon } from '../content/ResumeButton';
import TranscriptPDF from './../../assets/transcript.pdf';
import { TranscriptIcon } from '../content/TranscriptButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <>
    <Link
        color='inherit'
        underline='none'
        href={`${ResumePDF}`}
        target='_blank'
        rel='noopener noreferrer'
        className={`${classes.footerText}`}

        style={{ marginLeft: '9px',marginBottom:'70px' }} // เพิ่ม marginBottom เพื่อเพิ่มระยะห่างระหว่าง elements
      >
        <ResumeIcon className={classes.icon} />
        <Typography component='span'>
          <TextDecrypt text={'Resume'} />
        </Typography>
      </Link>

      <Link
        color='inherit'
        underline='none'
        href={`${TranscriptPDF}`}
        target='_blank'
        rel='noopener noreferrer'
        className={`${classes.footerText}`}
        style={{ marginTop: '20px',marginLeft: '1px' }} // เพิ่ม marginTop เพื่อเพิ่มระยะห่างระหว่าง elements
      >
        <TranscriptIcon className={classes.icon} />
        <Typography component='span'>
          <TextDecrypt text={'Transcript'} />
        </Typography>
      </Link>
    </>
  );
};


