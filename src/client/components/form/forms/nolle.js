var NolleJSON = {
    "title": "Nolles",
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
          "renderAs": "select2",
          "name": "court_case_number",
          "title": "Court case number",
          "choices": ['Yes', 'No'],
          "isRequired": true,
        },
        {
          "type": "dropdown",
          "renderAs": "select2",
          "name": "da_number",
          "startWithNewLine": false,
          "title": "DA number",
          "choices": ['Yes', 'No'],
          "isRequired": true
        },
       {
        "type": "text",
        "name": "defendant_name",
        "title": "Defendant name",
        "isRequired": true
       },
       {
        "type": "dropdown",
        "name": "tier",
        "startWithNewLine": false,
        "title": "Tier",
        "isRequired": true,
        "choices": [
         "1",
         "2",
         "3"
        ]
       }
      ],
      "title": "Case Information"
     },
     {
      "name": "Attorney",
      "elements": [
       {
        "type": "text",
        "name": "screening_attorney",
        "title": "Screening attorney",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "district_court_filed_date",
        "title": "District court filed date",
        "isRequired": true,
        "inputType": "date"
       },
       {
        "type": "text",
        "name": "trial_date",
        "startWithNewLine": false,
        "title": "Trial date",
        "inputType": "date"
       },
       {
        "type": "text",
        "name": "assigned_date",
        "startWithNewLine": false,
        "title": "Date assigned to you",
        "isRequired": true,
        "inputType": "date"
       }
      ],
      "title": "Attorney Information"
     },
     {
      "name": "Conference",
      "elements": [
       {
        "type": "radiogroup",
        "name": "victim_discussed",
        "title": "Have you discussed this nolle with the victim?",
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "victim_opposes",
        "visibleIf": "{victim_discussed} = 'Yes'",
        "startWithNewLine": false,
        "title": "Does the victim oppose this action?",
        "requiredIf": "{victim_discussed} = 'Yes'",
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "text",
        "name": "victim_reason",
        "visibleIf": "{victim_discussed} = 'No'",
        "title": "Why were you unable to confer with the victim about this proposed action?",
        "requiredIf": "{victim_discussed} = 'No'"
       },
       {
        "type": "radiogroup",
        "name": "agent_discussed",
        "title": "Have you discussed this nolle with the case agent?",
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "visibleIf": "{agent_discussed} = 'Yes'",
        "startWithNewLine": false,
        "title": "Does the case agent oppose this action?",
        "requiredIf": "{agent_discussed} = 'Yes'",
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "text",
        "name": "agent_reason",
        "visibleIf": "{agent_disscussed} = 'No'",
        "title": "Why were you unable to confer with the case agent about this proposed action?",
        "requiredIf": "{agent_discussed} = 'No'"
       }
      ],
      "title": "Conference Information"
     },
     {
      "name": "Nolle Information",
      "elements": [
       {
        "type": "dropdown",
        "name": "nolle_reason",
        "title": "Nolle reason",
        "choices": [
         "Insufficient evidence",
         "Discovery failure",
         "Failure to timely screen",
         "Legal deficiency",
         "Defendant unavailable",
         "Witness or other issue",
         "Referred for federal prosecution"
        ],
        "hasOther": true
       },
       {
        "type": "dropdown",
        "name": "nolle_subreason",
        "visibleIf": "{nolle_reason} = 'Insufficient evidence'",
        "startWithNewLine": false,
        "title": "Nolle subreason",
        "requiredIf": "{nolle_reason} = 'Insufficient evidence'",
        "choices": [
         "Identification issue",
         "Insufficient investigation",
         "New evidence",
         "Evidence lost/mishandled",
         "Evidence excluded/suppressed"
        ]
       },
       {
        "type": "dropdown",
        "name": "question3",
        "visibleIf": "{nolle_reason} = 'Discovery failure'",
        "startWithNewLine": false,
        "title": "Nolle subreason",
        "requiredIf": "{nolle_reason} = 'Discovery failure'",
        "choices": [
         "Not received",
         "Not produced",
         "Disputed"
        ]
       },
       {
        "type": "dropdown",
        "name": "nolle_subreason",
        "visibleIf": "{nolle_reason} = 'Legal deficiency'",
        "startWithNewLine": false,
        "title": "Nolle subreason",
        "requiredIf": "{nolle_reason} = 'Legal deficiency'",
        "choices": [
         "Bad search or seizure",
         "Conduct not criminal"
        ]
       }
      ],
      "title": "Nolle Information"
     },
     {
      "name": "Documents",
      "elements": [
       {
        "type": "comment",
        "name": "nolle_justification",
        "title": "Justification for proposed nolle",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "prosecution_memo",
        "title": "Prosecution memo",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "proposed_nolle",
        "startWithNewLine": false,
        "title": "Proposed nolle",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "declination",
        "title": "Declination"
       },
       {
        "type": "dropdown",
        "name": "supervisor",
        "startWithNewLine": false,
        "title": "Supervisor",
        "isRequired": true,
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       }
      ],
      "title": "Nolle Documents"
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

export default NolleJSON;