import React from 'react';
import { Box, Image } from 'rebass';
import './bio.css';
import bioTitle from '../../static/bio.svg'
import { bioContent } from './bio.json';

const Bio = () => (
    <div className='bio'>
         <Box width={[0.6, 0.5, 0.4, 0.35]} ml='auto' mr='auto' className='page-title'>
            <Image src={bioTitle} alt="my projects" />
        </Box>
        <Box width={[0.95, 0.7, 0.6, 0.5]} className='bio-content'>
            {
                bioContent.map(({line}) => (
                    <p>{line}</p>
                ))
            }
        </Box>
    </div>
)

export default Bio;