import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function TheLogo(props) {
    return (
        <Container>
            <Box
                sx={{

                    backgroundColor: props.color,
                }}
            >
                <Grid container

                >
                   <img src={props.logoUrl} width="200" />

                </Grid>
            </Box>
        </Container>



    )
}