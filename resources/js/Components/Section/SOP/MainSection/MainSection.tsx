import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Standar = () => {
    const pdfUrl = "http://127.0.0.1:8000/pdf/Design_process_and_design_evaluation.pdf";
    
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
            {/* Section for Text */}
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

            {/* Section for PDF Viewer */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginY: '2rem',
                    flexDirection: 'column',
                }}
            >
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <Typography sx={{ marginTop: '1rem' }}>
                    Page {pageNumber} of {numPages}
                </Typography>
            </Box>
        </Box>
    );
};

export default Standar;
