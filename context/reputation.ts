import { getReputationsFx } from "@/api/reputation";
import { IReputation } from "@/types/reputation";
import { createDomain } from "effector";
import { createGate } from "effector-react";

const reputation = createDomain();

export const $reputation = reputation
  .createStore<IReputation[]>([])
  .on(getReputationsFx.done, (_, { result }) => result)
  .on(getReputationsFx.fail, () => []);

export const ReputationGate = createGate()