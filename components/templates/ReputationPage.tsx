"use client";

import { $reputation, ReputationGate } from "@/context/reputation";
import { useGate, useStore } from "effector-react";
import { getReputationsFx } from "../../api/reputation";

export default function ReputationPage() {
  useGate(ReputationGate);
  const reputations = useStore($reputation);
  const spinner = useStore(getReputationsFx.pending);
  return <main>
    <section>
        <div className="container">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Место</th>
                            <th>Репутация</th>
                            <th>Участник</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </section>
  </main>
}
