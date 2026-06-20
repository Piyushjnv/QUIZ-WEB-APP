Extract all MCQ questions from the provided video or playlist link and return them as a valid JSON array matching the specific schema below.

CRITICAL INSTRUCTION FOR JSON KEYS: 
Do NOT enclose the keys/property names in double quotes or single quotes (e.g., use Username: "value", NOT "Username": "value"). The values must remain wrapped in regular double quotes as per standard data formatting.

BILINGUAL FORMATTING:
Provide a bilingual translation for the "Question" and all option fields ("Option1" through "Option4"). First write the text in English, followed by a forward slash " / ", and then the Hindi translation.

Schema to follow strictly:
[
  {
    Username : "69ea5ce6b7e89e3b595a60dc",
    Question : "Question text in English / हिंदी में प्रश्न",
    Option1 : "First choice in English / हिंदी में पहला विकल्प",
    Option2 : "Second choice in English / हिंदी में दूसरा विकल्प",
    Option3 : "Third choice in English / हिंदी में तीसरा विकल्प",
    Option4 : "Fourth choice in English / हिंदी में चौथा विकल्प",
    correctoption : "1/2/3/4",
    category : "science/history/Polity/computer/economics/general/current/Geography/static"
  }
]

Return ONLY the raw JSON array containing the data. Do not include any introductory text, wrappers, markdown code blocks, explanations, or conversational filler.

Link = [Insert your YouTube Link Here]



Extract all MCQ questions from this video or Playlist and return as JSON array with this schema:
{
Username : "69ea5ce6b7e89e3b595a60dc",
Question : "question text",
Option1 : "first choice",
Option2 : "second choice",
Option3 : "third choice",
Option4 : "fourth choice",
correctoption : "1/2/3/4",
category : "science/history/Polity/computer/economics/general/current/Geography/static"
}
Return only raw JSON array, no explanation.
Link = https://www.youtube.com/live/TNgqmqu3Wsg?si=-gYBoQAF2EzVEi7a



Role: You are a data extraction specialist.
​Task: Extract only the maths questions from the provided text. Ignore all other subjects like english or gkgs or  Reasoning.
​Output Format: You must return the data as a valid JSON Array of Objects. Do not include any introductory text, explanations, or Markdown code blocks. Just the raw array.

BILINGUAL FORMATTING: Provide a bilingual translation for the "Question" and all option fields ("Option1" through "Option4"). First write the text in English, followed by a forward slash " / ", and then the Hindi translation.

Schema to follow strictly: [ { Username : "69ea5ce6b7e89e3b595a60dc", Question : "Question text in English / हिंदी में प्रश्न", Option1 : "First choice in English /", Option2 : "Second choice  ", Option3 : "Third choice in English  ", Option4 : "Fourth choice in English ", correctoption : "1/2/3/4", 
category : "Algebra"/
  "Arithmetic"/
  "Geometry"/
  "Trigonometry"/
  "Statistics"/
  "Probability"/
  "Number System"/
  "Mensuration"/
  "Simple Interest"/
  "Compound Interest"/
  "Profit & Loss"/
  "Time & Work"/
  "Time Speed Distance"/
  "Ratio & Proportion"/
  "Percentage"/
  "Average"/
  "Interest"/
  "Partnership", } ]

Rules for Fields:

1. Username: Always hardcode as "69ea5ce6b7e89e3b595a60dc".

2. Bilingual: 'Question'  must use the "English / हिंदी" forward-slash format.

3. correctoption: Must be a string containing only the single digit ("1", "2", "3", or "4") representing the correct option.

4. category: Must strictly be chosen from these exact lowercase tags:  "Algebra",
  "Arithmetic",
  "Geometry",
  "Trigonometry",
  "Statistics",
  "Probability",
  "Number System",
  "Mensuration",
  "Simple Interest",
  "Compound Interest",
  "Profit & Loss",
  "Time & Work",
  "Time Speed Distance",
  "Ratio & Proportion",
  "Percentage",
  "Average",
  "Interest",
  "Partnership", . 

If you understand, acknowledge by saying: "Quiz Generator Mode Active. Please provide your content ." 


​