import React from "react";
import {
  Card,CardContent,Typography,Button,Chip,Divider,Stack,
} from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function WordDefinition({ wordData }) {
  const { word, phonetics, meanings } = wordData;

  const audio = phonetics.find((p) => p.audio);

  const playAudio = () => {
    if (audio && audio.audio) {
      new Audio(audio.audio).play();
    }
  };

return (
    <Card
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 4,
        boxShadow: 4,
        textAlign: "left",
        backgroundColor: "#f9f9f9",
      }}
    >
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textTransform: "capitalize" }}
          >
            {word}
          </Typography>

          {audio && (
            <Button
              variant="contained"
              color="success"
              startIcon={<VolumeUpIcon />}
              onClick={playAudio}
            >
              Listen
            </Button>
          )}
        </Stack>

        <Divider sx={{ my: 2 }} />

        {meanings.map((meaning, idx) => (
          <div key={idx} style={{ marginBottom: "1.5rem" }}>
            <Chip
              label={meaning.partOfSpeech}
              color="primary"
              variant="outlined"
              sx={{ mb: 1 }}
            />

            <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
              {meaning.definitions.map((def, i) => (
                <li key={i} style={{ marginBottom: "0.5rem" }}>
                  <Typography variant="body1">{def.definition}</Typography>
                </li>
              ))}
            </ul>

            {idx < meanings.length - 1 && <Divider sx={{ my: 2 }} />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

