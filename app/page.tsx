"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getCorretoras } from "@/app/lib/api";
import { CorretoraCard } from "@/app/components/CorretoraCard";
import {
  corretorasAtom,
  errorAtom,
  filteredCorretorasAtom,
  loadingAtom,
  searchTermAtom,
} from "@/app/lib/atoms";

export default function Home() {
  const [corretoras, setCorretoras] = useAtom(corretorasAtom);
  const [search, setSearch] = useAtom(searchTermAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [error, setError] = useAtom(errorAtom);
  const [filteredCorretoras] = useAtom(filteredCorretorasAtom);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await getCorretoras();
        setCorretoras(data);
      } catch {
        setError("Não foi possível carregar as corretoras. Tente novamente.");
      } finally {
        setLoading(false);
      }
    }

    void load();
  }, [setCorretoras, setError, setLoading]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack spacing={3}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: "linear-gradient(135deg, #fdf2f8 0%, #ffe4ef 100%)",
            border: "1px solid #fbcfe8",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#9d174d" }}>
            Corretoras CVM
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "#7c2d12" }}>
            Busque por CNPJ, nome comercial ou razão social e veja os detalhes da corretora.
          </Typography>
          <TextField
            fullWidth
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Busque por nome, razão social ou CNPJ"
            margin="normal"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#be185d" }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              mt: 3,
              bgcolor: "white",
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
        </Paper>

        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 24, paddingBottom: 24 }}>
            <CircularProgress sx={{ color: "#be185d" }} />
          </div>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : filteredCorretoras.length === 0 ? (
          <Typography color="text.secondary">
            Nenhuma corretora encontrada com esse termo.
          </Typography>
        ) : (
          <Grid container spacing={2.5}>
            {filteredCorretoras.map((item, idx) => (
              <Grid
                item
                key={`${item.codigo_cvm ?? item.cnpj ?? item.nome_comercial ?? idx}`}
                xs={12}
                md={6}
              >
                <CorretoraCard corretora={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
    </Container>
  );
}
