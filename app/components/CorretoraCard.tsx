"use client";

import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import type { Corretora } from "@/app/lib/types";

interface CorretoraCardProps {
  corretora: Corretora;
}

export function CorretoraCard({ corretora }: CorretoraCardProps) {
  const nome =
    corretora.nome_comercial ||
    corretora.nome_social ||
    corretora.razao_social ||
    "Corretora sem nome";

  const detailHref = corretora.cnpj
    ? `/corretoras/${encodeURIComponent(String(corretora.cnpj))}`
    : "#";

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderRadius: 3,
        borderColor: "rgba(236, 72, 153, 0.28)",
        boxShadow: "0 12px 30px rgba(244, 114, 182, 0.14)",
      }}
    >
      <Link href={detailHref} style={{ textDecoration: "none", color: "inherit" }}>
        <CardActionArea sx={{ height: "100%" }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: 700, color: "#9d174d" }}
              >
                {nome}
              </Typography>
              <Chip
                label="Ver detalhes"
                size="small"
                sx={{ bgcolor: "#fdf2f8", color: "#be185d" }}
              />
            </div>

            <Typography variant="body2" color="text.secondary">
              CNPJ: {corretora.cnpj || "não informado"}
            </Typography>

            {corretora.cidade && corretora.uf ? (
              <Typography variant="body2" color="text.secondary">
                {corretora.cidade} - {corretora.uf}
              </Typography>
            ) : null}
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
