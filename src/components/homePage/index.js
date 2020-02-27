import React from 'react';
import { Grid, } from 'semantic-ui-react';
import CarouselComponent from './carousel';

import MenuHeader from '../menu/index';

function HomePage() {
  return (
    <Grid>
    <Grid.Row style={{}}>
        <Grid.Column width={16} >
        <MenuHeader/>
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column width={16} >
            <div style={{display:'flex', padding:'30px',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
<CarouselComponent/>
</div>
</Grid.Column>
    </Grid.Row>
     {/* <Grid.Row style={{padding:'0 0'}}>
         <Grid.Column width={3} style={{height:'95VH',borderStyle:'solid'}}>
        
         </Grid.Column>
         <Grid.Column width={13}></Grid.Column>
     </Grid.Row> */}
  </Grid>
  );
}

export default HomePage;
