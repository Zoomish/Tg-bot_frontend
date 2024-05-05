"use client";

import { $reputation, ReputationGate } from "@/context/reputation";
import { useGate, useStore } from "effector-react";
import { getReputationsFx } from "../../api/reputation";
import ReputationSkeleton from "../modules/reputationSkeleton";
import styles from "@/styles/reputations.module.scss";
import Image from "next/image";

export default function ReputationPage() {
  useGate(ReputationGate);
  const reputations = useStore($reputation);
  const spinner = useStore(getReputationsFx.pending);
  return (
    <main>
      <section>
        <div className="container">
          <div className={styles.reputations_table}>
            <table className="table table-striped table-dark mt-2 table-bordered">
              <thead>
                <tr>
                  <th>Место</th>
                  <th>Репутация</th>
                  <th>Участник</th>
                </tr>
              </thead>
              <tbody>
                {spinner ? (
                  <ReputationSkeleton />
                ) : (
                  reputations.map(
                    ({ reputation, fullName, userAvatar }, index) => (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td className={styles.full_name}>
                          <div className={styles.full_name__inner}>
                            <Image
                              src={!!userAvatar ? userAvatar : ""}
                              alt={fullName}
                              width={50}
                              height={50}
                              className="rounded-circle"
                            />
                            <span>{fullName}</span>
                          </div>
                        </td>
                        <td>{reputation}</td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
