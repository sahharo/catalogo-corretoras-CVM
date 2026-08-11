export interface Corretora {
  cnpj?: string;
  nome_comercial?: string;
  nome_social?: string;
  razao_social?: string;
  codigo_cvm?: string;
  cidade?: string;
  uf?: string;
  bairro?: string;
  cep?: string;
  pais?: string;
  [key: string]: unknown;
}
