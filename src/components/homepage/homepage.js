import React from 'react';
import { Box, Image } from 'rebass';
import './homepage.css';
import nameLogo from '../../static/nameLogo.svg';
import resume from '../../static/resume.pdf';

const Homepage = () => (
    <div className='homepage'>
        <Box width={[0.9, 0.7, 0.7, 0.6]} className="name_title">
            <Image src={nameLogo} alt="Nicholas Meisburger" />
        </Box>
        <div className='resume-btn'>
            <a href={resume} target='_blank'>
                <Box width={[140, 200]}>
                    <div className='resume-link'>
                        <h2 className='resume-link-text'>my resume{' '}<img src={`https://icon.now.sh/arrow/87ADC6/13`} /></h2>
                    </div>
                </Box>
            </a>
        </div>
    </div>
)

export default Homepage;