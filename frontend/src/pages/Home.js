import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3">Welcome to TravelWorld</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Explore your next holiday or flight!</Typography>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" component={Link} to="/holidays" sx={{ mr: 2 }}>View Holidays</Button>
        <Button variant="contained" component={Link} to="/flights">Book Flights</Button>
      </Box>
    </Box>
  );
}
