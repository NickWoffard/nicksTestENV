var warrant_writer = {
    "title": "Warrant Writer",
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
      "name": "Warrant Type",
      "elements": [
       {
        "type": "dropdown",
        "name": "warrant_type",
        "title": "Warrant type",
        "choices": [
         "Exigent",
         {
          "value": "Search",
          "text": "General"
         }
        ]
       }
      ],
      "title": "Warrant type"
     },
     {
      "name": "Affiant",
      "elements": [
       {
        "type": "text",
        "name": "agency_case_number",
        "title": "Agency case number",
        "isRequired": true,
        "renderAs": "select2"
       },
       {
        "type": "text",
        "name": "affiant_title",
        "title": "What is your title?",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "affiant_name",
        "title": "What is your name?",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "affiant_badge_number",
        "startWithNewLine": false,
        "title": "What is your badge number?",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "affiant_email",
        "title": "What is your email?",
        "description": "This has to be your government issued email, or you won't receive the warrant.",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "affiant_phone",
        "startWithNewLine": false,
        "title": "What is your contact number?",
        "description": "This is only if the ADA needs to call and ask questions.",
        "isRequired": true
       }
      ],
      "title": "Affiant Information"
     },
     {
      "name": "Exigent",
      "elements": [
       {
        "type": "dropdown",
        "name": "target_service_provider",
        "title": "Service provider's name",
        "choices": [
         "AT&T",
         "Sprint",
         "T-Mobile",
         "Verizon"
        ]
       },
       {
        "type": "text",
        "name": "target_phone",
        "startWithNewLine": false,
        "title": "Phone number targeted"
       },
       {
        "type": "text",
        "name": "target_name",
        "title": "Person Targeted to Seize Records On",
        "description": "Give their name or any other information on the person who you were trying to locate.\n"
       },
       {
        "type": "text",
        "name": "date_of_emergency",
        "title": "Date emergency was declared"
       },
       {
        "type": "text",
        "name": "time_of_emergency",
        "startWithNewLine": false,
        "title": "Time emergency was declared"
       },
       {
        "type": "text",
        "name": "start_date_of_seized_records",
        "title": "Starting date of seized records"
       },
       {
        "type": "text",
        "name": "start_time_of_seized_records",
        "startWithNewLine": false,
        "title": "Starting time of seized records"
       },
       {
        "type": "text",
        "name": "end_date_of_seized_records",
        "title": "Ending date of seized records"
       },
       {
        "type": "text",
        "name": "end_time_of_seized_records",
        "startWithNewLine": false,
        "title": "Ending time of seized records"
       },
       {
        "type": "multipletext",
        "name": "number_of_records_seized",
        "title": "Number of records seized",
        "isRequired": true,
        "items": [
         {
          "name": "Electronic communication content"
         },
         {
          "name": "Location information"
         },
         {
          "name": "Electronic device information"
         },
         {
          "name": "Other electronic communication information"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "nature_of_danger",
        "title": "Nature of danger",
        "isRequired": true,
        "choices": [
         "Death",
         "Serious physical injury",
         "Silver alert",
         "Brittany alert",
         "Amber alert",
         "Potential suicide"
        ],
        "hasOther": true
       },
       {
        "type": "comment",
        "name": "details_of_emergency",
        "title": "Describe in detail the emergency that led to the seizure of the records",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "requires_district_attorney_approval",
        "title": "Does the District Attorney's Office need to approve this warrant?",
        "description": "This would only be applicable if you think the result of this search will be used in any criminal proceeding. If you are asking for a delay in notification, an ADA should be consulted."
       },
       {
        "type": "boolean",
        "name": "supervisor_approved",
        "title": "Has your supervisor approved?"
       },
       {
        "type": "boolean",
        "name": "request_to_delay_notification",
        "title": "Are you requesting a (up to) 90 day delay in notifying the person targeted by this request?"
       },
       {
        "type": "checkbox",
        "name": "delay_notification_reasons",
        "visibleIf": "{request_to_delay_notification} = true",
        "title": "Select the reason(s) for the notification delay request",
        "requiredIf": "{request_to_delay_notification} = true",
        "choices": [
         "Danger to the life or physical safety of a natural person",
         "Flight from prosecution",
         "Destruction of or tampering with evidence",
         "Intimidation of a potential witness",
         "Serious jeopardy to an investigation"
        ]
       },
       {
        "type": "text",
        "name": "delay_notification_basis",
        "visibleIf": "{request_to_delay_notification} = true",
        "title": "State the factual basis for a good faith belief that an adverse result will occur",
        "requiredIf": "{request_to_delay_notification} = true"
       }
      ],
      "visibleIf": "{warrant_type} = 'Exigent'",
      "title": "Exigent"
     },
     {
      "name": "Search",
      "elements": [
       {
        "type": "dropdown",
        "name": "record_type",
        "title": "Is your warrant for a physical object in/about to be in your possession or for electronic records?",
        "choices": [
         "Physical object",
         "Electronic records"
        ]
       },
       {
        "type": "text",
        "name": "target_name",
        "startWithNewLine": false,
        "title": "Name of Person whose records are being sought"
       },
       {
        "type": "comment",
        "name": "target_identified",
        "title": "Specifically describe how this phone was identified as belonging to the target?",
        "description": "It could be a victim told you this number/username communicated with them about the crime, or a suspect told you this was their phone number/username. This should be 1 or 2 sentences and could repeat in the narrative."
       },
       {
        "type": "text",
        "name": "start_date_of_records_request",
        "title": "Start date of records request"
       },
       {
        "type": "text",
        "name": "end_date_of_records_request",
        "startWithNewLine": false,
        "title": "End date of records request"
       },
       {
        "type": "dropdown",
        "name": "primary_crime",
        "title": "What is the primary crime being investigated?",
        "choices": [
         "Aggravated assault",
         "Aggravated battery",
         "Criminal sexual penetration",
         "Domestic assault",
         "Domestic battery",
         "Homicide",
         "Larceny",
         "Narcotics",
         "Possession and/or distribution of child pornography",
         "Receiving and trasferring a stolen motor vehicle",
         "Shooting at or from a motor vehicle",
         "Unlawful taking of a motor vehicle"
        ],
        "hasOther": true
       },
       {
        "type": "boolean",
        "name": "request_delay_notification_company",
        "title": "Do you have cause to delay the company of notifying the user?",
        "description": "This will add language to the company who receives the warrant won't give notification to the user for 90 days. This is not the same as your duty to notify the user per New Mexico law. That is the next question."
       },
       {
        "type": "boolean",
        "name": "request_delay_notification",
        "title": "Do you have cause to delay you having to notify the user?",
        "description": "ECPA Law. This will print an additional form for the judge to sign and review. At 90 days you will have to then notify the user and give them the records you seized and a reason why you delayed notification if you seek this."
       },
       {
        "type": "comment",
        "name": "delay_notification_reason",
        "startWithNewLine": false,
        "title": "Enter your cause to delay notifying the user"
       },
       {
        "type": "comment",
        "name": "probable_cause",
        "title": "Describe your probable cause here"
       }
      ],
      "visibleIf": "{warrant_type} = 'Search'",
      "title": "General"
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