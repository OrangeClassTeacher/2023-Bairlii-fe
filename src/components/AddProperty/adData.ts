interface IAdvertisements {
    _id: string;
    userID: string;
    propertyID: string;
    price: number;
    rentingDuration: number;
    paymentContition: string;
    adDuration: number;
}

const AdsData: Array<IAdvertisements> = [
    {
        _id: "ad001",
        userID: "000a1",
        propertyID: "pro001",
        price: 500000,
        rentingDuration: 6,
        paymentContition: "sar bur",
        adDuration: 3,
    },
    {
        _id: "ad002",
        userID: "000a2",
        propertyID: "pro002",
        price: 500000,
        rentingDuration: 6,
        paymentContition: "sar bur",
        adDuration: 3,
    },
    {
        _id: "ad003",
        userID: "000a3",
        propertyID: "pro003",
        price: 500000,
        rentingDuration: 6,
        paymentContition: "sar bur",
        adDuration: 3,
    },
    {
        _id: "ad004",
        userID: "000a4",
        propertyID: "pro004",
        price: 500000,
        rentingDuration: 6,
        paymentContition: "sar bur",
        adDuration: 3,
    },
    {
        _id: "ad005",
        userID: "000a1",
        propertyID: "pro005",
        price: 500000,
        rentingDuration: 6,
        paymentContition: "sar bur",
        adDuration: 3,
    },
    {
        _id: "ad006",
        userID: "000a2",
        propertyID: "pro006",
        price: 500000,
        rentingDuration: 6,
        paymentContition: "sar bur",
        adDuration: 3,
    },
    {
        _id: "ad007",
        userID: "000a3",
        propertyID: "pro007",
        price: 500000,
        rentingDuration: 6,
        paymentContition: "sar bur",
        adDuration: 3,
    },
    {
        _id: "ad008",
        userID: "000a4",
        propertyID: "pro008",
        price: 500000,
        rentingDuration: 6,
        paymentContition: "sar bur",
        adDuration: 3,
    },
    {
        _id: "ad009",
        userID: "000a1",
        propertyID: "pro009",
        price: 500000,
        rentingDuration: 6,
        paymentContition: "sar bur",
        adDuration: 3,
    },
    {
        _id: "ad010",
        userID: "000a2",
        propertyID: "pro010",
        price: 500000,
        rentingDuration: 6,
        paymentContition: "sar bur",
        adDuration: 3,
    },
];

export default AdsData;
