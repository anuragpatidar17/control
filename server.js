var request = require('request');
var fs = require('fs');

var url = 'https://pdftables.com/api?key=f7z47cloyjc1&format=xlsx-single';
var req = request.post({encoding: null, url: url}, function (err, resp, body) {
 if (!err && resp.statusCode == 200) {
   fs.writeFile("output.xlsx", body, function(err) {
     if (err) {
       console.log('error writing file');
     }
   });
 } else {
   console.log('error retrieving URL');
 };
});

var form = req.form();
form.append('file', fs.createReadStream('SYS_USER_ROLES QGC.pdf'));









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