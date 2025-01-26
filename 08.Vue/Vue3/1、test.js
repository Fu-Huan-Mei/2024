//1、动态生成所有季度数据
function calculateQuarterlySum(item) {
    const quarters = {};
    const months = {
        '01': 'Q1', '02': 'Q1', '03': 'Q1',
        '04': 'Q2', '05': 'Q2', '06': 'Q2',
        '07': 'Q3', '08': 'Q3', '09': 'Q3',
        '10': 'Q4', '11': 'Q4', '12': 'Q4'
    };

    item.monthsData.forEach(monthItem => {
        const date = monthItem.dataDt;
        const month = date.slice(-2);
        const quarter = months[month];
        const year = date.slice(0, 4);
        const quarterKey = `${year}年第${['Q1', 'Q2', 'Q3', 'Q4'].indexOf(quarter) + 1}季度`; 
        // 组合成 "2024年第1季度" 这样的键

        if (!quarters[quarterKey]) {
            quarters[quarterKey] = 0;
        }
        quarters[quarterKey] += monthItem.sz;
    });

    return { name:item.name, ...quarters }; // 将季度数据与原始数据合并
}
// 示例数据
const rawData = [
    {
        name: '一等行',
        monthsData: [
            { dataDt: '2025-03', sz: 30 },
            { dataDt: '2025-02', sz: 10 },
            { dataDt: '2025-01', sz: 0 },
            { dataDt: '2024-12', sz: 0 },
            { dataDt: '2024-11', sz: 328.96656206 },
            { dataDt: '2024-10', sz: 0 },
            { dataDt: '2024-09', sz: 0 },
            { dataDt: '2024-08', sz: 0 },
            { dataDt: '2024-07', sz: 0 },
            { dataDt: '2024-06', sz: 0 },
            { dataDt: '2024-05', sz: 0 },
            { dataDt: '2024-04', sz: 0 },
            // { dataDt: '2024-03', sz: 0 },
            // { dataDt: '2024-02', sz: 0 },
            // { dataDt: '2024-01', sz: 0 }
        ]
    },
    {
        name: '二等行',
        monthsData: [
            { dataDt: '2025-03', sz: 60 },
            { dataDt: '2025-02', sz: 20 },
            { dataDt: '2025-01', sz: 190 },
            { dataDt: '2025-01', sz: 0 },
            { dataDt: '2024-12', sz: 0 },
            { dataDt: '2024-11', sz: 328.96656206 },
            { dataDt: '2024-10', sz: 0 },
            { dataDt: '2024-09', sz: 0 },
            { dataDt: '2024-08', sz: 0 },
            { dataDt: '2024-07', sz: 0 },
            { dataDt: '2024-06', sz: 0 },
            { dataDt: '2024-05', sz: 0 },
            { dataDt: '2024-04', sz: 0 },
            // { dataDt: '2024-03', sz: 0 },
            // { dataDt: '2024-02', sz: 0 },
            // { dataDt: '2024-01', sz: 0 }
        ]
    },
];
const quarters = rawData.map(item => calculateQuarterlySum(item));


//2、动态生成表头所需要展示的季度
const currentYear = new Date().getFullYear();
const currentQuarter = Math.ceil((new Date().getMonth() + 1) / 3);
const tableHeaders = [];
if (currentQuarter === 1) {
    tableHeaders.push(`${currentYear}年第1季度`, `${currentYear - 1}年第4季度`);
} else if (currentQuarter === 2) {
    for (let i = 1; i <= 2; i++) {
        tableHeaders.push(`${currentYear}年第${i}季度`);
    }
    for (let i = 3; i <= 4; i++) {
        tableHeaders.push(`${currentYear - 1}年第${i}季度`);
    }
} else if (currentQuarter === 3) {
    for (let i = 1; i <= 3; i++) {
        tableHeaders.push(`${currentYear}年第${i}季度`);
    }
    tableHeaders.push(`${currentYear - 1}年第4季度`);
} else if (currentQuarter === 4) {
    for (let i = 1; i <= 4; i++) {
        tableHeaders.push(`${currentYear}年第${i}季度`);
    }
}

//3、表格内容根据表头动态动态匹配对应的数据：
// [
//   { '2025年第1季度': 0, '2024年第4季度': 328.96656206 },
//   { '2025年第1季度': 0, '2024年第4季度': 328.96656206 }
// ]
// function mapQuartersToHeaders(quartersArray, headers) {
//     return quartersArray.map(quarter => {
//         const mappedObject = {};
//         headers.forEach(header => {
//             mappedObject[header] = quarter[header] || 0;
//         });
//         return {name:quarter.name,...mappedObject};
//     });
// }

//可生成下面数据：[ { c1: 0, c2: 328.96656206 }, { c1: 0, c2: 328.96656206 } ]
function mapQuartersToHeaders(quartersArray, headers) {
    return quartersArray.map((quarter) => {
        const mappedObject = {};
        headers.forEach((header, headerIndex) => {
            mappedObject[`c${headerIndex + 1}`] = quarter[header] || 0;
        });
        return {name:quarter.name,...mappedObject};
    });
}
// 将季度数据映射到表头
const newTableData = mapQuartersToHeaders(quarters, tableHeaders);


