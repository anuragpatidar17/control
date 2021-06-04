const pdf2excel = require('pdf-to-excel');

try {
  const options = {
    // when current pdf page number changes call this function(optional)
    onProcess: (e) => console.warn(`${e.numPage} / ${e.numPages}`),
   
  }

  pdf2excel.genXlsx('Anurag_resume.pdf', 'bar.xlsx', options);
} catch (err) {
  console.error(err);
}











// inputing excel
//var wb = xlsx.readFile("P2000 Review Sheet - GC.036-March21.xlsx",{type:'binary', cellDates:true, cellNF: false, cellText:false});
//var wb2 = xlsx.readFile("GC36_P2000_User List_05th_April_2021.xlsx",{type:'binary', cellDates:true, cellNF: false, cellText:false});

// inputing sheets from particular excel
//var ws = wb.Sheets["OLD User list"];
//var ws2 = wb2.Sheets["User List"];
//var ws3 = wb.Sheets["Sheet1"];
//converting to JSON
//var data = xlsx.utils.sheet_to_json(ws); //Test Datasets
//var data2 = xlsx.utils.sheet_to_json(ws2);
//var data3 = xlsx.utils.sheet_to_json(ws3); // Prod Datasets

// declaring variables
//var newData = [];
//var i;
//var j;//
//var val1;
//var val2;

//var oldlist_length = data.length;
//var newlist_length = data2.length;


// Looping through Prod Datasets
//for(i=0;i<data2.length-1;i++)
//{

   //newData.push(data2[i].u_name);

    


//}

//for(i=1;i<data3.length-1;i++)
{

   //data3[i].u_name = "anurag";

    


}//