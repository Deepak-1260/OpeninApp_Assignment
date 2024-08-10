// import React, { useState } from "react";
// import * as XLSX from "xlsx";
// import Tag from './Tag'; 
// import './Upload.css'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

// function Upload({ theme }) {
//   const [excelFile, setExcelFile] = useState(null);
//   const [typeError, setTypeError] = useState(null);
//   const [excelData, setExcelData] = useState(null);
//   const [selectedTags, setSelectedTags] = useState({});
//   const [fileName, setFileName] = useState('Drop your excel sheet here or');

//   const handleFile = (e) => {
//     let types = [
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       "application/vnd.ms-excel",
//       "text/csv",
//     ];
//     let file = e.target.files[0];
//     if (file) {
//       if (file && types.includes(file.type)) {
//         setTypeError(null);
//         setFileName(file.name);
//         let reader = new FileReader();
//         reader.readAsArrayBuffer(file);
//         reader.onload = (e) => {
//           setExcelFile(e.target.result);
//         };
//       } else {
//         setTypeError("Please enter a valid Excel format");
//         setExcelFile(null);
//       }
//     } else {
//       console.log("Please select a file");
//     }
//   };

//   const handleSubmit = () => {
//     if (excelFile != null) {
//       const workbook = XLSX.read(excelFile, { type: "buffer" });
//       const worksheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[worksheetName];
//       const data = XLSX.utils.sheet_to_json(worksheet);
//       setExcelData(data.slice(0, 10));
//     }
//   };

//   const handleDropdownChange = (index, value) => {
//     setSelectedTags((prevSelectedTags) => {
//       const currentTags = Array.isArray(prevSelectedTags[index]) ? prevSelectedTags[index] : [];
//       const updatedTags = [...new Set([...currentTags, value])];
//       return {
//         ...prevSelectedTags,
//         [index]: updatedTags,
//       };
//     });
//   };

//   const handleTagRemove = (index, tagToRemove) => {
//     setSelectedTags((prevSelectedTags) => {
//       const currentTags = Array.isArray(prevSelectedTags[index]) ? prevSelectedTags[index] : [];
//       const updatedTags = currentTags.filter(tag => tag !== tagToRemove);
//       return {
//         ...prevSelectedTags,
//         [index]: updatedTags,
//       };
//     });
//   };

//   return (
//     <div className={`upload-section ${theme}`}>
//       <h1>Upload Your CSV</h1>
//       <div className="upload-box">
//         <span className="file-name">{fileName}</span>
//         <label htmlFor="file-upload" className="custom-file-label">browse</label>
//         <input
//           id="file-upload"
//           className="uploadFile"
//           type="file"
//           onChange={handleFile}
//           accept=".xlsx,.xls,.csv"
//         />
//         {typeError && <div className="alert-danger">{typeError}</div>}
//       </div>
//       <button className="upload-button" onClick={handleSubmit}>
//         <FontAwesomeIcon icon={faArrowUpFromBracket} className="icon" />
//         Submit
//       </button>
//       <div className="Viewer">
//         {excelData ? (
//           <div className="table-responsive">
//             <table className="table">
//               <thead>
//                 <tr>
//                   {Object.keys(excelData[0]).map((key) => (
//                     <th key={key}>{key}</th>
//                   ))}
//                   <th>Selected Tags</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {excelData.map((row, index) => (
//                   <tr key={index}>
//                     {Object.keys(row).map((key) => (
//                       <td key={key}>
//                         {key === "select tags" ? (
//                           <select
//                             value=""
//                             onChange={(e) =>
//                               handleDropdownChange(index, e.target.value)
//                             }
//                           >
//                             <option value="" disabled>
//                               Select an option
//                             </option>
//                             {row[key].split(",").map((option, idx) => (
//                               <option key={idx} value={option}>
//                                 {option}
//                               </option>
//                             ))}
//                           </select>
//                         ) : (
//                           row[key]
//                         )}
//                       </td>
//                     ))}
//                     <td>
//                       {selectedTags[index] && selectedTags[index].map((tag, idx) => (
//                         <Tag key={idx} tag={tag} onRemove={() => handleTagRemove(index, tag)} />
//                       ))}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div className="alert-danger">No data available</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Upload;

import React, { useState } from "react";
import * as XLSX from "xlsx";
import Tag from './Tag'; 
import './Upload.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

function Upload({ theme }) {
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [selectedTags, setSelectedTags] = useState({});
  const [fileName, setFileName] = useState('Drop your excel sheet here or');

  const handleFile = (e) => {
    let types = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "text/csv",
    ];
    let file = e.target.files[0];
    if (file) {
      if (file && types.includes(file.type)) {
        setTypeError(null);
        setFileName(file.name);
        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Please enter a valid Excel format");
        setExcelFile(null);
      }
    } else {
      console.log("Please select a file");
    }
  };

  const handleSubmit = () => {
    if (excelFile != null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
    }
  };

  const handleDropdownChange = (index, value) => {
    setSelectedTags((prevSelectedTags) => {
      const currentTags = Array.isArray(prevSelectedTags[index]) ? prevSelectedTags[index] : [];
      const updatedTags = [...new Set([...currentTags, value])];
      return {
        ...prevSelectedTags,
        [index]: updatedTags,
      };
    });
  };

  const handleTagRemove = (index, tagToRemove) => {
    setSelectedTags((prevSelectedTags) => {
      const currentTags = Array.isArray(prevSelectedTags[index]) ? prevSelectedTags[index] : [];
      const updatedTags = currentTags.filter(tag => tag !== tagToRemove);
      return {
        ...prevSelectedTags,
        [index]: updatedTags,
      };
    });
  };

  return (
    <div className={`upload-section ${theme}`}>
      <h1>Upload Your CSV</h1>
      <div className="upload-box">
       
         <label htmlFor="file-upload" >Drag your file or Browse</label> 
        <input
          id="file-upload"
          className="custom-file-label"
          type="file"
          style={{padding : '15px'}}
          onChange={handleFile}
          accept=".xlsx,.xls,.csv"
        />
        {typeError && <div className="alert-danger">{typeError}</div>}
      </div>
      <button className="upload-button" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="icon" />
        Submit
      </button>
      <div className="Viewer">
        {excelData ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="sticky-column">First Column Header</th>
                  {Object.keys(excelData[0]).slice(1).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                  <th>Selected Tags</th>
                </tr>
              </thead>
              <tbody>
                {excelData.map((row, index) => (
                  <tr key={index}>
                    <td className="sticky-column">{row[Object.keys(row)[0]]}</td>
                    {Object.keys(row).slice(1).map((key) => (
                      <td key={key}>
                        {key === "select tags" ? (
                          <select
                            value=""
                            onChange={(e) => handleDropdownChange(index, e.target.value)}
                          >
                            <option value="" disabled>
                              Select an option
                            </option>
                            {row[key].split(",").map((option, idx) => (
                              <option key={idx} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          row[key]
                        )}
                      </td>
                    ))}
                    <td>
                      {selectedTags[index] && selectedTags[index].map((tag, idx) => (
                        <Tag key={idx} tag={tag} onRemove={() => handleTagRemove(index, tag)} />
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="alert-danger">No data available</div>
        )}
      </div>
    </div>
  );
}

export default Upload;
