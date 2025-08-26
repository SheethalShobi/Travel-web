import { useEffect, useState } from 'react';
import { getUserProfile } from '../api/userApi';
import { Box, Typography } from '@mui/material';

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserProfile(1).then(res => setUser(res.data)); // assuming user id=1
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Profile</Typography>
      <Typography>Name: {user.name}</Typography>
      <Typography>Email: {user.email}</Typography>
    </Box>
  );
}
