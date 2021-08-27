import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    height: 450,
    width: 225,
    margin: '0 5px',
    transition: 'transform 300ms ease 100ms',
    transform: 'translateX(-20%)',
  },
  media: {
    widht: 200,
    height: 325,
  },
})

const Actor = ({
  actor: { profile_path, name, character, known_for_department },
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/original/${profile_path}`}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography>As {character}</Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {known_for_department}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Actor
