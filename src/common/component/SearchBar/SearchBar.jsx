import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";


export default function SearchBar({ onSearch }) {
  const [word, setWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.trim()) {
      onSearch(word);
      setWord("");
    }
  };

return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2 }}>
      <TextField
        fullWidth
        label="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ fontWeight: "bold", backgroundColor: "#22DD22" }}>
        Search
      </Button>
    </Box>
  );
}
