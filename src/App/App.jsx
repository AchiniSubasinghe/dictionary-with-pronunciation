import React, { useState } from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import SearchBar from "../common/component/SearchBar/SearchBar";
import WordDefinition from "../common/component/WordDefinition/WordDefinition";

export default function App() {
  const [wordData, setWordData] = useState(null);

 
  const handleSearch = async (word) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
    );
    const data = await response.json();
    setWordData(data[0]);
  } catch (error) {
    console.error("Error fetching word:", error);
  }
};

return (
    <Container maxWidth="md" sx={{ minHeight: "100vh", py: 8 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
        <Box textAlign="center">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#22DD22" }}>
            Free Dictionary
          </Typography>
          {/* <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
            Search for word definitions & listen to pronunciation
          </Typography> */}
          <SearchBar onSearch={handleSearch} />
          {wordData && <WordDefinition wordData={wordData} />}
        </Box>
      </Paper>
    </Container>
  );
}


