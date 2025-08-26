import { useState } from 'react';
import { getRecommendation } from '../api/recommendationApi';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

export default function Recommendation() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    getRecommendation(query).then(res => setResult(res.data.recommendation));
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">AI Travel Assistant</Typography>
      <TextField
        label="Ask me something"
        fullWidth
        sx={{ mt:2 }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" sx={{ mt:2 }} onClick={handleSubmit}>Get Recommendation</Button>
      {result && <Paper sx={{ mt:3, p:2 }}>{result}</Paper>}
    </Box>
  );
}
