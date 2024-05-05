import { IReputation } from "@/types/reputation";
import { createDomain } from "effector";


const reputation = createDomain()

export const $reputation = reputation.createStore<IReputation[]>([])