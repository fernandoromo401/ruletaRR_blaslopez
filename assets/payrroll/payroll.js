const payroll =
    [
        {
            name: 111,
            data: {
                positive: [18,21,24,30,33,36,17,20,23,29,32,35],
                negative: [0,26,3,12,28,9,31,27,6,34,4,19,15],
                support: [7,22,14,1,16,5,10,8,11,13,25,2],
                green: [35,32]
            }
        },
        {
            name: 112,
            data: {
                positive: [15,21,24,27,33,36,14,20,23,26,32,35],
                negative: [28,7,29,18,22,9,8,30,11,6,34,17,25],
                support: [0,3,12,31,1,16,5,10,13,2,4,19],
                green: []
            }
        },
        {
            name: 113,
            data: {
                positive: [15,18,24,27,30,36,14,17,23,26,29,35],
                negative: [12,28,9,31,20,1,33,34,25,2,21,4,19],
                support: [0,3,7,22,16,5,10,8,11,13,6,32],
                green: [17]
            }
        },
        {
            name: 114,
            data: {
                positive: [15,18,21,27,30,33,14,17,20,26,29,32],
                negative: [3,35,12,28,16,24,5,10,23,8,11,36,13],
                support: [0,7,22,9,31,1,6,34,25,2,4,19],
                green: [30]
            }
        },
        {
            name: 121,
            data: {
                positive: [18,21,24,30,33,36,16,19,22,28,31,34],
                negative: [0,26,3,35,12,10,23,27,6,17,25,15,32],
                support: [7,29,9,14,20,1,5,8,11,13,2,4],
                green: [34]
            }
        },
        {
            name: 122,
            data: {
                positive: [15,21,24,27,33,36,13,19,22,25,31,34],
                negative: [0,26,3,35,12,28,7,29,18,10,23,8,30],
                support: [9,14,20,1,16,5,11,6,17,2,4,32],
                green: []
            }
        },
        {
            name: 123,
            data: {
                positive: [28,18,22,16,24,30,36,13,27,34,25,15],
                negative: [0,26,3,35,31,14,20,1,10,23,21,4,32],
                support: [12,7,29,9,33,5,8,11,6,17,2,19],
                green: []
            }
        },
        {
            name: 124,
            data: {
                positive: [15,18,21,27,30,33,13,16,19,25,28,31],
                negative: [0,26,3,35,12,7,29,14,20,5,10,23,8],
                support: [22,9,1,24,11,36,6,34,17,2,4,32],
                green: [28]
            }
        },
        {
            name: 131,
            data: {
                positive: [17,20,23,29,32,35,16,19,22,28,31,34],
                negative: [26,3,1,33,8,30,11,36,13,27,2,21,4],
                support: [0,12,7,18,9,14,24,5,10,6,25,15],
                green: []
            }
        },
        {
            name: 132,
            data: {
                positive: [14,20,23,26,32,35,13,19,22,25,31,34],
                negative: [12,28,7,29,33,16,24,5,10,8,30,11,36],
                support: [0,3,18,9,1,27,6,17,2,21,4,15],
                green: [23]
            }
        },
        {
            name: 133,
            data: {
                positive: [14,17,23,26,29,35,13,16,22,25,28,34],
                negative: [0,20,1,33,8,30,11,36,21,4,19,15,32],
                support: [3,12,7,18,9,31,24,5,10,27,6,2],
                green: []
            }
        },
        {
            name: 134,
            data: {
                positive: [14,17,20,26,29,32,13,16,19,25,28,31],
                negative: [35,12,18,22,5,10,23,8,30,11,36,27,6],
                support: [0,3,7,9,1,33,24,34,2,21,4,15],
                green: [13]
            }
        },
        {
            name: 211,
            data: {
                positive: [6,9,12,30,33,36,29,32,35,5,8,11],
                negative: [26,3,31,14,20,1,34,17,25,2,21,4,19],
                support: [0,28,7,18,22,16,24,10,23,13,27,15],
                green: []
            }
        },
        {
            name: 212,
            data: {
                positive: [3,9,12,27,33,36,2,8,11,26,32,35],
                negative: [7,29,18,14,20,24,5,10,34,17,21,4,19],
                support: [0,28,22,31,1,16,23,30,13,6,25,15],
                green: []
            }
        },
        {
            name: 213,
            data: {
                positive: [3,6,12,27,30,36,2,5,11,26,29,35],
                negative: [22,9,31,14,20,1,33,16,21,4,19,15,32],
                support: [0,28,7,18,24,10,23,8,13,34,17,25],
                green: []
            }
        },
        {
            name: 214,
            data: {
                positive: [3,6,9,27,30,33,2,5,8,26,29,32],
                negative: [12,28,7,31,14,20,1,36,17,25,21,4,19],
                support: [0,35,18,22,16,24,10,23,11,13,34,15],
                green: [2]
            }
        },
        {
            name: 221,
            data: {
                positive: [6,9,12,30,33,36,4,7,10,28,31,34],
                negative: [0,26,3,18,20,24,5,25,2,21,19,15,32],
                support: [35,29,22,14,1,16,23,8,11,13,27,17],
                green: [4]
            }
        },
        {
            name: 222,
            data: {
                positive: [3,9,12,27,33,36,1,7,10,25,31,34],
                negative: [0,24,5,23,8,30,11,2,21,4,19,15,32],
                support: [26,35,28,29,18,22,14,20,16,13,6,17],
                green: [10]
            }
        },
        {
            name: 223,
            data: {
                positive: [3,6,12,27,30,36,1,4,10,25,28,34],
                negative: [0,29,18,22,9,31,14,20,33,16,24,15,32],
                support: [26,35,7,5,23,8,11,13,17,2,21,19],
                green: [1]
            }
        },
        {
            name: 224,
            data: {
                positive: [3,6,9,27,30,33,1,4,7,25,28,31],
                negative: [0,26,,18,24,5,10,23,8,11,36,19,15,32],
                support: [35,12,29,22,14,20,16,13,34,17,2,21],
                green: [30]
            }
        },
        {
            name: 231,
            data: {
                positive: [5,8,11,29,32,35,4,7,10,28,31,34],
                negative: [0,26,14,20,1,33,16,36,13,27,25,2,21],
                support: [3,12,18,22,9,24,23,30,6,17,19,15],
                green: []
            }
        },
        {
            name: 232,
            data: {
                positive: [2,8,11,26,32,35,1,7,10,25,31,34],
                negative: [29,18,22,9,33,16,24,13,27,6,4,19,15],
                support: [0,3,12,28,14,20,5,23,30,36,17,21],
                green: []
            }
        },
        {
            name: 233,
            data: {
                positive: [2,5,11,26,29,35,1,4,10,25,28,34],
                negative: [0,18,22,9,31,14,20,36,13,27,6,15,32],
                support: [3,12,7,33,16,24,23,8,30,17,21,19],
                green: []
            }
        },
        {
            name: 234,
            data: {
                positive: [2,5,8,26,29,32,1,4,7,25,28,31],
                negative: [3,35,22,9,33,16,30,11,36,13,27,6,34],
                support: [0,12,18,14,20,24,10,23,17,21,19,15],
                green: []
            }
        },
        {
            name: 311,
            data: {
                positive: [6,9,12,18,21,24,5,8,11,17,20,23],
                negative: [0,26,3,1,33,16,36,13,27,4,19,15,32],
                support: [35,28,7,29,22,31,14,10,30,34,25,2],
                green: []
            }
        },
        {
            name: 312,
            data: {
                positive: [3,9,12,15,21,24,2,8,11,14,20,23],
                negative: [0,26,7,29,18,33,16,13,27,6,34,17,32],
                support: [35,28,22,31,1,5,10,30,36,25,4,19],
                green: []
            }
        },
        {
            name: 313,
            data: {
                positive: [3,6,12,15,18,24,2,5,11,14,17,23],
                negative: [28,7,9,31,20,1,33,36,13,27,21,4,19],
                support: [0,26,35,29,22,16,10,8,30,34,25,32],
                green: [14]
            }
        },
        {
            name: 314,
            data: {
                positive: [3,6,9,15,18,21,2,5,8,14,17,20],
                negative: [0,12,28,7,29,33,16,24,30,11,36,13,32],
                support: [26,35,22,31,1,10,23,27,34,25,4,19],
                green: []
            }
        },
        {
            name: 321,
            data: {
                positive: [6,9,12,18,21,24,4,7,10,16,19,22],
                negative: [0,26,3,14,20,1,8,30,11,36,17,25,32],
                support: [35,28,29,31,33,5,23,13,27,34,2,15],
                green: []
            }
        },
        {
            name: 322,
            data: {
                positive: [3,9,12,15,21,24,1,7,10,13,19,22],
                negative: [0,26,31,14,20,23,8,30,11,6,34,17,25],
                support: [35,28,29,18,33,16,5,36,27,2,4,32],
                green: []
            }
        },
        {
            name: 323,
            data: {
                positive: [3,6,12,15,18,24,1,4,10,13,16,22],
                negative: [0,26,28,7,31,14,8,30,11,17,25,2,21],
                support: [35,29,9,20,33,5,23,36,27,34,19,32],
                green: []
            }
        },
        {
            name: 324,
            data: {
                positive: [3,6,9,15,18,21,1,4,7,13,16,19],
                negative: [0,35,12,14,20,5,10,23,8,30,11,17,25],
                support: [26,28,29,22,31,33,24,36,27,34,2,32],
                green: []
            }
        },
        {
            name: 331,
            data: {
                positive: [5,8,11,17,20,23,4,7,10,16,19,22],
                negative: [0,26,3,35,12,28,9,31,13,27,6,34,32],
                support: [29,18,14,1,33,24,30,36,25,2,21,15],
                green: []
            }
        },
        {
            name: 332,
            data: {
                positive: [2,8,11,14,20,23,1,7,10,13,19,22],
                negative: [0,26,3,35,12,28,16,24,6,34,17,15,32],
                support: [29,18,9,31,33,5,30,36,27,25,21,4],
                green: []
            }
        },
        {
            name: 333,
            data: {
                positive: [2,5,11,14,17,23,1,4,10,13,16,22],
                negative: [0,26,3,35,12,28,7,29,27,6,19,15,32],
                support: [18,9,31,20,33,24,8,30,36,34,25,21],
                green: []
            }
        },
        {
            name: 334,
            data: {
                positive: [2,5,8,14,17,20,1,4,7,13,16,19],
                negative: [0,26,3,35,12,18,22,9,10,23,30,11,36],
                support: [28,29,31,33,24,27,6,34,25,21,15,32],
                green: [8]
            }
        },
    ]