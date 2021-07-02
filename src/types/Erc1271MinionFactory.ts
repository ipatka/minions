/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Erc1271Minion } from "./Erc1271Minion";

export class Erc1271MinionFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Erc1271Minion> {
    return super.deploy(overrides || {}) as Promise<Erc1271Minion>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Erc1271Minion {
    return super.attach(address) as Erc1271Minion;
  }
  connect(signer: Signer): Erc1271MinionFactory {
    return super.connect(signer) as Erc1271MinionFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc1271Minion {
    return new Contract(address, _abi, signerOrProvider) as Erc1271Minion;
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
        name: "executor",
        type: "address",
      },
    ],
    name: "ExecuteSignature",
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
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    name: "ProposeSignature",
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
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
    ],
    name: "SignatureCanceled",
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
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
    ],
    name: "cancelSignature",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "permissionHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
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
        internalType: "string",
        name: "details",
        type: "string",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "signatureHash",
        type: "bytes32",
      },
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
      {
        internalType: "string",
        name: "details",
        type: "string",
      },
    ],
    name: "proposeSignature",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "signatures",
    outputs: [
      {
        internalType: "bytes32",
        name: "signatureHash",
        type: "bytes32",
      },
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611e4d806100206000396000f3fe6080604052600436106100ec5760003560e01c8063623d9ac91161008a578063bed6b61111610059578063bed6b61114610657578063c0c1cf551461066c578063d5ecdb6d1461070b578063ec9b604714610735576100f3565b8063623d9ac91461047557806369ed171b146104a657806383240f831461053e578063a230c52414610610576100f3565b806319ab453c116100c657806319ab453c146102b55780632422224e146102e85780633381114b1461034a5780635670dd4814610383576100f3565b806303e2b643146100f8578063150b7a02146101455780631626ba7e146101fd576100f3565b366100f357005b600080fd5b34801561010457600080fd5b506101436004803603608081101561011b57600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135151561075f565b005b34801561015157600080fd5b506101e06004803603608081101561016857600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156101a257600080fd5b8201836020820111156101b457600080fd5b803590602001918460018302840111600160201b831117156101d557600080fd5b509092509050610a0f565b604080516001600160e01b03199092168252519081900360200190f35b34801561020957600080fd5b506101e06004803603604081101561022057600080fd5b81359190810190604081016020820135600160201b81111561024157600080fd5b82018360208201111561025357600080fd5b803590602001918460018302840111600160201b8311171561027457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a39945050505050565b3480156102c157600080fd5b50610143600480360360208110156102d857600080fd5b50356001600160a01b0316610c5e565b3480156102f457600080fd5b506103126004803603602081101561030b57600080fd5b5035610d64565b604080519485526001600160e01b03199093166020850152838301919091526001600160a01b03166060830152519081900360800190f35b34801561035657600080fd5b506101436004803603604081101561036d57600080fd5b506001600160a01b038135169060200135610d99565b34801561038f57600080fd5b50610463600480360360808110156103a657600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156103d557600080fd5b8201836020820111156103e757600080fd5b803590602001918460018302840111600160201b8311171561040857600080fd5b919390929091602081019035600160201b81111561042557600080fd5b82018360208201111561043757600080fd5b803590602001918460018302840111600160201b8311171561045857600080fd5b509092509050610e9a565b60408051918252519081900360200190f35b34801561048157600080fd5b5061048a611179565b604080516001600160a01b039092168252519081900360200190f35b3480156104b257600080fd5b50610463600480360360808110156104c957600080fd5b8135916020810135916001600160e01b03196040830135169190810190608081016060820135600160201b81111561050057600080fd5b82018360208201111561051257600080fd5b803590602001918460018302840111600160201b8311171561053357600080fd5b509092509050611188565b34801561054a57600080fd5b506105686004803603602081101561056157600080fd5b50356113a9565b60405180868152602001856001600160a01b03168152602001846001600160a01b03168152602001831515815260200180602001828103825283818151815260200191508051906020019080838360005b838110156105d15781810151838201526020016105b9565b50505050905090810190601f1680156105fe5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561061c57600080fd5b506106436004803603602081101561063357600080fd5b50356001600160a01b0316611470565b604080519115158252519081900360200190f35b34801561066357600080fd5b5061048a6114f9565b34801561067857600080fd5b506106966004803603602081101561068f57600080fd5b5035611508565b6040805160208082528351818301528351919283929083019185019080838360005b838110156106d05781810151838201526020016106b8565b50505050905090810190601f1680156106fd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561071757600080fd5b506101436004803603602081101561072e57600080fd5b503561191b565b34801561074157600080fd5b506101436004803603602081101561075857600080fd5b5035611b40565b61076833611470565b6107ae576040805162461bcd60e51b815260206004820152601260248201527126b4b734b7b71d1d3737ba1036b2b6b132b960711b604482015290519081900360640190fd5b836001600160a01b0316630cf20cc984846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561080557600080fd5b505af1158015610819573d6000803e3d6000fd5b5050505080156109bf57600080546040805163753d756360e01b81526001600160a01b0387811660048301529151919092169163753d7563916024808301926020929190829003018186803b15801561087157600080fd5b505afa158015610885573d6000803e3d6000fd5b505050506040513d602081101561089b57600080fd5b50519050806108f1576040805162461bcd60e51b815260206004820152601760248201527f6e6f7420612077686974656c697374656420746f6b656e000000000000000000604482015290519081900360640190fd5b600080546040805163a9059cbb60e01b81526001600160a01b0392831660048201526024810187905290519187169263a9059cbb926044808401936020939083900390910190829087803b15801561094857600080fd5b505af115801561095c573d6000803e3d6000fd5b505050506040513d602081101561097257600080fd5b50516109bd576040805162461bcd60e51b81526020600482015260156024820152741d1bdad95b881d1c985b9cd9995c8819985a5b1959605a1b604482015290519081900360640190fd5b505b604080516001600160a01b0380871682528516602082015280820184905290517f69725482a69b3feb662528aa4b8028c1f9f6288b9ef746d5c84a847e05ad0d6b9181900360600190a150505050565b7f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f95945050505050565b6000610a43611ca7565b50600083815260036020818152604092839020835160808101855281548152600182015460e01b6001600160e01b031916928101929092526002810154938201939093529101546001600160a01b03166060820152610aa0611cce565b600054604080840151815163b2643aab60e01b8152600481019190915290516001600160a01b039092169163b2643aab9160248082019260c092909190829003018186803b158015610af157600080fd5b505afa158015610b05573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525060c0811015610b2a57600080fd5b506040810151909150610b84576040805162461bcd60e51b815260206004820152601760248201527f50726f706f73616c20686173206e6f7420706173736564000000000000000000604482015290519081900360640190fd5b836040516020018082805190602001908083835b60208310610bb75780518252601f199092019160209182019101610b98565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120826000015114610c42576040805162461bcd60e51b8152602060048201526016602482015275092dcecc2d8d2c840e6d2cedcc2e8eae4ca40d0c2e6d60531b604482015290519081900360640190fd5b5050506000918252506003602052604090206001015460e01b90565b600154600160a01b900460ff1615610cab576040805162461bcd60e51b815260206004820152600b60248201526a1a5b9a5d1a585b1a5e995960aa1b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0383811691909117918290556040805163c89039c560e01b81529051929091169163c89039c591600480820192602092909190829003018186803b158015610d0757600080fd5b505afa158015610d1b573d6000803e3d6000fd5b505050506040513d6020811015610d3157600080fd5b50516001805460ff60a01b196001600160a01b039093166001600160a01b03199091161791909116600160a01b17905550565b60036020819052600091825260409091208054600182015460028301549290930154909260e01b91906001600160a01b031684565b610da233611470565b610de8576040805162461bcd60e51b815260206004820152601260248201527126b4b734b7b71d1d3737ba1036b2b6b132b960711b604482015290519081900360640190fd5b6000805460408051630cf20cc960e01b81526001600160a01b0386811660048301526024820186905291519190921692630cf20cc9926044808201939182900301818387803b158015610e3a57600080fd5b505af1158015610e4e573d6000803e3d6000fd5b5050604080516001600160a01b03861681526020810185905281517f2e42613cca2d5007ef5f2bb60dd0d7f5107ce2119a6968721760eac66f81ee699450908190039091019150a15050565b6000610ea533611470565b610eeb576040805162461bcd60e51b815260206004820152601260248201527126b4b734b7b71d1d3737ba1036b2b6b132b960711b604482015290519081900360640190fd5b6001600160a01b038716610f39576040805162461bcd60e51b815260206004820152601060248201526f696e76616c696420616374696f6e546f60801b604482015290519081900360640190fd5b6000805460015460405163590f940b60e01b815230600482018181526024830186905260448301869052606483018690526001600160a01b039384166084840181905260a4840187905260c4840181905261010060e4850190815261010485018a9052949095169463590f940b94929387938493849392849284928f928f929061012401848480828437600081840152601f19601f8201169050808301925050509a5050505050505050505050602060405180830381600087803b15801561100057600080fd5b505af1158015611014573d6000803e3d6000fd5b505050506040513d602081101561102a57600080fd5b50519050611036611cec565b6040518060a001604052808981526020018a6001600160a01b03168152602001336001600160a01b0316815260200160001515815260200188888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509390945250508481526002602081815260409283902085518155818601516001820180546001600160a01b039283166001600160a01b03199182161790915594870151938201805460608901511515600160a01b0260ff60a01b19969093169616959095179390931692909217909255608084015180519495508594919350611130926003850192910190611d2f565b50506040805184815233602082015281517f19702b16644fe61447d97482382f4a881efc32b6d5bae04dfe06942cacc5b5e693509081900390910190a150979650505050505050565b6000546001600160a01b031681565b600061119333611470565b6111d9576040805162461bcd60e51b815260206004820152601260248201527126b4b734b7b71d1d3737ba1036b2b6b132b960711b604482015290519081900360640190fd5b6000805460015460405163590f940b60e01b815230600482018181526024830186905260448301869052606483018690526001600160a01b039384166084840181905260a4840187905260c4840181905261010060e4850190815261010485018a9052949095169463590f940b94929387938493849392849284928f928f929061012401848480828437600081840152601f19601f8201169050808301925050509a5050505050505050505050602060405180830381600087803b1580156112a057600080fd5b505af11580156112b4573d6000803e3d6000fd5b505050506040513d60208110156112ca57600080fd5b505190506112d6611ca7565b50604080516080810182528781526001600160e01b03198716602080830191825282840185815233606080860182815260008f815260038087529089902088518155965160018801805463ffffffff191660e09290921c91909117905593516002870155519490920180546001600160a01b0319166001600160a01b039095169490941790935584518681529182018c905281850192909252925191927fe59e98436a1af04135db54a83bf37c9534330144f808bc69f04b2f58ebb4df0d929081900390910190a1509695505050505050565b60026020818152600092835260409283902080546001808301548386015460038501805489516101009582161595909502600019011697909704601f810187900487028401870190985287835292966001600160a01b039182169691841695600160a01b90940460ff1694938301828280156114665780601f1061143b57610100808354040283529160200191611466565b820191906000526020600020905b81548152906001019060200180831161144957829003601f168201915b5050505050905085565b600080546040805163022b92c360e21b81526001600160a01b0385811660048301529151849392909216916308ae4b0c9160248082019260c092909190829003018186803b1580156114c157600080fd5b505afa1580156114d5573d6000803e3d6000fd5b505050506040513d60c08110156114eb57600080fd5b506020015115159392505050565b6001546001600160a01b031681565b6060611512611cec565b600083815260026020818152604092839020835160a081018552815481526001808301546001600160a01b03908116838601528386015490811683880152600160a01b900460ff161515606083015260038301805487516101009382161593909302600019011695909504601f8101859004850282018501909652858152909491936080860193919290918301828280156115ee5780601f106115c3576101008083540402835291602001916115ee565b820191906000526020600020905b8154815290600101906020018083116115d157829003601f168201915b5050505050815250509050611601611cce565b6000546040805163b2643aab60e01b81526004810187905290516001600160a01b039092169163b2643aab9160248082019260c092909190829003018186803b15801561164d57600080fd5b505afa158015611661573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525060c081101561168657600080fd5b5060208301519091506001600160a01b03166116de576040805162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a59081c1c9bdc1bdcd85b125960721b604482015290519081900360640190fd5b816060015115611727576040805162461bcd60e51b815260206004820152600f60248201526e1858dd1a5bdb88195e1958dd5d1959608a1b604482015290519081900360640190fd5b8151471015611770576040805162461bcd60e51b815260206004820152601060248201526f0d2dce6eaccccd2c6d2cadce840cae8d60831b604482015290519081900360640190fd5b60408101516117bc576040805162461bcd60e51b81526020600482015260136024820152721c1c9bdc1bdcd85b081b9bdd081c185cdcd959606a1b604482015290519081900360640190fd5b6000848152600260208181526040808420909201805460ff60a01b1916600160a01b1790558481015185516080870151935184516060956001600160a01b03909416949293928291908401908083835b6020831061182b5780518252601f19909201916020918201910161180c565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461188d576040519150601f19603f3d011682016040523d82523d6000602084013e611892565b606091505b5091509150816118d8576040805162461bcd60e51b815260206004820152600c60248201526b63616c6c206661696c75726560a01b604482015290519081900360640190fd5b6040805187815233602082015281517f89d7c24363edddd17cb8df5f14a2dcbe1257939eda3a686b02a0ab7f79e81546929181900390910190a195945050505050565b611923611cec565b600082815260026020818152604092839020835160a081018552815481526001808301546001600160a01b03908116838601528386015490811683880152600160a01b900460ff161515606083015260038301805487516101009382161593909302600019011695909504601f8101859004850282018501909652858152909491936080860193919290918301828280156119ff5780601f106119d4576101008083540402835291602001916119ff565b820191906000526020600020905b8154815290600101906020018083116119e257829003601f168201915b505050505081525050905080604001516001600160a01b0316336001600160a01b031614611a63576040805162461bcd60e51b815260206004820152600c60248201526b3737ba10383937b837b9b2b960a11b604482015290519081900360640190fd5b600082815260026020819052604082208281556001810180546001600160a01b031916905590810180546001600160a81b031916905590611aa76003830182611dbb565b50506040805183815290517f852ea3421a945e7576fa00a05ec9832650bfc7d5cb4dc0c10c657f70472379479181900360200190a1600080546040805163e0a8f6f560e01b81526004810186905290516001600160a01b039092169263e0a8f6f59260248084019382900301818387803b158015611b2457600080fd5b505af1158015611b38573d6000803e3d6000fd5b505050505050565b611b48611ca7565b50600081815260036020818152604092839020835160808101855281548152600182015460e01b6001600160e01b031916928101929092526002810154938201939093529101546001600160a01b0316606082018190523314611be1576040805162461bcd60e51b815260206004820152600c60248201526b3737ba10383937b837b9b2b960a11b604482015290519081900360640190fd5b600082815260036020818152604080842084815560018101805463ffffffff1916905560028101949094559290910180546001600160a01b031916905582820151825190815290810184905281517f19218e18970a68a34592b272e135434b99b9adfc1162db3b6a9d6d2af3ce06a5929181900390910190a160008054604080840151815163e0a8f6f560e01b8152600481019190915290516001600160a01b039092169263e0a8f6f59260248084019382900301818387803b158015611b2457600080fd5b60408051608081018252600080825260208201819052918101829052606081019190915290565b6040518060c001604052806006906020820280368337509192915050565b6040518060a001604052806000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611d655760008555611dab565b82601f10611d7e57805160ff1916838001178555611dab565b82800160010185558215611dab579182015b82811115611dab578251825591602001919060010190611d90565b50611db7929150611e02565b5090565b50805460018160011615610100020316600290046000825580601f10611de15750611dff565b601f016020900490600052602060002090810190611dff9190611e02565b50565b5b80821115611db75760008155600101611e0356fea26469706673582212207d08904826f43d7ad6f32b7034f6858e17349bd1851472d98fa8567882c57cc264736f6c63430007050033";
