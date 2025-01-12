// ### 題目一：比較運算子
// 請依序告知以下 console.Log 會顯示什麼值，
// 若不確定答案，可將 code 貼在 chrome console 顯示後，再回頭補知識點。

let a = 9;              // 宣告一個變數 a，賦值為 9，資料型別為 number
let b = 13;             // 宣告一個變數 b，賦值為 13，資料型別為 number
console.log(a > 0);     // > 關係運算子(優先性: 10)，會從左至右執行，9 有大於 0，輸出結果為 true，資料型別為 boolean
console.log(b > a);     // > 關係運算子(優先性: 10)，會從左至右執行，13 大於 9，輸出結果 true，資料型別為 boolean
console.log(a + b > 1); // 9 加 13 大於 1，輸出結果為 true，資料型別為 boolean


let c = 51; // 宣告一個變數 c，賦值為 51，資料型別為 number
let d = 163; // 宣告一個變數 d，賦值為 163，資料型別為 number

// == 是相等運算子(優先性: 9)，會從左至右執行，進行值的比較，c 和 d 資料型別為 number，不需要做資料型別轉換，51 不等於 163，輸出結果為 false，資料型別為 boolean
console.log(c == d);

// !== 是不恆等運算子(優先性: 9)，會從左至右執行，除了會比較值，也會比較資料型別是否相同，51 不等於 163，c 和 d 資料型別都是 number，輸出結果為 true，資料型別為 boolean
console.log(c !== d);

let e = 28; // 宣告一個變數 e，賦值為 28，資料型別為 number
let f = 45; // 宣告一個變數 f，賦值為 45，資料型別為 number

// >= 是大於等於運算子(優先性: 10)，會從左至右執行，進行值的比較，e 和 f 資料型別是 number，不需要做資料型別轉換，45 大於 28，輸出 true，資料型別為 boolean
console.log(f >= e);
// != 是不相等運算子(優先性: 9)，會從左至右執行，進行值的比較，e 和 f 資料型別是 number，不需要做資料型別轉換，45 不等於 28，輸出 true，資料型別為 boolean
console.log(f != e);
// == 是相等運算子(優先性: 9)，會從左至右執行，進行值的比較，e 和 f 資料型別是 number，不需要做資料型別轉換，45 不等於 28，輸出 false，資料型別為 boolean
console.log(f == e);

// ### 題目二：比較運算子 + 強制轉型
// 請回答每個 console.log 的值為？

let g = 8;    // 宣告一個變數 g，賦值為 8，資料型別為 number
let h = '8';  // 宣告一個變數 h，賦值為 '8'，資料型別為 string

// == 是相等運算子(優先性: 9)，會從左至右執行，g * h 會進行數值相乘，需要把 h 從 string '8' 轉換為 number 8，相乘結果為 64，資料型別為 number
// 進行值的比較，此時相等運算子二邊的資料型別是 number，不需要做資料型別轉換，64 不等於 88(number)，輸出結果 false，資料型別為 boolean
console.log(g * h == 88);

// == 是相等運算子(優先性: 9)，會從左至右執行，g * h 會進行數值相乘，需要把 h 從 string '8' 轉換為 number 8，相乘結果為 64，資料型別為 number
// 進行值的比較，此時相等運算子二邊的資料型別是 number，不需要做資料型別轉換，64 等於 64(number)，輸出結果 true，資料型別為 boolean
console.log(g * h == 64);

// === 是恆等運算子(優先性: 9)，會從左至右執行，g * h 會進行數值相乘，需要把 h 從 string '8' 轉換為 number 8，相乘結果為 64，資料型別為 number
// 進行值和資料型別的比較，此時相等運算子二邊的資料型別是 number，64 等於 64(number)，輸出結果 true，資料型別為 boolean
console.log(g * h === 64);

let i = '9'; // 宣告一個變數 i，賦值為 '9'，資料型別為 string
let j = '9'; // 宣告一個變數 j，賦值為 '9'，資料型別為 string

// + 是一元正運算子(優先性: 12)，會從左至右執行，i + j 會進行字串相加，'9' + '9' 結果為 '99'，資料型別為 string
// 進行值的比較，此時會把資料型別 string '99' 轉換為 99 number， 99(number) 等於 99，輸出結果 true，資料型別為 boolean
console.log(i + j == 99);

// === 是恆等運算子(優先性: 9)，會從左至右執行，i + j 會進行字串相加，'9' + '9' 結果為 '99'，資料型別為 string
// 進行值和資料型別嚴格比較，此時相等運算子二邊的資料型別是 string，'99' 等於 '99'，輸出結果 true，資料型別為 boolean
console.log(i + j === '99');

// + 是一元正運算子(優先性: 12)，會從左至右執行，i + j 會進行字串相加，'9' + '9' 結果為 '99'，資料型別為 string
// 進行值和資料型別嚴格比較，發現左右二邊的資料型別不同，'99'(string) 不等於 99(number)，輸出結果 false，資料型別為 boolean
console.log(i + j === 99);

var k = 3;   // 宣告一個變數 k，賦值為 3，資料型別為 number
var l = '8'; // 宣告一個變數 l，賦值為 '8'，資料型別為 string

// * 是乘法運算子(優先性: 13)，會從左至右執行，k * l 會進行數值相乘，需要把 l 從 string '8' 轉換為 number 8，相乘結果為 24，資料型別為 number
// 進行值的比較，此時相等運算子二邊的資料型別是 number，24 大於 21，輸出結果 true，資料型別為 boolean
console.log(k * l > 21);

// ### 題目三：邏輯運算子 + if, else
// 情境：健身房週年慶，買課程送贈品
// 健身房準備了 280 個贈品，只要有達以下條件之一，就送會員一個贈品
// 1. 消費滿 1599 元
// 2. 是健身房的 VIP 會員
// Bob 今天來消費了 1800 元，但並非 VIP 會員
// 請問 Bob 是否有獲得贈品，以及贈品剩下多少？請完成以下修改處程式碼

let giftNum = 280; /* 贈品數量 */
let giftPriceRule = 1599; /* 贈品消費門檻 */
let BobPrice = 1800; /* Bob 消費金額 */
let BobIsVip = false; /* Bob 是否為 VIP */

// 練習：（可自行將下方程式碼的註解刪除，完成答題）

if (BobPrice >= giftPriceRule || BobIsVip === false) {
  giftNum -= 1;
  console.log("客戶您好，您有符合贈品資格");
} else {
  console.log("客戶您好，您沒有符合贈品資格");
}

console.log(`贈品還剩下${giftNum}個`);

// ### 題目四：
// 健身房的業績獎金計算
// 會計官想寫一個程式，來計算教練的業績獎金，以下為條件值
// 條件一：不管有無課程，基本獎金先給 6,000元
// 條件二：全年業績在 10 萬以下者，給 10% 獎金
// 條件三：全年業績超過 10 萬 ~ 30 萬以下者，給 15% 獎金
// 條件四：全年業績超過 30 萬者，給 20% 獎金

// 例如小華的全年業績為 8 萬：80,000 * 0.1 + 6,000 總計需要支付 14,000 元獎金。

let coachIncome = 240000; // 小明全年業績
let baseBonus = 6000; // 基本獎金
let coachBonus = baseBonus; // 教練業績獎金帳單，並已加入條件一基本獎金

if (coachIncome < 100000) {
  coachBonus += coachIncome * 0.1;
} else if (coachIncome >= 100000 && coachIncome < 300000) {
  coachBonus += coachIncome * 0.15;
} else if (coachIncome >= 300000) {
  coachBonus += coachIncome * 0.2;
}

// 練習：計算教練業績獎金

console.log(`小明總共需支付 $${coachBonus} 獎金`);

// ### 題目五：剪刀石頭布
// 請寫程式來判斷剪刀石頭布的輸贏
// 宣告兩個變數，一個是 playerA 另一個是 playerB
// 請透過 if, if 包 if, else if, else 等方法思考每個玩家出拳的情境

let playerA = '剪刀';
let playerB = '剪刀';

// 練習：使用 if, else if, else 判斷輸贏

if (playerA === '剪刀' && playerB === '剪刀' || playerA === '石頭' && playerB === '石頭' || playerA === '布' && playerB === '布') {
  console.log('平手');
} else if (playerA === '剪刀' && playerB === '石頭' || playerA === '石頭' && playerB === '布' || playerA === '布' && playerB === '剪刀') {
  console.log('PlayerB獲勝');
} else if (playerA === '剪刀' && playerB === '布' || playerA === '石頭' && playerB === '剪刀' || playerA === '布' && playerB === '石頭') {
  console.log('PlayerA獲勝');
} else {
  console.log('你作弊，不玩了');
}

// ### 題目六：陣列、物件變數定義
// 這是一間位於高雄市的健身房，名為「高雄市健身教練聯盟」，專注於提供高品質的健身指導服務。健身房內有多位專業教練，以下是兩位教練的詳細介紹：
/*
王教練：
- 專長：力量訓練、減重課程
- 課程：
  - 個人訓練課程：每次收費 2000 元，課程時長 60 分鐘，目前有空堂。
  - 團體訓練課程：每次收費 1500 元，課程時長 90 分鐘，目前無空堂。
- 背景介紹：王教練擁有 5 年教學經驗，專精於提升學員的肌力與減脂，適合希望快速達成體能目標的學員。
- 是否接收新學員：是

李教練：
- 專長：瑜伽、體態雕塑
- 課程：
  - 個人訓練課程：每次收費 1800 元，課程時長 50 分鐘，目前無空堂。
  - 團體訓練課程：每次收費 1200 元，課程時長 75 分鐘，目前有空堂。
- 背景介紹：李教練是一位瑜伽大師，擁有 10 年教學經驗，擅長幫助學員雕塑完美體態，適合希望改善姿態與柔軟度的學員。
- 是否接收新學員：否
*/

 // 練習：使用物件變數定義兩位教練的資訊

// 宣告 gymCoach 為一個物件(object)
const gymCoach = {
  // coachWang 是一個物件(object)
  coachWang: {
    // coachWang 物件中的 lastName 屬性
    lastName: '王',
    experience: 5,
    // 陣列裡的元素是 string
    expertise: ['力量訓練', '減重課程'],
    // 陣列裡的元素是 object
    courses: [
      { type: 'personalTraining', price: 2000, minutes: 60, available: true },
      { type: 'groupTraining', price: 1500, minutes: 90, available: false },
    ],
    // Step1: gymCoach 本身是一個物件，而物件中又包含了 coachWang 這個物件
    // Step2: coachWang 物件內，包含了屬性 lastName(string)、experience(number) 以及 introduction(function) 這個方法，
    // Step3: 執行呼叫 gymCoach.coachWang.introduction()，introduction(function) 會被執行，
    // 執行時，this 指向的是 coachWang 這個物件，讓 this 能取用 coachWang 的 lastName 和 experience 的屬性值，
    // 這時候，模板字串中的 ${this.lastName} 和 ${this.experience} 就能動態地被替換為 王 和 5，
    // this.lastName 對應 coachWang.lastName 的值（'王'），
    // this.experience 對應 coachWang.experience 的值（5）。
    introduction() { return `${this.lastName}教練擁有 ${this.experience} 年教學經驗，專精於提升學員的肌力與減脂，適合希望快速達成體能目標的學員。`},
    // coachWang 物件中的 acceptNewStudent 屬性
    acceptNewStudent: true
  },
  coachLee: {
    lastName: '李',
    experience: 10,
    expertise: ['瑜伽', '體態雕塑'], 
    courses: [
      { type: 'personalTraining', price: 1800, minutes: 50, available: false},
      { type: 'groupTraining', price: 1200, minutes: 75, available: true },
    ],
    introduction() { return `${this.lastName}教練是一位瑜伽大師，擁有 ${this.experience} 年教學經驗，擅長幫助學員雕塑完美體態，適合希望改善姿態與柔軟度的學員。`},
    acceptNewStudent: false
  }
};

console.log(gymCoach);
console.log(gymCoach.coachWang.introduction());
console.log(gymCoach.coachLee.introduction());

// ### 題目七：
// 主管要求健身中心的兩位教練業績都需達到 50,000元
// 請透過以下資訊修改，幫助教練業績達標！
let performanceData = {
  company: 'hahaFitness',
  bossName: 'casper',
  coaches: [
    {
      name: 'Alice',
      performance: 42000,
    },
    {
      name: 'Bob',
      performance: 38000,
    },
  ],
};

// 練習：第一位教練（可將下方程式碼註解移除，完成答題）

// if (/* 判斷邏輯，使其為 true */) {
//   // 請填寫第一位教練業績增長程式碼，使用 +=
// }

const targetPerformance = 50000;

if (performanceData.coaches[0].performance <= targetPerformance) {
  const differential = targetPerformance - performanceData.coaches[0].performance;
  const attain = performanceData.coaches[0].performance += differential;
  console.log(`${(performanceData.coaches[0].name)}教練，目前業績 ${attain} 元，恭喜業績已達標`);
}

// 練習：第二位教練（可將下方程式碼註解移除，完成答題）

// if (/* 判斷邏輯，使其為 true */) {
//   // 請填寫第二位教練業績增長程式碼，使用 +=
// }

if (performanceData.coaches[1].performance <= targetPerformance) {
  const differential = targetPerformance - performanceData.coaches[1].performance;
  const attain = performanceData.coaches[1].performance += differential;
  console.log(`${(performanceData.coaches[1].name)}教練，目前業績 ${attain} 元，恭喜業績已達標`);
}

console.log(performanceData);

// ### 題目八
/* 
使用 `物件包含物件` 的格式定義以下內容：
  - 跑步機每分鐘消耗 10 卡
  - 瑜伽每分鐘消耗 5 卡
  - 騎腳踏車每分鐘消耗 8 卡
*/
// const activities = {}; // 練習：使用 `物件包含物件` 的格式定義運動類型與每分鐘消耗卡路里

const activities = {
  treadmill: {
    name: '跑步機',
    caloriesPerMinute: 10,
  },
  yuga: {
    name: '瑜伽',
    caloriesPerMinute: 5,
  },
  cycling: { 
    name: '騎腳踏車',
    caloriesPerMinute: 8,
  }
}

console.log(activities);

// ## 題目九
// 情境：算小明今天的卡路里消耗
// 承上題，根據運動類型與每分鐘消耗卡路里的變數設計，計算小明消耗的卡路里。
// 小明今天騎了 10 分鐘的腳踏車去健身房，並先跑了 30 分鐘的跑步機熱身，最後再參加了 40 分鐘的瑜伽團課，最後再騎 10 分鐘腳踏車回家。

let calorieBurn = 0;
let goToGym = 10;
let warmUp = 30;
let joinCourse = 40;
let backToHome = 10;

calorieBurn += ((activities.cycling.caloriesPerMinute * goToGym) + 
                (activities.treadmill.caloriesPerMinute * warmUp) + 
                (activities.yuga.caloriesPerMinute * joinCourse) + 
                (activities.cycling.caloriesPerMinute * backToHome));

// 練習：計算小明今日消耗的卡路里

console.log(`小明今日一共消耗約 ${calorieBurn} 卡路里。`);

// ### 10. 運動量是否達標！
// 情境：小明記錄了一週內每一天的運動情況，包含運動時長（分鐘）和平均心率（次數）。
/* 現有的運動標準為「533原則」：
  1. 每週運動至少 5 次
  2. 或每週累計運動時間達 150 分鐘
  3. 每次運動必須達到 **30 分鐘** 且平均心率達 **130 次以上** 才算合格。
  
  請完成程式碼，判斷小明是否符合「533原則」。
*/

// 運動紀錄
let totalDuration = 0; // 累計符合條件的運動時間
let validDays = 0; // 符合條件的運動次數

// 小明的一週運動紀錄
const exerciseRecords = [
  { day: 'Monday', duration: 40, heartRate: 135 },
  { day: 'Tuesday', duration: 20, heartRate: 120 },
  { day: 'Wednesday', duration: 30, heartRate: 140 },
  { day: 'Thursday', duration: 0, heartRate: 0},
  { day: 'Friday', duration: 50, heartRate: 125 },
  { day: 'Saturday', duration: 60, heartRate: 145 },
  { day: 'Sunday', duration: 0, heartRate: 0 },
];

// 範例：週一
// if (exerciseRecords[0].duration >= 30 && exerciseRecords[0].heartRate >= 130) {
//   totalDuration += mondayDuration;
//   validDays += 1;
// }

// 練習：週二、週三、週四、週五、週六

let mondayDuration = exerciseRecords[0].duration;
let tuesdayDuration  = exerciseRecords[1].duration;
let wednesdayDuration = exerciseRecords[2].duration;
let thursdayDuration = exerciseRecords[3].duration;
let fridayDuration = exerciseRecords[4].duration;
let saturdayDuration =  exerciseRecords[5].duration;
let sundayDuration =  exerciseRecords[6].duration;

// 簡易版
// if (exerciseRecords[0].duration >= 30 && exerciseRecords[0].heartRate >= 130) {
//   totalDuration += mondayDuration;
//   validDays += 1;
//   console.log(totalDuration);
// };

// if (exerciseRecords[1].duration >= 30 && exerciseRecords[1].heartRate >= 130) {
//   totalDuration += tuesdayDuration;
//   validDays += 1;
//   console.log(totalDuration);
// };

// if (exerciseRecords[2].duration >= 30 && exerciseRecords[2].heartRate >= 130) {
//   totalDuration += wednesdayDuration;
//   validDays += 1;
//   console.log(totalDuration);
// };

// if (exerciseRecords[3].duration >= 30 && exerciseRecords[3].heartRate >= 130) {
//   totalDuration += thursdayDuration;
//   validDays += 1;
//   console.log(totalDuration);
// };

// if (exerciseRecords[4].duration >= 30 && exerciseRecords[4].heartRate >= 130) {
//   totalDuration += fridayDuration;
//   validDays += 1;
//   console.log(totalDuration);
// };

// if (exerciseRecords[5].duration >= 30 && exerciseRecords[5].heartRate >= 130) {
//   totalDuration += saturdayDuration;
//   validDays += 1;
//   console.log(totalDuration);
// };

// if (exerciseRecords[6].duration >= 30 && exerciseRecords[6].heartRate >= 130) {
//   totalDuration += sundayDuration;
//   validDays += 1;
//   console.log(totalDuration);
// }

// for 迴圈版
for (const exerciseRecord of exerciseRecords) {
  if (exerciseRecord.duration >= 30 && exerciseRecord.heartRate >= 130) {
    totalDuration += exerciseRecord.duration;
    validDays += 1;
    console.log(`有達成目標的是 ${exerciseRecord.day}，運動時間: ${exerciseRecord.duration}，運動心率: ${exerciseRecord.heartRate}`);
  }
}

// // 練習：判斷是否符合 533 原則
// let isCompliant; // 條件：運動次數至少 5 次 || 運動時間累績達標 >= 150;

let isCompliant = (totalDuration >= 150 || validDays >= 5)

console.log(`小明的運動量是否達標: ${isCompliant}`); // 輸出: 小明的運動量是否達標
