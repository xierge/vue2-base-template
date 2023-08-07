/*
 * @Date: 2023-01-30 22:52:07
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-01-30 22:54:04
 * @FilePath: /xierge/src/utils/excel.js
 * @description:
 */
import ExportJsonExcel from "js-export-excel";

export const downloadExcel = (data, columns, title) => {
  return new Promise((resolve) => {
    const formatData = data.map((item) => {
      const obj = {};
      for (const key of columns) {
        obj[key] = item[key] ?? "";
      }
      return obj;
    });
    const option = {
      fileName: title,
      datas: [
        {
          sheetData: formatData,
          sheetName: "sheet",
          sheetHeader: columns,
        },
      ],
    };
    const toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel();
    resolve("success");
  });
};
