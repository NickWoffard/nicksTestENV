const GiglioJSON = {
    "title": "Giglio",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "court_case_number",
        "title": "Court case number"
       },
       {
        "type": "text",
        "name": "da_number",
        "startWithNewLine": false,
        "title": "DA number"
       },
       {
        "type": "text",
        "name": "defendant_name",
        "title": "Defendant name"
       },
       {
        "type": "matrixdynamic",
        "name": "question1",
        "title": "Agency case numbers",
        "columns": [
         {
          "name": "agency_case_number",
          "title": "Case number"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rowCount": 1
       },
       {
        "type": "matrixdynamic",
        "name": "question2",
        "startWithNewLine": false,
        "title": "Prosecutors",
        "columns": [
         {
          "name": "prosecutor",
          "title": "Prosecutor"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rowCount": 1
       },
       {
        "type": "matrixdynamic",
        "name": "defense_attorneys",
        "title": "Defense attorneys",
        "columns": [
         {
          "name": "defense_attorney",
          "title": "Defense attorney"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rowCount": 1
       },
       {
        "type": "matrixdynamic",
        "name": "witnesses",
        "startWithNewLine": false,
        "title": "Witnesses",
        "columns": [
         {
          "name": "witness",
          "title": "Witness"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rowCount": 1
       }
      ]
     }
    ]
   }

   export default GiglioJSON;