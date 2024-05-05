import { getReputationsFx } from "@/api/reputation";
import { IReputation } from "@/types/reputation";
import { createDomain, sample } from "effector";
import { createGate } from "effector-react";

const reputation = createDomain();

export const $reputation = reputation
  .createStore<IReputation[]>([])
  .on(getReputationsFx.done, (_, { result }) => result)
  .on(getReputationsFx.fail, () => []);

export const ReputationGate = createGate()

sample({
    clock: ReputationGate.open,
    target: getReputationsFx
})