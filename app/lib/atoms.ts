import { atom } from "jotai";
import type { Corretora } from "@/app/lib/types";

export const searchTermAtom = atom("");
export const corretorasAtom = atom<Corretora[]>([]);
export const loadingAtom = atom(false);
export const errorAtom = atom("");

export const filteredCorretorasAtom = atom((get) => {
  const term = get(searchTermAtom).trim().toLowerCase();
  const corretoras = get(corretorasAtom);

  if (!term) {
    return corretoras;
  }

  return corretoras.filter((item) => {
    const fields = [
      item.cnpj,
      item.nome_comercial,
      item.nome_social,
      item.razao_social,
    ];

    return fields.some((field) =>
      String(field ?? "")
        .toLowerCase()
        .includes(term)
    );
  });
});
