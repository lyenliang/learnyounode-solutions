var http = require('http');
var strr=new Array("","","");
var counter=0;
var flag=false;
for(var i=0;i<3;i++) {
  http.get(process.argv[2+i], function (responce) {
      //console.log("another crap")
      responce.setEncoding('utf8');
      responce.on("data", function(data) {
          strr[i]+=data.toString();
        }
      )
      responce.on("end", function(data) {
          counter++;
          if(counter==3 && flag==false) {
            for(var j=0;j<3;j++)
              console.log(strr[j]);
            flag=true;
          }
        }
      )
    }
  );
}