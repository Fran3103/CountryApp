import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import type { CCard } from "../types/index"


type Props = {country: CCard}

const CountryCard: React.FC<Props>  = ({country}) => {
  return (
   <Card className="w-60 h-80 dark:text-blue-white text-blue-default bg-blue-white dark:bg-blue-dark" >
      <CardActionArea>
        <CardMedia
          component="img"
          
          image={country.flagPng}
          alt={country.name}
          className="h-40 w-full"
        />
        <CardContent className="dark:text-blue-white text-blue-default">
          <Typography gutterBottom variant="h5" component="div" className="dark:text-blue-white text-blue-default">
            {country.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} className="dark:text-blue-white text-blue-default">
           <span>Population: </span>  {country.population}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} className="dark:text-blue-white text-blue-default">
           <span>Region: </span>   {country.region}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} className="dark:text-blue-white text-blue-default">
           <span>Capital: </span> {country.capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CountryCard