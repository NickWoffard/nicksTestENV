const warrant_review = {
    "title": "Warrant Review",
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
      "name": "Case",
      "elements": [
       {
        "type": "text",
        "name": "affiant_email",
        "title": "Your government email address",
        "isRequired": true,
        "renderAs": "select2"
       },
       {
        "type": "text",
        "name": "affiant_first",
        "title": "First name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "affiant_last",
        "startWithNewLine": false,
        "title": "Last name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "affiant_phone",
        "startWithNewLine": false,
        "title": "Work cell phone number",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "agency",
        "title": "Agency",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "agency_case_number",
        "startWithNewLine": false,
        "title": "Agency case number",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "primary_crime",
        "title": "Primary crime",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "date_of_incident",
        "startWithNewLine": false,
        "title": "Date of crime",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "saki_case",
        "title": "Is this a SAKI case?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "juvenile_case",
        "startWithNewLine": false,
        "title": "Were any of the suspects in your case juveniles at the time of the crime?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "custom_ada",
        "title": "Would you like to submit this request to a specific attorney?",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "custom_ada_email",
        "visibleIf": "{custom_ada} = true",
        "title": "Assistant district attorney email",
        "requiredIf": "{custom_ada} = true"
       }
      ],
      "title": "Staff Information"
     }
    ],
    "showPageTitles": false,
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "showProgressBar": "top",
    "progressBarType": "buttons",
    "checkErrorsMode": "onValueChanged",
    "completeText": "Send"
   }