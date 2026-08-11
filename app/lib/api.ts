import axios from "axios";
import type { Corretora } from "@/app/lib/types";

const apiBase = "/api/corretoras";
const externalApiBase = "https://brasilapi.com.br/api/cvm/corretoras/v1";
const axiosClient = axios.create({ timeout: 10000 });

export async function getCorretoras(): Promise<Corretora[]> {
  const response = await axiosClient.get(apiBase);
  return Array.isArray(response.data) ? response.data : [];
}

export async function getCorretoraByCnpj(cnpj: string): Promise<Corretora | null> {
  try {
    const response = await axiosClient.get(`${externalApiBase}/${encodeURIComponent(String(cnpj))}`);
    return response.data as Corretora;
  } catch {
    return null;
  }
}
