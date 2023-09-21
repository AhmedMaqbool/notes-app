import { create } from "zustand";

export interface CardI {
  title: String;
  content: String;
}

interface CardState {
  cards: CardI[];
  addCard: (payload: CardI) => void;
  removeCard: (payload: Number) => void;
}

export const useCardStore = create<CardState>((set) => ({
  cards: [],
  addCard: (payload) =>
    set((state: any) => ({ cards: [...state.cards, payload] })),
  removeCard(payload) {
    set((state: any) => ({
      cards: state.cards?.filter((e: CardI, i: Number) => payload !== i),
    }));
  },
}));
