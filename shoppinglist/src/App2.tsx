import { useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddItem from './components/AddItem';

import './App.css';

export type Item = {
  product: string;
  amount: string;
}

function App(){

  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([item, ...items]);
  }

  return(
    <>
      <Container>
        <AppBar position='static'>
          <ToolBar>
            <Typography variant="h6">
              장바구니
            </Typography>
          </ToolBar> 
        </AppBar>
        <AddItem addItem={addItem} />
      </Container>
    </>

  );

}

export default App