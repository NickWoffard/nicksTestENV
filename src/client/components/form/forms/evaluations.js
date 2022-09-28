const EvaluationJSON = {
  "title": "Evaluations",
  "logoPosition": "right",
  "pages": [
   {
    "name": "Evaluation",
    "elements": [
     {
      "type": "dropdown",
      "renderAs": "select2",
      "name": "employee_name",
      "title": "Employee"
     },
     {
      "type": "dropdown",
      "name": "evaluation_type",
      "startWithNewLine": false,
      "title": "Evaluation Type",
      "choices": [
       "Open",
       "Close"
      ]
     }
    ],
    "title": "Evaluation"
   },
   {
    "name": "Open Evaluation",
    "elements": [
     {
      "type": "text",
      "name": "evaluation_start_date",
      "title": "Evaluation Period Start Date"
     },
     {
      "type": "text",
      "name": "evaluation_end_date",
      "startWithNewLine": false,
      "title": "Evaluation Period End Date"
     }
    ],
    "visibleIf": "{evaluation_type} = 'Open'",
    "title": "Open Evaluation"
   },
   {
    "name": "Close Evaluation",
    "elements": [
     {
      "type": "text",
      "name": "evaluation_start_date",
      "title": "Evaluation Period Start Date"
     },
     {
      "type": "dropdown",
      "name": "evaluation_reason",
      "startWithNewLine": false,
      "title": "Reason for Evaluation",
      "choices": [
       "Annual",
       "End of Probationary Period"
      ],
      "hasOther": true
     }
    ],
    "visibleIf": "{evaluation_type} = 'Close'",
    "title": "Close Evaluation"
   },
   {
    "name": "Questions",
    "elements": [
    ]
   }
  ]
 }

export default EvaluationJSON;