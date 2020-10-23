import React from "react";
import ReactFileReader from "react-file-reader";

        // const data = XLSX.utils.sheet_to_json(ws);


function Csv() {

  const handleFiles = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Use reader.result
      const csv = reader.result;
      const lines = csv.split("\n");
      var result = [];
      const headers = lines[0].split(",");
      for (var i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }
        result.push(obj);
      }

      console.log(result[0]);


      //return result; //JavaScript object
      result = JSON.stringify(result); //JSON
      // console.log(result);
    };
    reader.readAsText(files[0]);
  };

  return (
    <div>
      <ReactFileReader
        handleFiles={handleFiles}
        multipleFiles={true}
        fileTypes={".csv"}
      >
        <button className="btn">Upload</button>
      </ReactFileReader>
    </div>
  );
}

export default Csv;