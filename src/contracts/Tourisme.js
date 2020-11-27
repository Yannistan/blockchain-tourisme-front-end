export const Tourisme_address = "0x008B9d66A537b8DAD0bB9Faaf9e2997B7034f9BE";

export const Tourisme_abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances_agence",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances_client",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "clients",
    outputs: [
      {
        internalType: "string",
        name: "nom",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isClient",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "no_reservation",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "date_registration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "offers",
    outputs: [
      {
        internalType: "string",
        name: "destination",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isTransport",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isSejour",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isRestauration",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isActivites",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isTours",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "priceinTokens",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tourAddress",
        type: "address",
      },
    ],
    name: "setTourToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_nom",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "clientId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "getClient",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "nom",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "password",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isClient",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "no_reservation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date_registration",
            type: "uint256",
          },
        ],
        internalType: "struct Tourisme.Client",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_destination",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_isTransport",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isSejour",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isRestauration",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isActivites",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isTours",
        type: "bool",
      },
    ],
    name: "choose_offer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getOffer",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "destination",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isTransport",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isSejour",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isRestauration",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isActivites",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isTours",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "priceinTokens",
            type: "uint256",
          },
        ],
        internalType: "struct Tourisme.Offer",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
    ],
    name: "reserveByClient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
