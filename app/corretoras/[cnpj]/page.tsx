import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getCorretoraByCnpj } from "@/app/lib/api";
import { CorretoraDetails } from "@/app/components/CorretoraDetails";

interface PageProps {
  params: Promise<{ cnpj: string }>;
}

export default async function CorretoraPage({ params }: PageProps) {
  const { cnpj } = await params;
  const corretora = await getCorretoraByCnpj(cnpj);

  if (!corretora) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h5" sx={{ color: "#9d174d", fontWeight: 700 }}>
          Corretora não encontrada.
        </Typography>
        <Link href="/" style={{ display: "inline-flex", textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ mt: 2, bgcolor: "#be185d", color: "white", borderRadius: 999 }}
          >
            Voltar para a lista
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <Link href="/" style={{ display: "inline-flex", textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ alignSelf: "flex-start", color: "#be185d", fontWeight: 700 }}
          >
            Voltar
          </Button>
        </Link>
        <Box
          sx={{
            p: { xs: 2, md: 3 },
            borderRadius: 4,
            background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#9d174d" }}>
            {corretora.nome_comercial || corretora.razao_social || "Corretora"}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "#7c2d12" }}>
            Detalhes completos da corretora selecionada.
          </Typography>
        </Box>
        <CorretoraDetails corretora={corretora} />
      </Stack>
    </Container>
  );
}
