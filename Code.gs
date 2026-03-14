function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function saveResponse(qr, response) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("REPORTS");

  var lastRow = sheet.getLastRow()+1;

  sheet.getRange(lastRow,1).setValue(lastRow-1);
  sheet.getRange(lastRow,2).setValue(qr);
  sheet.getRange(lastRow,3).setValue(new Date());
  sheet.getRange(lastRow,4).setValue(response);

}