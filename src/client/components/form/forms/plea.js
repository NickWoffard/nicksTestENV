var PleaJSON = {
    "title": "Pleas",
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
          "isRequired": true,
        },
        {
          "type": "dropdown",
          "renderAs": "select2",
          "name": "da_number",
          "startWithNewLine": false,
          "title": "DA number",
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
      "name": "Categories",
      "elements": [
       {
        "type": "radiogroup",
        "name": "prior_plea",
        "title": "Was there a prior plea in this case?",
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "more_strict",
        "visibleIf": "{prior_plea} = 'Yes'",
        "requiredIf": "{prior_plea} = 'Yes'",
        "startWithNewLine": false,
        "title": "Are the terms of this plea offer more strict than the previous plea offer?",
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "all_cases_resolved",
        "startWithNewLine": false,
        "title": "Does your plea resolve all of the defendant's open cases?",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "matrixdynamic",
        "name": "cases_not_resolved",
        "visibleIf": "{all_cases_resolved} = 'No'",
        "title": "What cases does it not resolve?",
        "columns": [
         {
          "name": "case_number_not_resolved",
          "title": "Case number",
          "cellType": "text",
          "isUnique": true
         }
        ],
        "addRowText": "Add case",
        "rowCount": 1
       },
       {
        "type": "radiogroup",
        "name": "homicide",
        "title": "Is this case a homicide?",
        "isRequired": true,
        "choicesFromQuestion": "prior_plea",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "radiogroup",
        "name": "pdm_filed",
        "startWithNewLine": false,
        "title": "PDM filed?",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "pdm_granted",
        "visibleIf": "{pdm_filed} = 'Yes'",
        "startWithNewLine": false,
        "title": "PDM granted?",
        "isRequired": true,
        "requiredIf": "{pdm_filed} = 'Yes'",
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "victim_lea",
        "title": "Is the victim a law enforcement officer?",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       }
      ],
      "title": "Plea Categorization"
     },
     {
      "name": "Conference",
      "elements": [
       {
        "type": "radiogroup",
        "name": "victim_discussed",
        "title": "Have you discussed this plea with the victim?",
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
        "title": "Have you discussed this plea with the case agent?",
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
      "name": "Plea Information",
      "elements": [
       {
        "type": "dropdown",
        "name": "plea_reason",
        "title": "Plea reason",
        "choices": [
         "Case issues",
         "Logistical/Procedural issues",
         "Efficient case resolution"
        ],
        "hasOther": true
       },
       {
        "type": "dropdown",
        "name": "plea_subreason",
        "visibleIf": "{plea_reason} = 'Case issues'",
        "startWithNewLine": false,
        "title": "Plea subreason",
        "requiredIf": "{plea_reason} = 'Case issues'",
        "choices": [
         {
          "value": "Strength of evidence of ",
          "text": "Strength of evidence"
         },
         "Possible legal deficiency",
         "Investigative deficiency",
         "Discovery failure"
        ]
       },
       {
        "type": "dropdown",
        "name": "question3",
        "visibleIf": "{plea_reason} = 'Logistical/Procedural issues'",
        "startWithNewLine": false,
        "title": "Plea subreason",
        "requiredIf": "{plea_reason} = 'Logistical/Procedural issues'",
        "choices": [
         {
          "value": "Strength of evidence of ",
          "text": "Strength of evidence"
         },
         "Possible legal deficiency",
         "Investigative deficiency",
         "Discovery failure"
        ]
       },
       {
        "type": "dropdown",
        "name": "question4",
        "visibleIf": "{plea_reason} = 'Efficient case resolution'",
        "startWithNewLine": false,
        "title": "Plea subreason",
        "requiredIf": "{plea_reason} = 'Efficient case resolution'",
        "choices": [
         {
          "value": "PPD or diverson",
          "text": "PPD or diversion"
         },
         "Resolve multiple cases",
         "Resolve without trial",
         "Victim preference to avoid trial"
        ]
       },
       {
        "type": "text",
        "name": "total_jurisdiction_available_years",
        "title": "Total jurisdiction available (years)"
       },
       {
        "type": "text",
        "name": "total_jurisdiction_available_months",
        "startWithNewLine": false,
        "title": "Total jurisdiction available (months)"
       },
       {
        "type": "text",
        "name": "maximum_initial_incarceration_years",
        "title": "Maximum initial incarceration exposure under the proposed plea (years)"
       },
       {
        "type": "text",
        "name": "maximum_initial_incarceration_months",
        "startWithNewLine": false,
        "title": "Maximum initial incarceration exposure under the proposed plea (months)"
       },
       {
        "type": "radiogroup",
        "name": "firearm_enhancement",
        "title": "Was a firearm enhancement charged?",
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "dropdown",
        "name": "firearm_enhancement_time",
        "visibleIf": "{firearm_enhancement} = 'Yes'",
        "title": "Firearm enhancement time",
        "requiredIf": "{firearm_enhancement} = 'Yes'",
        "choices": [
         "1 year",
         "2 years",
         "3 years"
        ]
       },
       {
        "type": "dropdown",
        "name": "firearm_enhancement_time_waived",
        "visibleIf": "{firearm_enhancement} = 'Yes'",
        "title": "If you are proposing to waive or suspend firearm enhancement time, enter the amount waived or suspended here",
        "requiredIf": "{firearm_enhancement} = 'Yes'",
        "choices": [
         "0 years",
         "1 year",
         "2 years",
         "3 years",
         "4 years",
         "5 years"
        ]
       },
       {
        "type": "radiogroup",
        "name": "habitual_offender_enhancement",
        "title": "Could the defendant be subject to habitual offender enhancement?",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "priors_in_abeyance",
        "visibleIf": "{habitual_offender_enhancement} = 'Yes'",
        "startWithNewLine": false,
        "title": "Are you proposing to hold any priors in abeyance?",
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "text",
        "name": "abeyance_reason",
        "visibleIf": "{priors_in_abeyance} = 'Yes'",
        "title": "Explain",
        "requiredIf": "{priors_in_abeyance} = 'Yes'"
       }
      ],
      "title": "Plea Information"
     },
     {
      "name": "Documents",
      "elements": [
       {
        "type": "comment",
        "name": "plea_justification",
        "title": "Justification for proposed plea",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "prosecution_memo",
        "title": "Prosecution memo",
        "isRequired": true
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
      "title": "Plea Documents"
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

   export default PleaJSON;