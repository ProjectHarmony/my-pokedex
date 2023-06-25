import React from 'react'
import { Card, Container, Grid, Stack, Typography } from '@mui/material'
import { useQuery, gql } from "@apollo/client";


const GET_POKEMON = gql`
query pokemons($first: Int = 10){
    pokemons(first: $first){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`



const PokeAPI = () => {

    const { loading, error, data } = useQuery(GET_POKEMON)

    if (loading) return <p>Loading...</p>

    if (error) return <p>There was an Error</p>

    console.log(data);
    return (
        <Container>

            <Grid container direction="row"
                justifyContent="center"
                alignItems="center" >
                {
                    data.pokemons.map(pokemon => {
                        return <div>
                            <Container>
                            <Card sx={{ p: '1rem', mb: 2, mx: 2, width: '20rem', height: '16rem', mt: 3,  }}>

                                <Grid container spacing={10}>
                                    <Grid item xs={4}>
                                        <img src={pokemon.image}  style={{ width: '6rem' }} alt={pokemon.name} />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Stack direction="column"
                                            justifyContent="flex-start"
                                            alignItems="flex-start"
                                            spacing={1}>
                                            <Typography variant='subtitle2'>#{pokemon.number}</Typography>
                                            <Typography variant='subtitle2' sx={{fontWeight:'bold'}}>{pokemon.name}</Typography>
                                            <Typography variant='subtitle2'>Classification: </Typography>
                                            <Typography>{pokemon.classification}</Typography>
                                            <Typography variant='subtitle2'>Types: {pokemon.types}</Typography>
                                            <Typography variant='subtitle2'>Height: {pokemon.height.minimum} ~ {pokemon.height.maximum}</Typography>
                                            <Typography variant='subtitle2'> Weight: {pokemon.weight.minimum} ~ {pokemon.weight.maximum}</Typography>

                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Card>
                            </Container>
                        </div>
                    })
                }

            </Grid>

        </Container>
    )
}

export default PokeAPI