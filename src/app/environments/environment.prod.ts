
export const environment = {
  production: false,
  // SocketServer: 'http://localhost:3000/',

  rootApiUrl: 'https://localhost:7060/',
  // rootApiUrl: 'https://ngweb.jewelmanager.com/',
  // rootApiUrl: 'https://api.saadpos.com/',
  // rootApiUrl: 'https://api.thenej-lahore.com/',
  // rootApiUrl: 'https://api.pgocweb.com/',
  // rootApiUrl: 'https://api.aj-fahad.com/',
  // rootApiUrl: 'https://api.puregoldpos.com/',
  // rootApiUrl: 'https://api.sadiqjewel.com/',
  // rootApiUrl: 'https://api.jameelpos.com/',
  // rootApiUrl: 'https://api.fjposs.com/',
  // rootApiUrl: 'https://api.fajpos.com/',
  // rootApiUrl: 'https://api.wabpos.com/',
  // rootApiUrl: 'https://api.uakpos.com/',
  // rootApiUrl: 'https://api.yaupos.com/',
  // rootApiUrl: 'https://api.natjpos.com/',
  // rootApiUrl: 'https://api.sdapos.com/',
  // rootApiUrl: 'https://api.abmkpos.com/',
  // rootApiUrl: 'https://api.nowrozpos.com/',
  // rootApiUrl: 'https://api.zevratpos.com/',
  // rootApiUrl: 'https://api.aj-momin.com/',
  // rootApiUrl: 'https://api.darjewel.com/',
  // rootApiUrl: 'https://api.theguldsmeden.com/',
  // rootApiUrl: 'https://api.jewelerypos.com/',
  // rootApiUrl: 'https://api.shjwlry.com/',
  // rootApiUrl: 'https://api.hsjeweler.com/',
  // rootApiUrl: 'https://api.puregoldfsd.com/',
  // rootApiUrl: 'https://api.wajidalijewellers.com/',
  // rootApiUrl: 'https://api.bangashjewellers.com/',
  // rootApiUrl: 'https://api.goldendoorpos.com/',
};
export const AppSettting =
{
  pageReloaded: false,
  FullSetting: null,
  Origin: "",
  Route: null,
  appMenu: null,
  // appMenus: null,
  JewelManagerType: '',
  TWWithStoneW: false,
  ManualCalculateGoldRate: false,
  SaleCrystalReport: false,
  AbbreviationLength: 2,
  GoldRateWithMaking: false,
  GoldRateWithMakingValue: 0,
  StoneNameWithDollarRate: false,
  UseStLackerAsPurchaseMaking: false,
  isAlloy: false,
  addStockWeightRestrict: false,
  orderByBillNo: false,
  SaleRateFixing: '',
  ManualKarat: '',
  GoldRateType: '',
  WeightInGm: 0,
  ToFixed: 0,
  weightFixed: 0,
  GoldRates: null,
  ItemList: [],
  KaratList: [],
  DesignList: [],
  AccountList: [],
  ChildList: [],
  WorkerList: [],
  DefualtGoldRateType: "",
  DefaulKarat: "",
  DefaulItem: "Bindiya",
  PureGramRate: 0,
  PureGram10Rate: 0,
  PureTolaRate: 0,
  // Karat: 21,
  ConverToNumber(value: number, range: number): number {
    return Number(Number(value).toFixed(range));
  }
}

export const Controllers =
{
  GoldRate: "api/goldRate/",
  Sale: "api/sale/",
  Repair: "api/repairing/",
  Order: "api/order/",
  AccountType: "api/accountType/",
  Purchase: "api/purchase/",
  CurrencyType: "api/currencyType/",
  Banks: "/api/banks/",
  BankAccountHolders: "api/bankAccountHolders/",
  Stocks: "api/stocks/",
  Items: "api/items/",
  Karat: "api/karat/",
  Design: "api/design/",
  Account: "api/account/",
  Currency: "api/currency/",
  CountryCity: "api/countryCity/",
  Stones: "api/stones/",
  Countries: "api/Countries/",
  Worker: "api/Workerdealing/",
  SoftwareSettings: "api/SoftwareSettings/",
  Dashboard: "api/Dashboard/",
  Branch: "api/branch",
  Role: "api/role/",
  StockCheck: "api/stockcheck/",
  Auth:"api/Auth/"
}
