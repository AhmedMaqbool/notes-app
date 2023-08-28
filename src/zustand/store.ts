import { create } from "zustand";
 
export interface CardI {
    title: String;
    content: String;
}

interface CardState {
  cards: CardI[];
  addCard: (payload: CardI) => void;
}

export const useCardStore = create<CardState>((set) => ({
  cards: [],
  addCard: (payload) =>
    set((state: any) => ({ cards: [...state.cards, payload] })),
}));
