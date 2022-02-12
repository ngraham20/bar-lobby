import { AI } from "@/model/ai";
import { DeepReadonly } from "vue";

/** @todo can this be generated automatically from data files? */
export const ais: DeepReadonly<Record<string, AI>> = {
    barb: {
        fullName: "BARbarianAI",
        shortName: "BARb",
        version: "stable"
    }
};