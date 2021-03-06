/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface INiftyswapExchangeInterface extends Interface {
  functions: {
    onERC1155Received: TypedFunctionDescription<{
      encode([_operator, _from, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    onERC1155BatchReceived: TypedFunctionDescription<{
      encode([, _from, _ids, _amounts, _data]: [
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        Arrayish
      ]): string;
    }>;
  };

  events: {
    CurrencyPurchase: TypedEventDescription<{
      encodeTopics([
        buyer,
        recipient,
        tokensSoldIds,
        tokensSoldAmounts,
        currencyBoughtAmounts
      ]: [string | null, string | null, null, null, null]): string[];
    }>;

    LiquidityAdded: TypedEventDescription<{
      encodeTopics([provider, tokenIds, tokenAmounts, currencyAmounts]: [
        string | null,
        null,
        null,
        null
      ]): string[];
    }>;

    LiquidityRemoved: TypedEventDescription<{
      encodeTopics([provider, tokenIds, tokenAmounts, currencyAmounts]: [
        string | null,
        null,
        null,
        null
      ]): string[];
    }>;

    TokensPurchase: TypedEventDescription<{
      encodeTopics([
        buyer,
        recipient,
        tokensBoughtIds,
        tokensBoughtAmounts,
        currencySoldAmounts
      ]: [string | null, string | null, null, null, null]): string[];
    }>;
  };
}

export class INiftyswapExchange extends Contract {
  connect(signerOrProvider: Signer | Provider | string): INiftyswapExchange;
  attach(addressOrName: string): INiftyswapExchange;
  deployed(): Promise<INiftyswapExchange>;

  on(event: EventFilter | string, listener: Listener): INiftyswapExchange;
  once(event: EventFilter | string, listener: Listener): INiftyswapExchange;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): INiftyswapExchange;
  removeAllListeners(eventName: EventFilter | string): INiftyswapExchange;
  removeListener(eventName: any, listener: Listener): INiftyswapExchange;

  interface: INiftyswapExchangeInterface;

  functions: {
    getBuyPrice(
      _assetBoughtAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish
    ): Promise<BigNumber>;

    getSellPrice(
      _assetSoldAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish
    ): Promise<BigNumber>;

    getCurrencyReserves(_ids: (BigNumberish)[]): Promise<(BigNumber)[]>;

    getPrice_currencyToToken(
      _ids: (BigNumberish)[],
      _tokensBought: (BigNumberish)[]
    ): Promise<(BigNumber)[]>;

    getPrice_tokenToCurrency(
      _ids: (BigNumberish)[],
      _tokensSold: (BigNumberish)[]
    ): Promise<(BigNumber)[]>;

    getTotalSupply(_ids: (BigNumberish)[]): Promise<(BigNumber)[]>;

    getCurrencyInfo(): Promise<{
      0: string;
      1: BigNumber;
    }>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getTokenAddress(): Promise<string>;
    getFactoryAddress(): Promise<string>;
  };

  filters: {
    CurrencyPurchase(
      buyer: string | null,
      recipient: string | null,
      tokensSoldIds: null,
      tokensSoldAmounts: null,
      currencyBoughtAmounts: null
    ): EventFilter;

    LiquidityAdded(
      provider: string | null,
      tokenIds: null,
      tokenAmounts: null,
      currencyAmounts: null
    ): EventFilter;

    LiquidityRemoved(
      provider: string | null,
      tokenIds: null,
      tokenAmounts: null,
      currencyAmounts: null
    ): EventFilter;

    TokensPurchase(
      buyer: string | null,
      recipient: string | null,
      tokensBoughtIds: null,
      tokensBoughtAmounts: null,
      currencySoldAmounts: null
    ): EventFilter;
  };

  estimate: {
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish
    ): Promise<BigNumber>;
  };
}
