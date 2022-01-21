import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

const NotFound = () => (
  <Card>
    <CardHeader title="Not Found" />
    <CardContent>
      <h3>Not found what you wanted to see. Try different route.</h3>
    </CardContent>
  </Card>
);

export default NotFound;
