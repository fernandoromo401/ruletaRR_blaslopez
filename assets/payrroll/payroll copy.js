const payroll =
    [
        {
            name: 111,
            data: {
                positive: [18,21,24,30,33,36,17,20,23,29,32,35],
                negative: [0,26,3,12,28,9,31,27,6,34,4,19,15],
                support: [7,22,14,1,16,5,10,8,11,13,25,2]
            }
        },
        {
            name: 112,
            data: {
                positive: [15,21,24,27,33,36,14,20,23,26,32,35],
                negative: [28,7,29,18,22,9,8,30,11,6,34,17,25],
                support: [0,3,12,31,1,16,5,10,13,2,4,19]
            }
        },
        {
            name: 113,
            data: {
                positive: [15,18,24,27,30,36,14,17,23,26,29,35],
                negative: [12,28,9,31,20,1,33,34,25,2,21,4,19],
                support: [0,3,7,22,16,5,10,8,11,13,6,32]
            }
        },
        {
            name: 114,
            data: {
                positive: [15,18,21,27,30,33,14,17,20,26,29,32],
                negative: [3,35,12,28,16,24,5,10,23,8,11,36,13],
                support: [0,7,22,9,31,1,6,34,25,2,4,19]
            }
        },
        {
            name: 121,
            data: {
                positive: [18,21,24,30,33,36,16,19,22,28,31,34],
                negative: [0,26,3,35,12,10,23,27,6,17,25,15,32],
                support: [7,29,9,14,20,1,5,8,11,13,2,4]
            }
        },
        {
            name: 122,
            data: {
                positive: [15,21,24,27,33,36,13,19,22,25,31,34],
                negative: [0,26,3,35,12,28,7,29,18,10,23,8,30],
                support: [9,14,20,1,16,5,11,6,17,2,4,32]
            }
        },
        {
            name: 123,
            data: {
                positive: [15,18,24,27,30,36,13,16,22,25,28,34],
                negative: [0,26,3,35,31,14,20,1,10,23,21,4,32],
                support: [28,18,22,16,24,30,36,13,27,34,25,15]
            }
        },
        {
            name: 124,
            data: {
                positive: [15,18,21,27,30,33,13,16,19,25,28,31],
                negative: [0,26,3,35,12,7,29,14,20,5,10,23,8],
                support: [22,9,1,24,11,36,6,34,17,2,4,32]
            }
        },
        {
            name: 131,
            data: {
                positive: [17,20,23,29,32,35,16,19,22,28,31,34],
                negative: [26,3,1,33,8,30,11,36,13,27,2,21,4],
                support: []
            }
        },
        {
            name: 132,
            data: {
                positive: [14,20,23,26,32,35,13,19,22,25,31,34],
                negative: [12,28,7,29,33,16,24,5,10,8,30,11,36]
            }
        },
        {
            name: 133,
            data: {
                positive: [14,17,23,26,29,35,13,16,22,25,28,34],
                negative: [0,20,1,33,8,30,11,36,21,4,19,15,32]
            }
        },
        {
            name: 134,
            data: {
                positive: [14,17,20,26,29,32,13,16,19,25,28,31],
                negative: [35,12,18,22,5,10,23,8,30,11,36,27,6]
            }
        },
        {
            name: 211,
            data: {
                positive: [6,9,12,30,33,36,29,32,35,5,8,11],
                negative: [26,3,31,14,20,1,34,17,25,2,21,4,19]
            }
        },
        {
            name: 212,
            data: {
                positive: [3,9,12,27,33,36,2,8,11,26,32,35],
                negative: [7,29,18,14,20,24,5,10,34,17,21,4,19]
            }
        },
        {
            name: 213,
            data: {
                positive: [3,6,12,27,30,36,2,5,11,26,29,35],
                negative: [22,9,31,14,20,1,33,16,21,4,19,15,32]
            }
        },
        {
            name: 214,
            data: {
                positive: [3,6,9,27,30,33,2,5,8,26,29,32],
                negative: [12,28,7,31,14,20,1,36,17,25,21,4,19]
            }
        },
        {
            name: 221,
            data: {
                positive: [6,9,12,30,33,36,4,7,10,28,31,34],
                negative: [0,26,3,18,20,24,5,25,2,21,19,15,32]
            }
        },
        {
            name: 222,
            data: {
                positive: [3,9,12,27,33,36,1,7,10,25,31,34],
                negative: [0,24,5,23,8,30,11,2,21,4,19,15,32]
            }
        },
        {
            name: 223,
            data: {
                positive: [3,6,12,27,30,36,1,4,10,25,28,34],
                negative: [0,29,18,22,9,31,14,20,33,16,24,15,32]
            }
        },
        {
            name: 224,
            data: {
                positive: [3,6,9,27,30,33,1,4,7,25,28,31],
                negative: [0,26,,18,24,5,10,23,8,11,36,19,15,32]
            }
        },
        {
            name: 231,
            data: {
                positive: [5,8,11,29,32,35,4,7,10,28,31,34],
                negative: [0,26,14,20,1,33,16,36,13,27,25,2,21]
            }
        },
        {
            name: 232,
            data: {
                positive: [2,8,11,26,32,35,1,7,10,25,31,34],
                negative: [29,18,22,9,33,16,24,13,27,6,4,19,15]
            }
        },
        {
            name: 233,
            data: {
                positive: [2,5,11,26,29,35,1,4,10,25,28,34],
                negative: [0,18,22,9,31,14,20,36,13,27,6,15,32]
            }
        },
        {
            name: 234,
            data: {
                positive: [2,5,8,26,29,32,1,4,7,25,28,31],
                negative: [3,35,22,9,33,16,30,11,36,13,27,6,34]
            }
        },
        {
            name: 311,
            data: {
                positive: [6,9,12,18,21,24,5,8,11,17,20,23],
                negative: [0,26,3,1,33,16,36,13,27,4,19,15,32]
            }
        },
        {
            name: 312,
            data: {
                positive: [3,9,12,15,21,24,2,8,11,14,20,23],
                negative: [0,26,7,29,18,33,16,13,27,6,34,17,32]
            }
        },
        {
            name: 313,
            data: {
                positive: [3,6,12,15,18,24,2,5,11,14,17,23],
                negative: [28,7,9,31,20,1,33,36,13,27,21,4,19]
            }
        },
        {
            name: 314,
            data: {
                positive: [3,6,9,15,18,21,2,5,8,14,17,20],
                negative: [0,12,28,7,29,33,16,24,30,11,36,13,32]
            }
        },
        {
            name: 321,
            data: {
                positive: [6,9,12,18,21,24,4,7,10,16,19,22],
                negative: [0,26,3,14,20,1,8,30,11,36,17,25,32]
            }
        },
        {
            name: 322,
            data: {
                positive: [3,9,12,15,21,24,1,7,10,13,19,22],
                negative: [0,26,31,14,20,23,8,30,11,6,34,17,25]
            }
        },
        {
            name: 323,
            data: {
                positive: [3,6,12,15,18,24,1,4,10,13,16,22],
                negative: [0,26,28,7,31,14,8,30,11,17,25,2,21]
            }
        },
        {
            name: 324,
            data: {
                positive: [3,6,9,15,18,21,1,4,7,13,16,19],
                negative: [0,35,12,14,20,5,10,23,8,30,11,17,25]
            }
        },
        {
            name: 331,
            data: {
                positive: [5,8,11,17,20,23,4,7,10,16,19,22],
                negative: [0,26,3,35,12,28,9,31,13,27,6,34,32]
            }
        },
        {
            name: 332,
            data: {
                positive: [2,8,11,14,20,23,1,7,10,13,19,22],
                negative: [0,26,3,35,12,28,16,24,6,34,17,15,32]
            }
        },
        {
            name: 333,
            data: {
                positive: [2,5,11,14,17,23,1,4,10,13,16,22],
                negative: [0,26,3,35,12,28,7,29,27,6,19,15,32]
            }
        },
        {
            name: 334,
            data: {
                positive: [2,5,8,14,17,20,1,4,7,13,16,19],
                negative: [0,26,3,35,12,18,22,9,10,23,30,11,36]
            }
        },
    ]