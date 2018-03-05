import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace vtb.commod.biznet{
   export class User extends Participant {
      email: string;
      jobTitle: string;
      location: string;
      firstName: string;
      lastName: string;
      telephone: string;
   }
   export class TransactionDirector extends User {
   }
   export class Trader extends User {
      tradingType: TraderType;
      productResponsibility: AssetClass;
   }
   export class Approver extends User {
   }
   export class Operator extends User {
   }
   export class RelationshipManager extends User {
   }
   export class Client extends Participant {
      clientId: string;
      clientName: string;
      country: string;
      clientUBO: string;
   }
   export class Description extends Asset {
      descriptionID: string;
      Detail: string;
   }
   export class TradeDescription extends Description {
   }
   export class OperationFlow extends Description {
   }
   export class ClientDescription extends Description {
   }
   export class ProductType extends Asset {
      productId: string;
      productName: string;
      productDesc: string;
      approved: boolean;
   }
   export class GecDoc extends Asset {
      projectName: string;
      submissionDate: Date;
      gecMeetingDate: Date;
      tradeExecutionDate: Date;
      owner: TransactionDirector;
      contractingEntity: Client;
      countryIncorporated: Country;
      submitterBusiness: BusinessArea;
      vtbContractingEntity: Entity;
      approvers: Approver[];
      traders: Trader[];
      productName: ProductType;
      tradeDetail: TradeDescription;
   }
   export enum TraderType {
      CREDIT,
      PHYSICAL,
      DERIVATIVES,
      FREIGHT,
   }
   export enum UserFunction {
      TRADER,
      SALES,
      CREDIT,
      LOGISTICS,
      CEO,
      MARKETRISK,
      TREASURER,
   }
   export enum AssetClass {
      CRUDEOIL,
      REFINEDPRODUCTS,
      BASEMETALS,
      DRYBULK,
      AGRICULTURE,
      FREIGHT,
   }
   export enum Entity {
      ZUG,
      PLC,
      VTBEUROPE,
      VTBPAO,
   }
   export enum Country {
      RUSSIA,
      SWITZERLAND,
      KAZAKHSTAN,
      UNITEDKINGDOM,
      INDIA,
      CHINA,
   }
   export enum BusinessArea {
      COMMODITIES,
      CLFI,
      ICPF,
   }
   export class GecDocument extends Transaction {
      currentGec: GecDoc;
   }
// }
