"use client";

import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import type { Corretora } from "@/app/lib/types";

interface CorretoraDetailsProps {
  corretora: Corretora;
}

export function CorretoraDetails({ corretora }: CorretoraDetailsProps) {
  const dados = [
    { label: "Nome comercial", value: corretora.nome_comercial },
    { label: "Razão social", value: corretora.razao_social || corretora.nome_social },
    { label: "CNPJ", value: corretora.cnpj },
    { label: "Código CVM", value: corretora.codigo_cvm },
    { label: "Cidade", value: corretora.cidade },
    { label: "UF", value: corretora.uf },
    { label: "País", value: corretora.pais },
    { label: "CEP", value: corretora.cep },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, md: 3.5 },
        borderRadius: 4,
        border: "1px solid #f9a8d4",
        background: "linear-gradient(135deg, #fff7fb 0%, #ffe4ef 100%)",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#9d174d" }}>
        Informações da corretora
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={1.5}>
        {dados.map((item) =>
          item.value ? (
            <Box key={item.label}>
              <Typography variant="caption" color="text.secondary">
                {item.label}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {item.value}
              </Typography>
            </Box>
          ) : null
        )}
      </Stack>
    </Paper>
  );
}
