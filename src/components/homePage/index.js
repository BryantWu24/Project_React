import React from 'react';
import { Grid, } from 'semantic-ui-react'

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
