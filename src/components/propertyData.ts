interface IProperties {
    userID: string;
    rating: string;
    comments: string[];
    photos: string[];
    panaromaPhoto: string[];
    roomNumber: number;
    area: number;
    locationCoordinate: {
        lang: number;
        long: number;
    };
    locationName: string;
}

const Properties = [
    {
        _id: "pro001",
        userID: "000a1",
        photos: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBpbnNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        ],
        panaromaPhoto: "/public/hotel-room-panaroma.jpeg",
        roomNumber: 3,
        area: 100,
        locationCoordinate: {
            lang: 47.91123588464879,
            long: 106.88768562824536,
        },
        locationName: "bairlal number 1",
    },
    {
        _id: "pro002",
        userID: "000a2",
        photos: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBpbnNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        ],
        panaromaPhoto: "/public/hotel-room-panaroma.jpeg",
        roomNumber: 3,
        area: 100,
        locationCoordinate: {
            lang: 47.91905946666347,
            long: 106.84854683468191,
        },
        locationName: "aa buu med tegj bgd bichne",
    },
    {
        _id: "pro003",
        userID: "000a3",
        photos: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBpbnNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        ],
        panaromaPhoto: "/public/hotel-room-panaroma.jpeg",
        roomNumber: 3,
        area: 100,
        locationCoordinate: {
            lang: 47.93159774067078,
            long: 106.87017616796697,
        },
        locationName: "aa buu med tegj bgd bichne",
    },
    {
        _id: "pro004",
        userID: "000a4",
        photos: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBpbnNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        ],
        panaromaPhoto: "/public/hotel-room-panaroma.jpeg",
        roomNumber: 3,
        area: 100,
        locationCoordinate: {
            lang: 47.92791709465624,
            long: 106.876355977477,
        },
        locationName: "aa buu med tegj bgd bichne",
    },
    {
        _id: "pro005",
        userID: "000a1",
        photos: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBpbnNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        ],
        panaromaPhoto: "/public/hotel-room-panaroma.jpeg",
        roomNumber: 3,
        area: 100,
        locationCoordinate: {
            lang: 47.92389106860957,
            long: 106.93987071945989,
        },
        locationName: "aa buu med tegj bgd bichne",
    },
    {
        _id: "pro006",
        userID: "000a2",
        photos: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBpbnNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        ],
        panaromaPhoto: "/public/hotel-room-panaroma.jpeg",
        roomNumber: 3,
        area: 100,
        locationCoordinate: {
            lang: 47.916758516393024,
            long: 106.95120037022828,
        },
        locationName: "aa buu med tegj bgd bichne",
    },
    {
        _id: "pro007",
        userID: "000a3",
        photos: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBpbnNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        ],
        panaromaPhoto: "/public/hotel-room-panaroma.jpeg",
        roomNumber: 3,
        area: 100,
        locationCoordinate: {
            lang: 47.91353704144508,
            long: 106.90296352377504,
        },
        locationName: "aa buu med tegj bgd bichne",
    },
    {
        _id: "pro008",
        userID: "000a4",
        photos: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBpbnNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        ],
        panaromaPhoto: "/public/hotel-room-panaroma.jpeg",
        roomNumber: 3,
        area: 100,
        locationCoordinate: {
            lang: 47.92883726119054,
            long: 106.92854106869153,
        },
        locationName: "aa buu med tegj bgd bichne",
    },
    {
        _id: "pro009",
        userID: "000a1",
        photos: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBpbnNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        ],
        panaromaPhoto: "/public/hotel-room-panaroma.jpeg",
        roomNumber: 3,
        area: 100,
        locationCoordinate: {
            lang: 47.90018879427191,
            long: 106.89644039151447,
        },
        locationName: "aa buu med tegj bgd bichne",
    },
    {
        _id: "pro0010",
        userID: "000a2",
        photos: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbSUyMGluc2lkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBpbnNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        ],
        panaromaPhoto: "/public/hotel-room-panaroma.jpeg",
        roomNumber: 3,
        area: 100,
        locationCoordinate: {
            lang: 47.89800211533527,
            long: 106.91068828566259,
        },
        locationName: "aa buu med tegj bgd bichne",
    },
];

export default Properties;
