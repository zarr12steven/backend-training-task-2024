// 題目 - 樂呵呵健身房
// 樂呵呵健身房目前有 8 位會員

const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

// 第一階段：新增課程購買記錄（優惠定價）
// 撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格：

// 購買數量 / 單價 (每堂課)

// 1-10 堂 / 1500 元
// 11-20 堂 / 1300 元
// 21 堂以上 / 1100 元


// 記錄內容：

// 會員名稱 (name)：字串
// 購買課程數量 (courses)：數字
// 課程單價（自動計算）
// 總金額（courses × 單價）
// 功能要求：
// 使用陣列 purchaseRecords 儲存每筆記錄。
// 如果輸入無效（如名稱為空或數值不正確），提示輸入錯誤，並不儲存該記錄。
// 成功新增後，印出「新增購買記錄成功！會員 [會員名稱] 購買 [數量] 堂課，總金額為 [金額] 元。」
// 舉例：
// addPurchaseRecord("Alice", 4); >> 印出 console.log 文字為 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
// addPurchaseRecord("Bob", 12); >> 印出 console.log 文字為 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
// addPurchaseRecord("Charlie", 25); >> 印出 console.log 文字為 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
// addPurchaseRecord("Hannah", 50); >> 印出 console.log 文字為 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
// addPurchaseRecord("名稱", “課程數量”); >> 印出 console.log 文字為 輸入錯誤，請輸入有效的會員名稱和課程數量。

// 建立一個空陣列，用來儲存每筆記錄
const purchaseRecords = [];

// 防呆: 判斷輸入有效的會員名字和課程數量
function validateMember(name, courses){
  if (typeof name !== "string" || name == "" || typeof courses !== "number" || typeof courses === "undefined" || courses === null || courses === '' || courses <= 0 || isNaN(courses)) {
    console.log("輸入錯誤，請輸入有效的會員名字或課程數量。");
    return false;
  };
  return true;
}

// 計算每堂課程單價
function calculateUnitCoursePrice(courses){
  if (courses >= 1 && courses <= 10) {
    unitCoursePrice = 1500;
  } else if (courses <= 20) {
    unitCoursePrice = 1300;
  } else if (courses >= 21) {
    unitCoursePrice = 1300;
  }
  // console.log(unitCoursePrice);
  return unitCoursePrice;
}

function addPurchaseRecord(name, courses){
  if (validateMember(name, courses)) {
    // 計算每堂課程單價
    const unitCoursePrice = calculateUnitCoursePrice(courses);
    // 紀錄每一個會員的購買記錄
    const records = {
      name: name,
      courses: courses,
      unitCoursePrice: unitCoursePrice,
      totalPrice: courses * unitCoursePrice
    };
    // 將每筆記錄加入到 purchaseRecords 陣列中
    purchaseRecords.push(records);
    // 輸出會員購買記錄
    console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${courses * unitCoursePrice} 元。`);
  }

}

addPurchaseRecord("Alice", 4); 
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("不好說", "10");
addPurchaseRecord("名稱", "課程數量");


// 第二階段：計算目前的總營業額
// 新增函式 calculateTotalPrice，計算目前的總營業額為多少。

// 印出 console.log 文字為 目前總營業額為 ${totalPrice} 元

// console.log(purchaseRecords);
// console.log(purchaseRecords.length);
// console.log(purchaseRecords[0].totalPrice);

// // 用 for 迴圈計算總營業額
// function calculateTotalPrice(){
//   let totalPrice = 0;
//   for (let i = 0; i < purchaseRecords.length; i++) {
//     totalPrice += purchaseRecords[i].totalPrice;
//   }
//   console.log(`目前總營業額為 ${totalPrice} 元`);
// }

// 用 陣列方法中的 reduce 計算總營業額
// Reference: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function calculateTotalPrice() {
  const initialValue = 0;
  const totalPrice = purchaseRecords.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.totalPrice;
    }, initialValue
  )
  console.log(`目前總營業額為 ${totalPrice} 元`); 
}
calculateTotalPrice();

// 第三階段：篩選出還沒有購課的會員
// 新增函式 filterNoPurchaseMember，篩選特定條件的會員記錄。例如：未購買過課程的會員，並依序列出

// 印出 console.log 文字為 未購買課程的會員有：.......

// 用陣列方法中的 filter 和 some 篩選出未購買課程的會員
// Reference: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some

function filterNoPurchaseMember() {
  const findNoPurchaseMemeber = members.filter(member => {
    return !purchaseRecords.some(record => record.name === member);
  });
  
  console.log(`未購買課程的會員有：${res.join(", ")}`); 
}
filterNoPurchaseMember();
