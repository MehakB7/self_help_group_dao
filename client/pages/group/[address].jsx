import { useRouter } from "next/router";
import styles from "./../../styles/GroupView.module.css";
import { useEffect, useState } from "react";
import { GroupDetails } from "../../components/GroupDetails";
import { useContractEvent, useContractRead, useAccount } from "wagmi";
import { shg_abi } from "../../util";
import CreateProposal from "../../components/CreateProposal";
import MemberInfo from "../../components/MemberInfo";
import LoanDetails from "../../components/LoanDetails";
import ProposalItem from "../../components/ProposalItem";

export default function Group() {
  const router = useRouter();
  const [memberBal, setMemberBal] = useState();
  const [proposalCounter, setProposalCounter] = useState();
  const [loanDetails, setDetails] = useState({
    proposalId: 0,
    amount: 0,
    interestRate: 0,
    date: 0,
  });
  const [proposal, setProposal] = useState([]);

  const accountInfo = useAccount();

  useContractRead({
    address: router.query.address,
    abi: shg_abi,
    functionName: "counter",
    onSettled(data, error) {
      setProposalCounter(parseInt(data));
    },
  });

  useContractRead({
    address: router.query.address,
    abi: shg_abi,
    functionName: "getProposals",
    args: [accountInfo.address],
    onSuccess(data) {
      setProposal(data);
    },
  });

  useContractRead({
    address: router.query.address,
    abi: shg_abi,
    functionName: "loanDetails",
    args: [accountInfo.address],
    onSettled(data, error) {
      if (data) {
        let ans = {};
        let index = 0;
        for (let key in loanDetails) {
          ans[key] = parseInt(data[index++]);
        }
        setDetails(ans);
      }
    },
  });

  useContractEvent({
    address: router.query.address,
    abi: shg_abi,
    eventName: "UserBalanceUpdated",
    listener(log) {
      console.log("UserBalanceUpdated", log);
      setMemberBal((prev) => {
        return prev.map((member) => {
          return {
            ...member,
            balance:
              log[0].args.member == member.address
                ? log[0].args.balance
                : member.balance,
          };
        });
      });
    },
  });

  useContractEvent({
    address: router.query.address,
    abi: shg_abi,
    eventName: "ProposalSubmitted",
    listener(log) {
      setProposalCounter((prev) => prev + 1);
    },
  });

  const { isFetching, isLoading, data } = useContractRead({
    address: router.query.address,
    abi: shg_abi,
    functionName: "getMemberWithBalance",
    onSettled(data, error) {
      if (!data) return;
      setMemberBal(
        data[0].map((addr, balIdx) => {
          return { address: addr, balance: parseInt(data[1][balIdx]) };
        })
      );
    },
  });

  useEffect(() => {
    if (memberBal?.length > 0) {
      const isPresent = memberBal?.find(
        (item) => item.address === accountInfo.address
      );

      if (!isPresent) {
        router.replace("/");
      }
    }
  }, [memberBal, accountInfo]);

  if (
    memberBal?.length == 0 &&
    !memberBal?.find((item) => item.address === accountInfo.address)
  ) {
    return null;
  }

  const hasLoan = false; //loanDetails.date === 0;
  const openProposal = proposal?.filter((item) => item?.currentStatus === 0);

  const onProposalExpired = (id) => {
    console.log("onProposalExpired called");
    let proposalCopy = [...proposal];
    const index = proposalCopy.findIndex((item) => item.proposalId == id);
    if (index != -1) {
      proposalCopy[index] = { ...proposalCopy[index], currentStatus: 3 };
    }
    setProposal(proposalCopy);
  };

  return (
    <>
      <div className={styles.container}>
        {isFetching || isLoading ? null : (
          <>
            <GroupDetails address={router.query.address} />

            <div className={styles.allDetail}>
              <div>
                <h2
                  style={{
                    fontSize: "30px",
                    color: "black",
                    textShadow:
                      "0 4px 8px #ffffff, 0 6px 20px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {" "}
                  Proposals
                  {proposalCounter > 0 ? (
                    <button
                      style={{ marginLeft: "20px", height: "40px" }}
                      onClick={() => {
                        console.log(`/proposal/${router.query.address}`);
                        router.push(`/proposal/${router.query.address}`);
                      }}
                    >
                      View Proposals
                    </button>
                  ) : (
                    <span> Available: 0</span>
                  )}
                </h2>
                {hasLoan ? (
                  <LoanDetails info={loanDetails} />
                ) : openProposal.length > 0 ? (
                  <ProposalItem
                    address={router.query.address}
                    proposalId={openProposal[0].proposalId}
                    onlyUser={false}
                    onProposalExpired={onProposalExpired}
                  />
                ) : (
                  <CreateProposal address={router.query.address} />
                )}
              </div>
              <MemberInfo membersInfo={memberBal} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
