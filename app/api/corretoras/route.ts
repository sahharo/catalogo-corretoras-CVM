import axios from "axios";
import { NextResponse } from "next/server";

const EXTERNAL_API = "https://brasilapi.com.br/api/cvm/corretoras/v1/";
const axiosClient = axios.create({ timeout: 10000 });

export async function GET() {
  try {
    const response = await axiosClient.get(EXTERNAL_API);
    return NextResponse.json(response.data);
  } catch (error) {
    const status = axios.isAxiosError(error) && error.response?.status ? error.response.status : 502;
    return NextResponse.json(
      { message: "Erro ao carregar as corretoras." },
      { status }
    );
  }
}
