import React, { useState } from 'react';
import { Box, Card, Typography } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';


// Set the worker for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Standar = ({ pdfUrl }) => {
    // Log PDF URL to console
    console.log('PDF URL:', pdfUrl); // Ensure this logs the correct URL

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                paddingX: '5rem',
                paddingY: '3rem',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'start',
                    width: '100%',
                    marginY: '4rem',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                <Typography variant="h1" sx={{ fontWeight: '500', fontSize: '2.5rem' }}>
                    Lorem ipsum dolor.
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: '500', fontSize: '1rem' }}>
                    Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                </Typography>
            </Box>
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <Typography>
                    Page {pageNumber} of {numPages}
                </Typography>
        </Box>
    );
};

export default Standar;
