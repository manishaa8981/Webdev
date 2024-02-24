import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import HomeNavbar from "./homenavbar.tsx";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
import Carousel from "./carousel.tsx";
import {Heart} from "lucide-react";

const ProductCard=() => {
    return (
        <>
            {/*<HomeNavbar/>*/}
            <Carousel/>
          <div className={"body"}>
              <div className={"category-list"}><Sheet
                  variant="outlined"
                  sx={{
                      width: 320,
                      maxHeight: 400,
                      overflow: 'auto',
                      borderRadius: 'sm',
                  }}>
                  <List>
                      {[...Array(5)].map((_, categoryIndex) => (
                          <ListItem nested key={categoryIndex}>
                              <ListSubheader sticky>Category {categoryIndex + 1}</ListSubheader>
                              <List>
                                  {[...Array(10)].map((__, index) => (
                                      <ListItem key={index}>
                                          <ListItemButton>Subitem {index + 1}</ListItemButton>
                                      </ListItem>
                                  ))}
                              </List>
                          </ListItem>
                      ))}
                  </List>
              </Sheet></div>

<div className={"product-list"}  style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    {[...Array(4)].map((_, index) => (

        <Card key={index} sx={{ width: 'calc(25% - 20px)', maxWidth: '100%', boxShadow: 'lg' }}>
        <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
                <img
                    src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
        </CardOverflow>
        <CardContent>
            <Typography level="body-xs">Bluetooth Headset</Typography>
            <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
            >
                Super Rockez A400
            </Link>

            <Typography
                level="title-lg"
                sx={{ mt: 1, fontWeight: 'xl' }}
            >
                2,900 THB
            </Typography>

        </CardContent>
            <CardOverflow
                style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' , marginBottom:'2px'}}>
                <Button variant="solid" color="danger" size="lg">
                    Add to cart
                </Button>
                <div>
                    <Heart/>
                </div>
            </CardOverflow>
        </Card>
    ))}
</div>
          </div>

        </>
    );
}
export default ProductCard
