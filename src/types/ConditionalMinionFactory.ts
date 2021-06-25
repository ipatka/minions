/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ConditionalMinion } from "./ConditionalMinion";

export class ConditionalMinionFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ConditionalMinion> {
    return super.deploy(overrides || {}) as Promise<ConditionalMinion>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConditionalMinion {
    return super.attach(address) as ConditionalMinion;
  }
  connect(signer: Signer): ConditionalMinionFactory {
    return super.connect(signer) as ConditionalMinionFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConditionalMinion {
    return new Contract(address, _abi, signerOrProvider) as ConditionalMinion;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ActionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CrossWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DoWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "ExecuteAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    name: "ProposeAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "moloch",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PulledFunds",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "actions",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "conditionTarget",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "conditionData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "conditionExpectedState",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "conditionExecTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "cancelAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "transfer",
        type: "bool",
      },
    ],
    name: "crossWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "doWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "executeAction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_moloch",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moloch",
    outputs: [
      {
        internalType: "contract IMOLOCH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "molochDepositToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "actionTo",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "actionValue",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "actionData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "conditionData",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "conditionTarget",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "conditionExpectedState",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "details",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "paymentRequested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "conditionExecTime",
        type: "uint256",
      },
    ],
    name: "proposeAction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611fe0806100206000396000f3fe6080604052600436106100a05760003560e01c806383240f831161006457806383240f831461024e578063a230c52414610403578063bed6b6111461044a578063c0c1cf551461045f578063d5ecdb6d146104fe578063ee09223e14610528576100a7565b806303e2b643146100ac578063150b7a02146100f957806319ab453c146101b15780633381114b146101e4578063623d9ac91461021d576100a7565b366100a757005b600080fd5b3480156100b857600080fd5b506100f7600480360360808110156100cf57600080fd5b506001600160a01b0381358116916020810135909116906040810135906060013515156106ce565b005b34801561010557600080fd5b506101946004803603608081101561011c57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561015657600080fd5b82018360208201111561016857600080fd5b803590602001918460018302840111600160201b8311171561018957600080fd5b50909250905061097e565b604080516001600160e01b03199092168252519081900360200190f35b3480156101bd57600080fd5b506100f7600480360360208110156101d457600080fd5b50356001600160a01b03166109a8565b3480156101f057600080fd5b506100f76004803603604081101561020757600080fd5b506001600160a01b038135169060200135610aae565b34801561022957600080fd5b50610232610baf565b604080516001600160a01b039092168252519081900360200190f35b34801561025a57600080fd5b506102786004803603602081101561027157600080fd5b5035610bbe565b604051808a8152602001896001600160a01b03168152602001886001600160a01b03168152602001871515815260200180602001866001600160a01b031681526020018060200180602001858152602001848103845289818151815260200191508051906020019080838360005b838110156102fe5781810151838201526020016102e6565b50505050905090810190601f16801561032b5780820380516001836020036101000a031916815260200191505b50848103835287518152875160209182019189019080838360005b8381101561035e578181015183820152602001610346565b50505050905090810190601f16801561038b5780820380516001836020036101000a031916815260200191505b50848103825286518152865160209182019188019080838360005b838110156103be5781810151838201526020016103a6565b50505050905090810190601f1680156103eb5780820380516001836020036101000a031916815260200191505b509c5050505050505050505050505060405180910390f35b34801561040f57600080fd5b506104366004803603602081101561042657600080fd5b50356001600160a01b0316610dbc565b604080519115158252519081900360200190f35b34801561045657600080fd5b50610232610e45565b34801561046b57600080fd5b506104896004803603602081101561048257600080fd5b5035610e54565b6040805160208082528351818301528351919283929083019185019080838360005b838110156104c35781810151838201526020016104ab565b50505050905090810190601f1680156104f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561050a57600080fd5b506100f76004803603602081101561052157600080fd5b50356115d9565b34801561053457600080fd5b506106bc600480360361012081101561054c57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561057b57600080fd5b82018360208201111561058d57600080fd5b803590602001918460018302840111600160201b831117156105ae57600080fd5b919390929091602081019035600160201b8111156105cb57600080fd5b8201836020820111156105dd57600080fd5b803590602001918460018302840111600160201b831117156105fe57600080fd5b919390926001600160a01b0383351692604081019060200135600160201b81111561062857600080fd5b82018360208201111561063a57600080fd5b803590602001918460018302840111600160201b8311171561065b57600080fd5b919390929091602081019035600160201b81111561067857600080fd5b82018360208201111561068a57600080fd5b803590602001918460018302840111600160201b831117156106ab57600080fd5b91935091508035906020013561197a565b60408051918252519081900360200190f35b6106d733610dbc565b61071d576040805162461bcd60e51b815260206004820152601260248201527126b4b734b7b71d1d3737ba1036b2b6b132b960711b604482015290519081900360640190fd5b836001600160a01b0316630cf20cc984846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561077457600080fd5b505af1158015610788573d6000803e3d6000fd5b50505050801561092e57600080546040805163753d756360e01b81526001600160a01b0387811660048301529151919092169163753d7563916024808301926020929190829003018186803b1580156107e057600080fd5b505afa1580156107f4573d6000803e3d6000fd5b505050506040513d602081101561080a57600080fd5b5051905080610860576040805162461bcd60e51b815260206004820152601760248201527f6e6f7420612077686974656c697374656420746f6b656e000000000000000000604482015290519081900360640190fd5b600080546040805163a9059cbb60e01b81526001600160a01b0392831660048201526024810187905290519187169263a9059cbb926044808401936020939083900390910190829087803b1580156108b757600080fd5b505af11580156108cb573d6000803e3d6000fd5b505050506040513d60208110156108e157600080fd5b505161092c576040805162461bcd60e51b81526020600482015260156024820152741d1bdad95b881d1c985b9cd9995c8819985a5b1959605a1b604482015290519081900360640190fd5b505b604080516001600160a01b0380871682528516602082015280820184905290517f69725482a69b3feb662528aa4b8028c1f9f6288b9ef746d5c84a847e05ad0d6b9181900360600190a150505050565b7f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f95945050505050565b600154600160a01b900460ff16156109f5576040805162461bcd60e51b815260206004820152600b60248201526a1a5b9a5d1a585b1a5e995960aa1b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0383811691909117918290556040805163c89039c560e01b81529051929091169163c89039c591600480820192602092909190829003018186803b158015610a5157600080fd5b505afa158015610a65573d6000803e3d6000fd5b505050506040513d6020811015610a7b57600080fd5b50516001805460ff60a01b196001600160a01b039093166001600160a01b03199091161791909116600160a01b17905550565b610ab733610dbc565b610afd576040805162461bcd60e51b815260206004820152601260248201527126b4b734b7b71d1d3737ba1036b2b6b132b960711b604482015290519081900360640190fd5b6000805460408051630cf20cc960e01b81526001600160a01b0386811660048301526024820186905291519190921692630cf20cc9926044808201939182900301818387803b158015610b4f57600080fd5b505af1158015610b63573d6000803e3d6000fd5b5050604080516001600160a01b03861681526020810185905281517f2e42613cca2d5007ef5f2bb60dd0d7f5107ce2119a6968721760eac66f81ee699450908190039091019150a15050565b6000546001600160a01b031681565b60026020818152600092835260409283902080546001808301548386015460038501805489516101009582161595909502600019011697909704601f810187900487028401870190985287835292966001600160a01b039182169691841695600160a01b90940460ff169493830182828015610c7b5780601f10610c5057610100808354040283529160200191610c7b565b820191906000526020600020905b815481529060010190602001808311610c5e57829003601f168201915b50505050600483015460058401805460408051602060026101006001861615026000190190941693909304601f810184900484028201840190925281815295966001600160a01b039094169593945090830182828015610d1c5780601f10610cf157610100808354040283529160200191610d1c565b820191906000526020600020905b815481529060010190602001808311610cff57829003601f168201915b5050505060068301805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152949594935090830182828015610dac5780601f10610d8157610100808354040283529160200191610dac565b820191906000526020600020905b815481529060010190602001808311610d8f57829003601f168201915b5050505050908060070154905089565b600080546040805163022b92c360e21b81526001600160a01b0385811660048301529151849392909216916308ae4b0c9160248082019260c092909190829003018186803b158015610e0d57600080fd5b505afa158015610e21573d6000803e3d6000fd5b505050506040513d60c0811015610e3757600080fd5b506020015115159392505050565b6001546001600160a01b031681565b6060610e5e611db6565b600083815260026020818152604092839020835161012081018552815481526001808301546001600160a01b03908116838601528386015490811683880152600160a01b900460ff161515606083015260038301805487516101009382161593909302600019011695909504601f810185900485028201850190965285815290949193608086019391929091830182828015610f3b5780601f10610f1057610100808354040283529160200191610f3b565b820191906000526020600020905b815481529060010190602001808311610f1e57829003601f168201915b505050918352505060048201546001600160a01b031660208083019190915260058301805460408051601f60026000196001861615610100020190941693909304928301859004850281018501825282815294019392830182828015610fe25780601f10610fb757610100808354040283529160200191610fe2565b820191906000526020600020905b815481529060010190602001808311610fc557829003601f168201915b505050918352505060068201805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529382019392918301828280156110765780601f1061104b57610100808354040283529160200191611076565b820191906000526020600020905b81548152906001019060200180831161105957829003601f168201915b505050505081526020016007820154815250509050611093611e1f565b6000546040805163b2643aab60e01b81526004810187905290516001600160a01b039092169163b2643aab9160248082019260c092909190829003018186803b1580156110df57600080fd5b505afa1580156110f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525060c081101561111857600080fd5b5060208301519091506001600160a01b0316611170576040805162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a59081c1c9bdc1bdcd85b125960721b604482015290519081900360640190fd5b8160600151156111b9576040805162461bcd60e51b815260206004820152600f60248201526e1858dd1a5bdb88195e1958dd5d1959608a1b604482015290519081900360640190fd5b8151471015611202576040805162461bcd60e51b815260206004820152601060248201526f0d2dce6eaccccd2c6d2cadce840cae8d60831b604482015290519081900360640190fd5b604081015161124e576040805162461bcd60e51b81526020600482015260136024820152721c1c9bdc1bdcd85b081b9bdd081c185cdcd959606a1b604482015290519081900360640190fd5b81610100015142116112915760405162461bcd60e51b8152600401808060200182810382526022815260200180611f896022913960400191505060405180910390fd5b60a08201516001600160a01b03161561147a57600060608360a001516001600160a01b031660008560c001516040518082805190602001908083835b602083106112ec5780518252601f1990920191602091820191016112cd565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461134e576040519150601f19603f3d011682016040523d82523d6000602084013e611353565b606091505b5091509150816113a2576040805162461bcd60e51b815260206004820152601560248201527410dbdb991a5d1a5bdb8818d85b1b0819985a5b1959605a1b604482015290519081900360640190fd5b8360e00151518151146113e65760405162461bcd60e51b8152600401808060200182810382526035815260200180611f546035913960400191505060405180910390fd5b60005b8151811015611476578460e00151818151811061140257fe5b602001015160f81c60f81b6001600160f81b03191682828151811061142357fe5b01602001516001600160f81b0319161461146e5760405162461bcd60e51b815260040180806020018281038252602e815260200180611f26602e913960400191505060405180910390fd5b6001016113e9565b5050505b6000848152600260208181526040808420909201805460ff60a01b1916600160a01b1790558481015185516080870151935184516060956001600160a01b03909416949293928291908401908083835b602083106114e95780518252601f1990920191602091820191016114ca565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461154b576040519150601f19603f3d011682016040523d82523d6000602084013e611550565b606091505b509150915081611596576040805162461bcd60e51b815260206004820152600c60248201526b63616c6c206661696c75726560a01b604482015290519081900360640190fd5b6040805187815233602082015281517f89d7c24363edddd17cb8df5f14a2dcbe1257939eda3a686b02a0ab7f79e81546929181900390910190a195945050505050565b6115e1611db6565b600082815260026020818152604092839020835161012081018552815481526001808301546001600160a01b03908116838601528386015490811683880152600160a01b900460ff161515606083015260038301805487516101009382161593909302600019011695909504601f8101859004850282018501909652858152909491936080860193919290918301828280156116be5780601f10611693576101008083540402835291602001916116be565b820191906000526020600020905b8154815290600101906020018083116116a157829003601f168201915b505050918352505060048201546001600160a01b031660208083019190915260058301805460408051601f600260001960018616156101000201909416939093049283018590048502810185018252828152940193928301828280156117655780601f1061173a57610100808354040283529160200191611765565b820191906000526020600020905b81548152906001019060200180831161174857829003601f168201915b505050918352505060068201805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529382019392918301828280156117f95780601f106117ce576101008083540402835291602001916117f9565b820191906000526020600020905b8154815290600101906020018083116117dc57829003601f168201915b50505050508152602001600782015481525050905080604001516001600160a01b0316336001600160a01b031614611867576040805162461bcd60e51b815260206004820152600c60248201526b3737ba10383937b837b9b2b960a11b604482015290519081900360640190fd5b600082815260026020819052604082208281556001810180546001600160a01b031916905590810180546001600160a81b0319169055906118ab6003830182611e3d565b6004820180546001600160a01b03191690556118cb600583016000611e3d565b6118d9600683016000611e3d565b506000600791909101556040805183815290517f852ea3421a945e7576fa00a05ec9832650bfc7d5cb4dc0c10c657f70472379479181900360200190a1600080546040805163e0a8f6f560e01b81526004810186905290516001600160a01b039092169263e0a8f6f59260248084019382900301818387803b15801561195e57600080fd5b505af1158015611972573d6000803e3d6000fd5b505050505050565b600061198533610dbc565b6119cb576040805162461bcd60e51b815260206004820152601260248201527126b4b734b7b71d1d3737ba1036b2b6b132b960711b604482015290519081900360640190fd5b6001600160a01b038e16611a19576040805162461bcd60e51b815260206004820152601060248201526f696e76616c696420616374696f6e546f60801b604482015290519081900360640190fd5b60008060009054906101000a90046001600160a01b03166001600160a01b031663590f940b306000806000600160009054906101000a90046001600160a01b03168a600160009054906101000a90046001600160a01b03168e8e6040518a63ffffffff1660e01b8152600401808a6001600160a01b03168152602001898152602001888152602001878152602001866001600160a01b03168152602001858152602001846001600160a01b03168152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509a5050505050505050505050602060405180830381600087803b158015611b2057600080fd5b505af1158015611b34573d6000803e3d6000fd5b505050506040513d6020811015611b4a57600080fd5b50519050611b618f8f8f8f8f8f8f8f8f8c8b611bad565b6040805182815233602082015281517f19702b16644fe61447d97482382f4a881efc32b6d5bae04dfe06942cacc5b5e6929181900390910190a19e9d5050505050505050505050505050565b611bb5611db6565b6040518061012001604052808c81526020018d6001600160a01b03168152602001336001600160a01b031681526020016000151581526020018b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506001600160a01b03881660208083019190915260408051601f8c0183900483028101830182528b8152920191908b908b9081908401838280828437600092019190915250505090825250604080516020601f89018190048102820181019092528781529181019190889088908190840183828082843760009201829052509385525050506020918201869052848152600280835260409182902084518155848401516001820180546001600160a01b039283166001600160a01b03199182161790915593860151928201805460608801511515600160a01b0260ff60a01b199590931695169490941792909216919091179091556080830151805193945084939192611d3b92600385019290910190611e84565b5060a08201516004820180546001600160a01b0319166001600160a01b0390921691909117905560c08201518051611d7d916005840191602090910190611e84565b5060e08201518051611d99916006840191602090910190611e84565b506101008201518160070155905050505050505050505050505050565b6040518061012001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000151581526020016060815260200160006001600160a01b031681526020016060815260200160608152602001600081525090565b6040518060c001604052806006906020820280368337509192915050565b50805460018160011615610100020316600290046000825580601f10611e635750611e81565b601f016020900490600052602060002090810190611e819190611f10565b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611eba5760008555611f00565b82601f10611ed357805160ff1916838001178555611f00565b82800160010185558215611f00579182015b82811115611f00578251825591602001919060010190611ee5565b50611f0c929150611f10565b5090565b5b80821115611f0c5760008155600101611f1156fe436f6e646974696f6e2072657475726e20646f6573206e6f74206d61746368206578706563746564207374617465436f6e646974696f6e2072657475726e20646f6573206e6f74206d61746368206578706563746564207374617465206c656e677468436f6e646974696f6e616c20657865637574696f6e2074696d65206e6f74206d6574a2646970667358221220524081c4d8369bebfc40de2117a20b66f24dbf4f4fb5cce517717bf358edb54c64736f6c63430007050033";
