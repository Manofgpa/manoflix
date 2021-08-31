import React from 'react'
import Actor from '../../components/Actor'
import { Container, Box, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        background: '#0B2027',
        marginTop: '2em',
        marginBottom: '2em',
        padding: '1.5em',
        color: '#ccc',
    },
    poster: {
        height: '20%',
        margin: '0 0.5em',
    },
    actors: {
        display: 'flex',
    },
    casting: {
        background: '#0B2027',
        marginTop: '2em',
        marginBottom: '2em',
        padding: '1.5em',
        color: '#ccc',
    },
})

const MediaSlider = ({ cast }) => {

    const classes = useStyles()

    return (
        <Container className={classes.casting}>
            <Box>
                <h1 style={{ display: 'block' }}>Casting</h1>
            </Box>
            <Container className={classes.actors}>
                <Box className={classes.actors}>
                    {cast.map(actor => (
                        <Actor actor={actor} key={actor.id} />
                    ))}
                </Box>
            </Container>
        </Container>
    )
}

export default MediaSlider