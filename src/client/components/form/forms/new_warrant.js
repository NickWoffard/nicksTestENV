const new_warrant = {
    "title": "New Warrant",
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
        "type": "dropdown",
        "name": "urgency",
        "title": "Urgency of review",
        "description": "Only choose \"Next Hour\" if it is a SWAT or other extremely urgent situation. 1 Business day would be the latest you'd get a response. In many cases, it is much sooner.",
        "isRequired": true,
        "renderAs": "select2",
        "choices": [
         "1 Business Day or Less",
         "Next Hour"
        ]
       },
       {
        "type": "dropdown",
        "name": "warrant_type",
        "title": "Type",
        "isRequired": true,
        "choices": [
         "Arrest",
         "Search"
        ]
       },
       {
        "type": "dropdown",
        "name": "search_warrant_category",
        "visibleIf": "{warrant_type} = 'Search'",
        "startWithNewLine": false,
        "title": "Search Warrant Location Category",
        "requiredIf": "{warrant_type} = 'Search'",
        "choices": [
         "Blood",
         "Business",
         "Cell Phone",
         "Computer",
         "Residence",
         "Person (Buccal, prints, etc)",
         "Personal Belongings",
         "Phone Records",
         "Social Media",
         "Vehicle"
        ]
       },
       {
        "type": "text",
        "name": "defendant_name",
        "visibleIf": "{warrant_type} = 'Arrest'",
        "startWithNewLine": false,
        "title": "Name of Arrestee",
        "requiredIf": "{warrant_type} = 'Arrest'"
       },
       {
        "type": "file",
        "name": "warrant_upload",
        "title": "Upload warrant here",
        "isRequired": true
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