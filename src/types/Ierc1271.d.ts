/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Ierc1271Interface extends ethers.utils.Interface {
  functions: {
    "isValidSignature(bytes32,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export class Ierc1271 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Ierc1271Interface;

  functions: {
    isValidSignature(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      magicValue: string;
      0: string;
    }>;

    "isValidSignature(bytes32,bytes)"(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      magicValue: string;
      0: string;
    }>;
  };

  isValidSignature(
    _messageHash: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "isValidSignature(bytes32,bytes)"(
    _messageHash: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    isValidSignature(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "isValidSignature(bytes32,bytes)"(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    isValidSignature(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidSignature(bytes32,bytes)"(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isValidSignature(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidSignature(bytes32,bytes)"(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
