// ** MUI Imports
import * as S from './CardVerticalRatingsStyles';
import * as T from '../Text/TextStyles';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { ProkerType } from '../Section/Kementrian/type';



type Props = {
    content: ProkerType;
};

const CardVerticalRatings = ({ content }: Props) => {
    return (
        <Card sx={{ 
            backgroundColor: '#FFF9F9'
         }}>
            <S.StyledCardVerticalRatings>
                <CardContent className="card-content">
                    <Box
                        sx={{
                            mb: 5,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            flexDirection: 'column',
                            fontFamily: "open sans",
                        }}
                    >
                        <Typography
                        variant='h5'
                            sx={{
                                textAlign: 'center',
                                fontFamily: 'open sans',
                                fontWeight: 600,
                        }}
                        >
                            { content.judul }
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            mb: 3.25,
                            color: 'text.primary',
                            textAlign: 'center',
                            fontFamily: 'open sans',
                        }}
                    >
                        {content.deskripsi_proker}
                    </Typography>
                </CardContent>
            </S.StyledCardVerticalRatings>
        </Card>
    );
};

export default CardVerticalRatings;
