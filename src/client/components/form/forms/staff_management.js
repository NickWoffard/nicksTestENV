var StaffManagementJSON = {
    "title": "Staff",
    "logoFit": "none",
    "logoPosition": "right",
    "completedHtml": "<h3>Thank you for your feedback</h3><div style=\"margin: 32px 0;\"><button class=\"rounded-button rounded-button--small\" onclick=\"reRunSurvey();\">Run Survey Again</button></div>",
    "completedHtmlOnCondition": [
     {
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>"
     },
     {
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>"
     }
    ],
    "pages": [
     {
      "name": "email_search",
      "elements": [
       {
        "type": "dropdown",
        "name": "email",
        "title": "Search by email",
        "renderAs": "select2"
       }
      ],
      "title": "Searcy by email"
     },
     {
      "name": "Staff Information",
      "elements": [
       {
        "type": "text",
        "name": "first_name",
        "title": "First name",
        "isRequired": true,
        "renderAs": "select2"
       },
       {
        "type": "text",
        "name": "last_name",
        "startWithNewLine": false,
        "title": "Last name",
        "isRequired": true,
        "renderAs": "select2"
       },
       {
        "type": "text",
        "name": "hire_date",
        "title": "Hire date",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "staff_id",
        "startWithNewLine": false,
        "title": "Staff ID"
       },
       {
        "type": "dropdown",
        "name": "staff_type",
        "startWithNewLine": false,
        "title": "Staff type",
        "choices": [
         "Employee",
         "Contractor",
         "Intern"
        ]
       },
       {
        "type": "dropdown",
        "name": "title",
        "title": "Title"
       },
       {
        "type": "dropdown",
        "name": "department",
        "startWithNewLine": false,
        "title": "Department"
       },
       {
        "type": "dropdown",
        "name": "rater_staff_guid",
        "title": "Rater"
       },
       {
        "type": "dropdown",
        "name": "reviewer_staff_guid",
        "startWithNewLine": false,
        "title": "Reviewer"
       },
       {
        "type": "dropdown",
        "name": "evaluation_series",
        "title": "Evaluation series"
       },
       {
        "type": "text",
        "name": "room_number",
        "startWithNewLine": false,
        "title": "Room number"
       },
       {
        "type": "boolean",
        "name": "is_supervisor",
        "title": "This person is a supervisor"
       }
      ],
      "title": "Staff Information"
     },
     {
      "name": "page1"
     }
    ],
    "showPageTitles": false,
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "checkErrorsMode": "onValueChanged",
    "completeText": "Send"
   }

export default StaffManagementJSON;