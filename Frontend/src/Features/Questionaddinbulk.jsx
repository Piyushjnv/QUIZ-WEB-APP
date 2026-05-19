import React, { use } from 'react'
import { useEffect, useState } from 'react';
import Api from '../API/Api';

function Questionaddinbulk() {

const questions = [
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Who was the founder of the Pala Dynasty in Bengal?",
"Option1": "Gopala",
"Option2": "Dharmapala",
"Option3": "Devapala",
"Option4": "Mahipala",
"correctoption": "1",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Which of the following rulers were Brahmins who gave up their traditional professions and established a kingdom in Rajasthan?",
"Option1": "Dantidurga",
"Option2": "Harichandra",
"Option3": "Nagabhata I",
"Option4": "Dharmapala",
"correctoption": "2",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Which Pratihara ruler is regarded as the real founder of their empire?",
"Option1": "Nagabhata I",
"Option2": "Devapala",
"Option3": "Mihir Bhoj",
"Option4": "Gopala III",
"correctoption": "3",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "What actions did Vijayalaya Chola take after capturing the Kaveri delta?",
"Option1": "He established the town of Thanjavur",
"Option2": "He built a temple for goddess Nishumbhasudini",
"Option3": "Both 1 and 2",
"Option4": "None of the above",
"correctoption": "3",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "What was a major challenge for agriculture in the Chola kingdom apart from the rocky land?",
"Option1": "Lack of seeds",
"Option2": "Lack of labor",
"Option3": "Lack of irrigation water",
"Option4": "Poor pest management",
"correctoption": "3",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Who among the following is considered the most powerful Chola ruler?",
"Option1": "Dantidurga",
"Option2": "Harshavardhana",
"Option3": "Veerarajendra Chola",
"Option4": "Rajaraja I",
"correctoption": "4",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Who among the following Chola emperors constructed the grand temple at Gangaikonda Cholapuram?",
"Option1": "Rajaraja I",
"Option2": "Rajendra Chola I",
"Option3": "Rajadhiraja Chola",
"Option4": "Kulothunga Chola I",
"correctoption": "2",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Consider the following statements regarding the post-Chalukya period: 1) The Kakatiyas ruling from Manyakheta were the primary successors to the Later Chalukyas in the Western Deccan. 2) The Hoysalas based in Devagiri were the sole dynasty responsible for the complete overthrow of the Later Chalukyas across all regions. Which statement(s) is/are correct?",
"Option1": "Only 1",
"Option2": "Only 2",
"Option3": "Both 1 and 2",
"Option4": "Neither 1 nor 2",
"correctoption": "4",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "What does the term 'Ur' refer to in the context of early South Indian villages?",
"Option1": "A type of tax",
"Option2": "A temple priest",
"Option3": "A village assembly of common people",
"Option4": "A military commander",
"correctoption": "3",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "What was the term used for land revenue in the Chola Kingdom?",
"Option1": "Vetti",
"Option2": "Kadamai",
"Option3": "Vishti",
"Option4": "Toll Tax",
"correctoption": "2",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "The Chola dynasty is known for its naval expeditions to which region?",
"Option1": "Arabian Peninsula",
"Option2": "South East Asia",
"Option3": "Central Asia",
"Option4": "East Africa",
"correctoption": "2",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "The Chola inscriptions at Uttramerur are primarily concerned with:",
"Option1": "Maritime trade",
"Option2": "Military conquest",
"Option3": "Temple rituals",
"Option4": "Village administration",
"correctoption": "4",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "The Virupaksha Temple at Hampi is dedicated to which deity?",
"Option1": "Lord Shiva",
"Option2": "Lord Vishnu",
"Option3": "Lord Brahma",
"Option4": "Goddess Durga",
"correctoption": "1",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "The term 'Vesara' refers to an architectural style that developed in which Indian region, combining elements of North and South Indian temple designs?",
"Option1": "North India",
"Option2": "Deccan",
"Option3": "East India",
"Option4": "West India",
"correctoption": "2",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Consider the following statements about temple architecture: 1) Dravida temples are enclosed within a compound wall, a feature typically absent in Nagara temples. 2) The shape of the central temple tower in Dravida style (Vimana) is similar to the curving Shikhara of the Nagara style. Which statement(s) is/are correct?",
"Option1": "Statement 1 is correct, but 2 is incorrect",
"Option2": "Statement 2 is correct, but 1 is incorrect",
"Option3": "Both statements are correct",
"Option4": "Both statements are incorrect",
"correctoption": "1",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "The temples of Khajuraho in Madhya Pradesh, noted for ornate shikharas and erotic sculptures, are associated with which architectural style?",
"Option1": "Dravida Style",
"Option2": "Vesara Style",
"Option3": "Nagara Style",
"Option4": "Kalinga Style",
"correctoption": "3",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Consider the following statements: 1) After Harsha's death, the Rajputs rose to prominence in Northern Indian politics. 2) The Rajputs maintained a strong unity which helped them resist foreign invasions effectively. Which statement(s) is/are correct?",
"Option1": "Only 1",
"Option2": "Only 2",
"Option3": "Both 1 and 2",
"Option4": "Neither 1 nor 2",
"correctoption": "1",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Consider the following statements regarding Ajanta caves: Assertion (A): Ajanta is the only surviving site that contains paintings from both the 1st century BC and the 5th century AD. Reason (R): Ajanta has Chaitya caves from the early phase and only Vihara caves from the later phase.",
"Option1": "Both A and R are true and R is the correct explanation of A",
"Option2": "Both A and R are true but R is not the correct explanation of A",
"Option3": "A is true but R is false",
"Option4": "A is false but R is true",
"correctoption": "3",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Which among the following works was authored by Varahamihira?",
"Option1": "Mricchakatika",
"Option2": "Sushruta Samhita",
"Option3": "Brihat Samhita",
"Option4": "Dashakumaracharita",
"correctoption": "3",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Which among the following statements is NOT true about Kanishka?",
"Option1": "He patronized Vasumitra, Ashvaghosa, and Nagarjuna",
"Option2": "He introduced the purest form of gold coins",
"Option3": "He patronized the Fourth Buddhist Council",
"Option4": "Vasudeva was his son",
"correctoption": "4",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Who was the last ruler of the Shunga Dynasty?",
"Option1": "Vasudeva",
"Option2": "Pushyamitra Shunga",
"Option3": "Devabhuti",
"Option4": "Agnimitra",
"correctoption": "3",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Identify the correct pairs from the given options: 1) Kalibangan - Fire altars & Ploughed field, 2) Megasthenes - Arthashastra, 3) Chalcolithic culture - Use of both copper and stone.",
"Option1": "1 and 2 only",
"Option2": "2 and 3 only",
"Option3": "1 and 3 only",
"Option4": "1, 2 and 3",
"correctoption": "3",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Mahavira Jain was born in a royal family near which ancient city?",
"Option1": "Taxila",
"Option2": "Vaishali",
"Option3": "Ujjain",
"Option4": "Pataliputra",
"correctoption": "2",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Which Indian ruler is famously known as the 'Napoleon of India'?",
"Option1": "Ashoka",
"Option2": "Samudragupta",
"Option3": "Harshavardhana",
"Option4": "Chandragupta Maurya",
"correctoption": "2",
"category": "history"
},
{
"Username": "69ea5ce6b7e89e3b595a60dc",
"Question": "Consider the following statements: 1) The oldest surviving structural temples from the Gupta period were primarily built using sandstone. 2) The earliest known examples of the Rath style of temples are found in Madhya Pradesh. Which statement(s) is/are correct?",
"Option1": "Only 1",
"Option2": "Only 2",
"Option3": "Both 1 and 2",
"Option4": "Neither 1 nor 2",
"correctoption": "1",
"category": "history"
}
]
const Onsubmit1 = async (question) => {
   try {
// uestu
Api.post("user/qadd", question).then(
       (response)=>{
                console.log("question at submit function ",question);
          const data = response.data
          if( data.success == true) {
            // alert("question1 added successfully")/
            console.log("question added successfully");
            
          }
          console.log(data, "data after question1 add");
          
        }
      )
    } catch (error) {
        console.log("coed not run ",error);
        
     }
  };

  const add = () => {
    console.log("run button ");
    
    questions.map((question1) => {
    //    console.log(question1.Username,
    //        question1.Question,
    //      question1.Option1,
    //       question1.Option2,
    //       question1.Option3,
    //      " Option4: ",question1.Option4,
    //     "  correctoption:", question1.correctoption,
    //     "  category:", question1.category);
       const data = {
          Username: question1.Username,
          Question: question1.Question,
          Option1: question1.Option1,
          Option2: question1.Option2,
          Option3: question1.Option3,
          Option4: question1.Option4,
          correctoption: question1.correctoption,
          category: question1.category
        }
    
        //  console.log("run button ", data);
        Onsubmit1(data)
    });
  };

  return (
    <div>Questionaddinbulk
        <button
        className=' bg-amber-300 w-20 h-20 cursor-pointer '
        onClick={add}>RUN </button>
    </div>
  )
}

export default Questionaddinbulk

// [ 

// ्
// या ा:
// · मिहला मुक्के बाजी ने 2012 लंदन खेलों म अपनी आिधका रक ओलंिपक शुरुआत की।
// · यह ओलंिपक कायक्रम म एकमात्र ऐसा खेल था िजसका उस वष तक कोई मिहला समकक्ष नहीं था।
// · शुरू म, इसम तीन भार श्रेिणयां थीं: ाईवेट (51 िकग्रा), लाइटवेट (60 िकग्रा), और िमिडलवेट (75 िकग्रा)।
// Information Booster:
// · प्रथम स्वण पदक िवजेता: ग्रेट िब्रटेन की िनकोला एडम्स ाईवेट स्वण जीतकर पहली बार मिहला ओलंिपक मुक्के बाजी चिपयन बनीं।
// · भारतीय सफलता: िदग्गज भारतीय मुक्के बाज मैरी कॉम ने 2012 लंदन ओलंिपक म ाईवेट वग म कांस्य पदक जीता।
// · िवस्तार: लिगक समानता को बढ़ावा देने के िलए 2020 टो ो ओलंिपक के िलए मिहलाओं के िलए भार श्रेिणयों की संख्या बढ़ाकर पांच कर दी गई और पे रस 2024 के िलए
// इसका और िवस्तार िकया गया।
// Additional Knowledge:
// · 2000 (िसडनी): इस वष ओलंिपक कायक्रम म मिहलाओं के भारोत्तोलन और वाटर पोलो की शुरुआत देखी गई।
// · 2004 (एथस): इन खेलों के दौरान पहली बार मिहलाओं की ीस्टाइल कु ी शुरू की गई थी।
// · 2008 (बीिजंग): महत्वपूण प रवधन म BMX साइिकिलंग और 10 िकमी मैराथन तैराकी स्पधा शािमल थी, लेिकन मिहला मुक्के बाजी नहीं।
// Copyright © 2026 Adda247
// Q.84  िसख सा ाज्य िकस शासक के अधीन अपने सबसे बड़े िवस्तार तक पहुँचा?
// A. बंदा बहादुर
// B. रणजीत िसंह
// C. दलीप िसंह
// D. ह र िसंह नलवा
// Answer: B
// Sol: सही उत्तर (b) रणजीत िसंह है।
// व
// ्
// या ा:
// · महाराजा रणजीत िसंह, िज "पंजाब का शेर" कहा जाता है, ने िसख सा ाज्य की स्थापना की और 1799 से 1839 तक इस पर शासन िकया।
// · उनके नेतृत्व म, सा ाज्य पि म म खैबर दर से लेकर पूव म पि मी ितब्बत तक, और उत्तर म क ीर से लेकर दिक्षण म िमठानकोट तक फैला हुआ था।
// · उ ोंने यूरोपीय अिधका रयों की मदद से िसख सेना (खालसा सेना) का आधुिनकीकरण िकया, िजससे यह उस समय एिशया की सबसे श क्तशाली सैन्य बलों म से एक बन गई।
// Information Booster:
// · रणजीत िसंह ने 1799 म लाहौर पर क ा कर िलया और इसे अपनी राजधानी बनाया, जबिक अमृतसर आध्या त्मक राजधानी बना रहा।
// · वह अपने धमिनरपेक्ष प्रशासन और अफगािनस्तान के शाह शुजा से िवश्व प्रिसद्ध कोिहनूर हीरा प्राप्त करने के िलए प्रिसद्ध थे।
// अित रक्त ान:
// · (a) बंदा बहादुर: एक िसख योद्धा िज ोंने गुरु गोिबंद िसंह के बाद मुगलों के खलाफ िवद्रोह का नेतृत्व िकया; उ ोंने पहले िसख राज्य की स्थापना की लेिकन एक िवस्तृत
// सा ाज्य नहीं बनाया।
// · (c) दलीप िसंह: िसख सा ाज्य के अंितम महाराजा; वे नाबािलग थे जब अंग्रेजों ने 1849 म पंजाब का िवलय कर िलया।
// · (d) ह र िसंह नलवा: िसख खालसा सेना के कमांडर-इन-चीफ और रणजीत िसंह के अधीन एक महान सेनापित, जो उत्तर-पि म म अपनी जीत के िलए प्रिसद्ध थे।
// Q.85  दादासाहेब फा े पुरस्कार के पहले प्राप्तकता कौन थे?
// A. सत्यजीत रे
// B. देिवका रानी
// C. पृ ीराज कपूर
// D. बी.एन. सरकार
// Answer: B
// Sol: सही उत्तर (b) देिवका रानी है।
// व
// ्
// या ा:
// · देिवका रानी, िज अक्सर "भारतीय िसनेमा की प्रथम मिहला" कहा जाता है, 1969 म दादासाहेब फा े पुरस्कार की पहली प्राप्तकता थीं।
// · वह एक महान अिभनेत्री और प्रिसद्ध स्टू िडयो बॉ े टॉकीज की सह-संस्थापक थीं।
// · यह पुरस्कार भारत सरकार ारा भारतीय िसनेमा के िपतामह दादासाहेब फा े के योगदान को याद करने के िलए शुरू िकया गया था।
// Information Booster:
// · दादासाहेब फा े 
// पुरस्कार िसनेमा के क्षेत्र म भारत का सवच्च पुरस्कार है, जो प्रितवष राष्टीय िफल्म पुरस्कार समारोह म प्रदान िकया जाता है।
// · हाल के प्राप्तकताओं म वहीदा रहमान (2021) और िमथुन चक्रवत (2022, 2024 म स ािनत) शािमल ह।
// Additional Knowledge:
// · (a) सत्यजीत रे: िवश्व प्रिसद्ध िफल्म िनमाता ने 1984 म यह पुरस्कार प्राप्त िकया।
// · (c) पृ ीराज कपूर: उ 1971 म मरणोपरांत स ािनत िकया गया था।
// · (d) बी.एन. सरकार: कलकत्ता म न्यू िथएटस के संस्थापक, उ 1970 म यह पुरस्कार िमला।
// Q.86  ‘िमत्र शक्त’ भारत और िकस देश के बीच एक संयुक्त सैन्य अ ास है?
// A. श्रीलंका
// B. नेपाल
// C. जापान
// D. ांस
// Answer: A
// Copyright © 2026 Adda247
// Sol: सही उत्तर (a) श्रीलंका है।
// व
// ्
// या ा:
// · िमत्र श क्त भारतीय सेना और श्रीलंकाई सेना के बीच आयोिजत एक वािषक संयुक्त सैन्य अ ास है।
// · इसका प्राथिमक उद्देश्य उग्रवाद-िवरोधी और आतंकवाद-िवरोधी अिभयानों म अंतर-संचालनीयता और सहयोग को बढ़ाना है।
// · यह मानवीय सहायता और आपदा राहत (HADR) अिभयानों पर भी ध्यान किद्रत करता है।
// Information Booster:
// · 'िमत्र श क्त' (थल सेना) के अलावा, भारत और श्रीलंका SLINEX नामक एक संयुक्त नौसैिनक अ ास भी करते ह।
// · भारत की 'नेबरहुड फस्ट' नीित के तहत िहंद महासागर म क्षेत्रीय सुरक्षा के िलए ये अ ास महत्वपूण ह।
// Additional Knowledge:
// · (b) नेपाल: भारत के साथ संयुक्त सैन्य अ ास सूय िकरण आयोिजत करता है।
// · (c) जापान: भारत के साथ धम गािजयन (थल सेना), JIMEX (नौसेना), और वीर गािजयन (वायु सेना) जैसे अ ासों म भाग लेता है।
// · (d) ांस: भारत के साथ श क्त (थल सेना), वरुण (नौसेना), और गरुड़ (वायु सेना) अ ास आयोिजत करता है।
// Q.87  िनम्निलखत म से िकसे ‘भारत का वयोवृद्ध पुरुष’ कहा जाता था?
// A. दादाभाई नौरोजी
// B. गोपाल कृष्ण गोखले
// C. लाला लाजपत राय
// D. सुरद्रनाथ बनज
// Answer: A
// Sol: सही उत्तर (a) दादाभाई नौरोजी है।
// व
// ्
// या ा:
// · भारतीय राष्टीय आंदोलन म उनके आजीवन योगदान के िलए दादाभाई नौरोजी को 'भारत का वयोवृद्ध पुरुष' के रूप म जाना जाता है।
// · वे ि िटश हाउस ऑफ कॉमन्स (1892) के िलए चुने जाने वाले पहले भारतीय थे।
// · वे भारतीय राष्टीय कांग्रेस के संस्थापक सदस्य थे और तीन बार (1886, 1893, 1906) इसके अध्यक्ष रहे।
// Information Booster:
// · उ ोंने प्रिसद्ध पुस्तक पॉवट एंड अन-ि िटश रूल इन इंिडया िलखी, िजसम उ ोंने 'धन िनष्कासन िसद्धांत' का प्रस्ताव िदया।
// · डेन ोरी ने तक िदया िक िब्रटेन व्यव स्थत रूप से भारत की संपित्त को खत्म कर रहा था, िजससे व्यापक गरीबी और अकाल पड़ रहे थे।
// अित रक्त ान:
// · (b) गोपाल कृष्ण गोखले: महात्मा गांधी के राजनीितक गुरु और 'सवट्स ऑफ इंिडया सोसाइटी' के संस्थापक के रूप म जाने जाते ह।
// · (c) लाला लाजपत राय: 'पंजाब केसरी' और चरमपंथी गुट (लाल-बाल-पाल) के प्रमुख नेता के रूप म जाने जाते ह।
// · (d) सुरद्रनाथ बनज: िज अक्सर 'इंिडयन बक' कहा जाता है, उ ोंने इंिडयन नेशनल एसोिसएशन की स्थापना की और एक प्रमुख नरमपंथी नेता थे।
// Q.88  भारत म सबसे पुरानी रॉक-कट गुफाएँ िकस काल की ह?
// A. मौय
// B. गुप्त
// C. कु षाण
// D. पल्लव
// Answer: A
// Sol: सही उत्तर (a) मौय है।
// व
// ्
// या ा:
// · भारत म रॉक-कट वास्तुकला के सबसे पुराने उदाहरण मौय काल (तीसरी शताब्दी ईसा पूव) के ह।
// · िबहार म बराबर गुफाएँ और नागाजुनी गुफाएँ , जो स ाट अशोक और उनके पोते दशरथ के शासनकाल के दौरान बनाई गई थीं, सबसे पुरानी जीिवत रॉक-कट गुफाएँ ह।
// · ये गुफाएँ मुख्य रूप से आजीवक संप्रदाय को समिपत थीं।
// Information Booster:
// · मौय गुफाओं की िवशेषता भीतरी दीवारों पर एक अनूठी "मौय पॉिलश" है, जो उ कांच जैसी दपण चमक देती है।
// · रॉक-कट वास्तुकला की यह परंपरा बाद म पि मी भारत म शानदार अजंता और एलोरा गुफाओं म िवकिसत हुई।
// Additional Knowledge:
// · (b) गुप्त: उदयिगरी गुफाओं (मध्य प्रदेश) और अजंता गुफा िचत्रों के िशखर के िलए जाना जाता है।
// · (c) कुषाण: व्यापक रॉक-कट गुफा प रसरों के बजाय गांधार और मथुरा कला शैिलयों (मूितयों) पर अिधक किद्रत था।
// · (d) पल्लव: महाबलीपुरम (7वीं-8वीं शताब्दी ईस्वी) म रॉक-कट "रथ" और शोर मंिदरों के िलए प्रिसद्ध।
// Q.89  अ ू बर 2024 म, जापान म भारत के राजदूत के रूप म िकसे िनयुक्त िकया गया था?
// A. संजय वमा
// B. िसबी जॉज
// C. राहुल श्रीवास्तव
// D. िवक्रम दोरईस्वामी
// Copyright © 2026 Adda247
// Answer: A
// Sol: सही उत्तर (a) संजय वमा है।
// व
// ्
// या ा:
// · 1990 बैच के भारतीय िवदेश सेवा (IFS) अिधकारी संजय वमा को अ ू बर 2024 म जापान म भारत का राजदूत िनयुक्त िकया गया था।
// · इससे पहले, उ ोंने कनाडा म भारत के उच्चायुक्त के रूप म काय िकया।
// · जापान भारत के िलए एक प्रमुख रणनीितक साझेदार है, खासकर QUAD ढांचे के भीतर और बुलेट टेन जैसी प्रमुख बुिनयादी ढांचा प रयोजनाओं के िलए।
// Information Booster:
// · राजनियक शब्दों म, एक राजदूत को एक गणतंत्र (जैसे जापान) म भेजा जाता है, जबिक एक उ ायुक्त को साथी राष्टमंडल राष्ट (जैसे कनाडा) म भेजा जाता है।
// · भारत-जापान संबंधों को 2014 म "िवशेष रणनीितक और वैिश्वक साझेदारी" तक बढ़ाया गया था।
// Additional Knowledge:
// · (b) िसबी जॉज: उ ोंने वतमान संक्रमण से पहले जापान म राजदूत के रूप म काय िकया।
// · (c) राहुल श्रीवास्तव: एक IFS अिधकारी िज ोंने रोमािनया और अ ािनया म राजदूत के रूप म काय िकया है।
// · (d) िवक्रम दोरईस्वामी: वतमान म यूनाइटेड िकं गडम म भारत के उच्चायुक्त के रूप म कायरत ह।
// Q.90  िनम्निलखत म से कौन सा खेल बफ पर खेला जाता है?
// A. पोलो
// B. किलग
// C. ै
// श
// D. कब ी
// Answer: B
// Sol: सही उत्तर (b) किलग है।
// व
// ्
// या ा:
// · किलग एक शीतकालीन खेल है जो बफ की रंक पर खेला जाता है, जहाँ खलाड़ी भारी ग्रेनाइट पत्थरों को "हाउस" नामक गोलाकार लक्ष्य की ओर सरकाते ह।
// · पत्थरों को रखने और उनके रास्ते को िनयंित्रत करने के िलए बफ को साफ करने म शािमल जिटल रणनीित के कारण इसे अक्सर "बफ पर शतरंज" (Chess on Ice) का उपनाम
// िदया जाता है।
// · यह शीतकालीन ओलंिपक खेलों म एक प्रमुख आयोजन है।
// Information Booster:
// · अन्य लोकिप्रय बफ-आधा रत खेलों म आइस हॉकी, िफगर े िटंग और स्पीड े िटंग शािमल ह।
// · भारत ने 1964 म शीतकालीन ओलंिपक म पदापण िकया; भाग लेने वाले पहले भारतीय जेरेमी बुजाकोव्स्की थे।
// अित रक्त ान:
// · (a) पोलो: पारंप रक रूप से घास के मैदान पर घोड़े पर बैठकर खेला जाता है; हालाँिक, " ो पोलो" एक प्रकार है जो जमी हुई बफ (पूरी तरह से बफ नहीं) पर खेला जाता है।
// · (c) ै
// श: चार दीवारों वाले इनडोर कोट (आमतौर पर लकड़ी के फश) म खेला जाने वाला रैके ट और गद का खेल।
// · (d) कब ी: एक संपक टीम खेल जो पारंप रक रूप से आयताकार िम ी के कोट या इनडोर मैट पर खेला जाता है।
// Q.91  िवदेशी िनवेश को आकिषत करने के िलए 1991 म कौन सा सुधार पेश िकया गया था?
// A. राष्टीयकरण
// B. िविनवेश
// C. औद्योिगक लाइसस समा प्त
// D. आयात प्रितस्थापन
// Answer: C
// Sol: सही उत्तर (c) औद्योिगक लाइसस समा प्त है।
// व
// ्
// या ा:
// · 1991 की नई आिथक नीित (NEP) के िह े के रूप म, सरकार ने सुरक्षा, रणनीितक, या पयावरणीय िचंताओं से संबंिधत एक छोटी सूची को छोड़कर, अिधकांश उद्योगों के
// िलए औद्योिगक लाइसिसंग को समाप्त कर िदया।
// · यह कदम "लाइसस-परिमट राज" को कम करने के िलए िडजाइन िकया गया था, िजससे िनजी और िवदेशी िनवेशकों को बोिझल नौकरशाही अनुमोदन के िबना उद्योग स्थािपत
// करने की अनुमित िमली।
// · डी-लाइसिसंग के साथ, सरकार ने प्रत्यक्ष िवदेशी िनवेश (FDI) की अनुमित दी और प्रितस्पधा को प्रोत्सािहत करने के िलए MRTP (एकािधकार और प्रितबंधात्मक व्यापार
// व
// ्
// यवहार) अिधिनयम को समाप्त कर िदया।
// Information Booster:
// · 1991 के सुधारों को LPG (उदारीकरण, िनजीकरण और वैश्वीकरण) मॉडल के रूप म जाना जाता है।
// · भुगतान संतुलन (BoP) के गंभीर संकट को दूर करने के िलए िवत्त मंत्री के रूप म डॉ. मनमोहन िसंह के साथ पी.वी. नरिस ा राव सरकार ारा ये सुधार पेश िकए गए थे।
// अित रक्त ान:
// · (a) रा ीयकरण: िनजी उद्योगों का सरकार ारा अिधग्रहण करने की प्रिक्रया (जैसे, 1969 म बक); यह 1991 के लक्ष्य के िवपरीत था।
// · (b) िविनवेश: सावजिनक क्षेत्र के उपक्रमों (PSUs) म सरकारी शेयरों की िबक्री। जबिक यह 1991 की नीित का िह ा था, डी-लाइसिसंग प्राथिमक सुधार था िजसने नए िवदेशी
// िनवेश के िलए दरवाजे खोले।
// · (d) आयात प्रितस्थापन: 1991 से पहले अपनाई गई एक अंतमुखी नीित जो स्थानीय उद्योगों की रक्षा के िलए िवदेशी व्यापार को हतोत्सािहत करती थी।
// Copyright © 2026 Adda247
// Q.92  कद्रीय बजट 2025-26 के तहत, िकस क्षेत्र को सबसे अिधक पूंजीगत परव्यय प्राप्त हुआ?
// A. रक्षा
// B. रेलवे
// C. स्वास्थ्य
// D. िशक्षा
// Answer: A
// Sol: सही उत्तर (a) रक्षा है।
// व
// ्
// या ा:
// · कद्रीय बजट 2025-26 म, राष्टीय सुरक्षा को मजबूत करने के िलए सभी मंत्रालयों के बीच रक्षा मंत्रालय को सबसे अिधक आवंटन प्राप्त हुआ।
// · इस बजट का एक महत्वपूण िह ा सशस्त्र बलों के आधुिनकीकरण और हिथयारों के स्वदेशी िनमाण (आत्मिनभर भारत) के िलए पूंजीगत प रव्यय के िलए समिपत है।
// · इसके बाद सड़क परवहन और राजमाग मंत्रालय और रेल मंत्रालय का स्थान है।
// Information Booster:
// · 2025-26 म रक्षा के कुल बजट म क्षेत्रीय सुरक्षा चुनौितयों का मुकाबला करने के िलए िपछले वष की तुलना म लगभग 5-7% की वृ द्ध देखी गई।
// · "पूंजीगत प रव्यय" िवशेष रूप से लड़ाकू िवमान, पनडुब्बी और िमसाइल प्रणािलयों जैसे नए हाडवेयर खरीदने पर खच िकए गए धन को संदिभत करता है।
// Additional Knowledge:
// · (b) रेलवे: वंदे भारत टेनों और टैक िवद्युतीकरण के िवकास के िलए भारी प रव्यय (₹2.5 लाख करोड़ से अिधक) प्राप्त िकया।
// · (c) स्वास्थ्य: बजट 'िमशन इंद्रधनुष' और एम्स जैसे संस्थानों के िवस्तार पर किद्रत है।
// · (d) िशक्षा: NEP 2020 के कायान्वयन और पीएम श्री (PM SHRI) योजना के िवस्तार पर किद्रत है।
// Q.93  कौन सा दस्तावेज़ सरकार की उधारी आवश्यकताओं को प्रस्तुत करता है?
// A. आिथक सवक्षण
// B. वािषक िवत्तीय िववरण
// C. िवत्त िवधेयक
// D. अनुदान की मांग
// Answer: B
// Sol: सही उत्तर (b) वािषक िवत्तीय िववरण है।
// व
// ्
// या ा:
// · वािषक िवत्तीय िववरण (AFS), िजसे आमतौर पर कद्रीय बजट के रूप म जाना जाता है, भारतीय संिवधान के अनु े द 112 के तहत अिनवाय है।
// · यह एक िविशष्ट िवत्तीय वष के िलए सरकार की अनुमािनत प्रा प्तयों (उधारी सिहत) और व्यय को प्रस्तुत करता है।
// · कुल व्यय और कुल गैर-ऋण प्राप्तयों के बीच का अंतर राजकोषीय घाटा (Fiscal Deficit) दशाता है, जो सरकार की कुल उधारी आवश्यकता है।
// Information Booster:
// · बजट को दो भागों म िवभािजत िकया गया है: राजस्व बजट (आवत आय/व्यय) और पूंजीगत बजट (संपित्त और देनदा रयां, ऋण सिहत)।
// · राजकोषीय उत्तरदाियत्व और बजट प्रबंधन (FRBM) अिधिनयम समय के साथ इन उधारी आवश्यकताओं को कम करने के िलए सरकार के लक्ष्य िनधारत करता है।
// Additional Knowledge::
// · (a) आिथक सवक्षण: िवत्त मंत्रालय ारा बजट से एक िदन पहले प्रस्तुत िकया जाने वाला एक दस्तावेज़, जो िपछले वष म अथव्यवस्था के प्रदशन की समीक्षा करता है।
// · (b) िवत्त िवधेयक: बजट का एक िह ा जो कर संरचना म बदलाव का प्रस्ताव करता है।
// · (d) अनुदान की मांग: ये िविभन्न मंत्रालयों ारा संचािलत करने के िलए आवश्यक धन के िलए व्य क्तगत अनुरोध ह।
// Q.94  ध्रुवीय उपग्रह पृ ी अवलोकन के िलए ों उपयोगी ह?
// A. वे स्थर रहते ह
// B. वे समय के साथ पूरी पृ ी को कवर करते ह
// C. वे प्रकाश से तेज चलते ह
// D. वे पूव-पि म घूमते ह
// Answer: B
// Copyright © 2026 Adda247
// Sol: सही उत्तर (b) वे समय के साथ पूरी पृ ी को कवर करते ह है।
// व
// ्
// या ा:
// · ध्रुवीय उपग्रह पृ ी की प रक्रमा उत्तर-दिक्षण िदशा म करते ह, जो उत्तरी और दिक्षणी ध्रुवों के ऊपर से गुजरते ह।
// · जैसे ही उपग्रह लंबवत चलता है, पृ ी उसके नीचे पि म-से-पूव की ओर घूमती है।
// · यह संयोजन उपग्रह को अंततः कई कक्षाओं म पृ ी की सतह की हर प ी को स्कै न और िनरीक्षण करने की अनुमित देता है, िजससे यह मानिचत्रण और पयावरण िनगरानी के
// िलए आदश बन जाता है।
// Information Booster:
// · संचार उपग्रहों की तुलना म ध्रुवीय उपग्रहों को बहुत कम ऊं चाई (आमतौर पर 500-800 िकमी) पर रखा जाता है।
// · भारत का PSLV (ध्रुवीय उपग्रह प्रक्षेपण यान) िवशेष रूप से इन रमोट सिसंग उपग्रहों को सूय-तुल्यकािलक ध्रुवीय कक्षाओं म स्थािपत करने के िलए िडज़ाइन िकया गया है।
// Additional Knowledge:
// · (a) स्थर: यह भू- स्थर उपग्रहों का वणन करता है, जो एक िनि त स्थान पर रहते ह (टीवी/मौसम के िलए उपयोग िकया जाता है)।
// · (c) प्रकाश से तेज: भौितकी के िनयमों के अनुसार भौितक रूप से असंभव है।
// · (d) पूव-पि म घूमना: ईंधन बचाने के िलए अिधकांश उपग्रह पृ ी के घूणन की िदशा म प रक्रमा करते ह, लेिकन "ध्रुवीय" िवशेष रूप से उत्तर-दिक्षण झुकाव को संदिभत
// करता है।
// Q.95  ‘पीएम श्री’ (PM SHRI) योजना िकस क्षेत्र से संबंिधत है?
// A. स्वास्थ्य
// B. िशक्षा
// C. कृ िष
// D. आवास
// Answer: B
// Sol: सही उत्तर (b) िशक्षा है।
// व
// ्
// या ा:
// · पीएम श्री (प्राइम िमिनस्टर स्कूल्स फॉर राइिजंग इंिडया) एक कद्र प्रायोिजत योजना है िजसे पूरे भारत म 14,500 से अिधक स्कूलों को अपग्रेड और िवकिसत करने के िलए शुरू
// िकया गया है।
// · इन स्कूलों का उद्देश्य रा ीय िशक्षा नीित (NEP) 2020 के कायान्वयन को प्रदिशत करना है।
// · ध्यान संज्ञानात्मक िवकास और 21वीं सदी के कौशल से लैस समग्र, सवागीण व्य क्तयों को बनाने पर है।
// Information Booster:
// · इस योजना को पांच साल (2022-23 से 2026-27) की अविध के िलए मंजूरी दी गई थी।
// · पीएम श्री स्कूलों को "ग्रीन स्कूल" के रूप म िडज़ाइन िकया गया है, िजसम सौर पैनल, एलईडी लाइट और जल संरक्षण प्रणाली शािमल ह।
// Additional Knowledge:
// · (a) स्वास्थ्य: प्रमुख योजनाओं म आयु ान भारत (PM-JAY) और राष्टीय स्वास्थ्य िमशन शािमल ह।
// · (c) कृ िष: प्रमुख योजनाओं म पीएम-िकसान, पीएम फसल बीमा योजना और पीएम कृ िष िसंचाई योजना शािमल ह।
// · (d) आवास: पीएम आवास योजना (शहरी और ग्रामीण) ारा शािसत है।
// Q.96  यिद िकसी िपंड का भार पृ ी पर 24 N है, तो चंद्रमा पर उसका भार होगा:
// A. 2 N
// B. 4 N
// C. 6 N
// D. 12 N
// Answer: B
// Sol: सही उत्तर (b) 4 N है।
// व
// ्
// या ा:
// · िकसी वस्तु का भार उस आकाशीय िपंड के गुरुत्वाकषण खंचाव पर िनभर करता है िजस पर वह है।
// 1
// · चंद्रमा का गुरुत्वाकषण पृ ी के गुरुत्वाकषण का लगभग 1/6वां िह ा है ( )।
// g =
// m g6
// Wearth
// · इसिलए, चंद्रमा पर वजन की गणना इस प्रकार की जाती है: ।
// W =
// moon
// · गणना: 
// 24 N 4 N
// 6
// =
// ।
// 6
// e
// इ ॉमशन बूस्टर:
// · जबिक भार (Weight) गुरुत्वाकषण के आधार पर बदलता है, द्रव्यमान (Mass) ब्र ांड म हर जगह स्थर रहता है।
// · भार एक बल है (W =  
// m×g
// ) और इसे न्यूटन (N) म मापा जाता है, जबिक द्रव्यमान को िकलोग्राम (kg) म मापा जाता है।
// Q.97  नंद काल के दौरान मगध की राजधानी थी:
// A. राजगीर
// B. वैशाली
// C. पाटिलपुत्र
// D. तक्षिशला
// Copyright © 2026 Adda247
// Answer: C
// Sol: सही उत्तर (c) पाटिलपुत्र है।
// व
// ्
// या ा:
// · पाटिलपुत्र (आधुिनक पटना) नंद वंश (लगभग 345–322 ईसा पूव) के दौरान मगध सा ाज्य की राजधानी के रूप म काय करता था।
// · यह शहर गंगा और सोन निदयों के संगम पर रणनीितक रूप से स्थत था, जो रक्षात्मक लाभ और व्यापार माग दोनों प्रदान करता था।
// · नंद शासकों (जैसे महापद्म नंद और धनानंद) के अधीन ही मगध एक िवशाल सा ाज्य बन गया, िजस पर बाद म चंद्रगुप्त मौय ने अिधकार कर िलया।
// Information Booster:
// · हयक वंश के शासक उदाियन राजधानी को राजगीर से पाटिलपुत्र स्थानांत रत करने वाले पहले व्य क्त थे।
// · नंदों के समय तक, पाटिलपुत्र प्राचीन दुिनया के सबसे बड़े और सबसे समृद्ध शहरों म से एक बन गया था।
// Additional Knowledge:
// · (a) राजगीर: मगध की मूल राजधानी (राजगृह के रूप म जानी जाती थी), जो पहािड़यों से िघरी थी।
// · (b) वैशाली: िशशुनाग वंश के अधीन एक संिक्षप्त अविध के िलए राजधानी के रूप म काय िकया।
// · (d) तक्षिशला: उत्तर-पि म (आधुिनक पािकस्तान) म िशक्षा का एक बड़ा कद्र, लेिकन यह कभी भी मगध के मुख्य क्षेत्र की राजधानी नहीं थी।
// Q.98  िनम्निलखत म से कौन सा जीिवत व्यक्त ारा दान िकया जा सकता है?
// A. हृदय
// B. अ ाशय
// C. एक िकडनी
// D. के वल कॉिनया
// Answer: C
// Sol: सही उत्तर (c) एक िकडनी है।
// व
// ्
// या ा:
// · एक जीिवत व्य क्त कुछ अंगों या अंगों के िह ों को दान कर सकता है ोंिक मानव शरीर उसके बाद भी प्रभावी ढंग से काय कर सकता है।
// · एक िकडनी सबसे सामान्य जीिवत दान है ोंिक एक व्य क्त के वल एक कायात्मक िकडनी के साथ पूण, स्वस्थ जीवन जी सकता है।
// · अन्य जीिवत दानों म िलवर (यकृ त) का एक िह ा (जो पुनः िवकिसत हो जाता है), फेफड़े का एक िह ा, या अ ाशय का एक िह ा शािमल है।
// Information Booster:
// · भारत म अंग दान को मानव अंग प्रत्यारोपण अिधिनयम (THOA), 1994 ारा िविनयिमत िकया जाता है।
// · अवैध अंग व्यापार को रोकने के िलए जीिवत दाताओं को आम तौर पर "िनकट संबंधी" (माता-िपता, भाई-बहन, जीवनसाथी) होना चािहए या प्राप्तकता के प्रित िवशेष े ह से काय
// करना चािहए।
// Additional Knowledge:
// · (a) हृदय: के वल "कैडेव रक डोनर" (एक व्य क्त जो ब्रेन डेड है) ारा दान िकया जा सकता है ोंिक इसे हटाने से त ाल मृत्यु हो जाती है।
// · (b) अ ाशय: जबिक एक िह ा जीिवत व्य क्त ारा दान िकया जा सकता है, एक पूण अ ाशय प्रत्यारोपण आमतौर पर मृतक दाता से आता है।
// · (d) के वल कॉिनया: कॉिनया के वल मृत्यु के बाद ही िनकाला जाता है; इसे जीिवत व्य क्त ारा दान नहीं िकया जा सकता ोंिक इससे स्थायी अंधापन हो जाएगा।
// Q.99  ‘िबहू’ नृत्य िकस भारतीय राज्य से संबंिधत है?
// A. ित्रपुरा
// B. असम
// C. मेघालय
// D. िस क्कम
// Answer: B
// Copyright © 2026 Adda247
// Sol: सही उत्तर B (असम) है।
// व
// ्
// या ा:
// िबहू असम का सबसे लोकिप्रय लोक नृत्य है, जो युवा पुरुषों और मिहलाओं दोनों ारा िकया जाता है और इसकी िवशेषता तेज कदम और हाथों की तीव्र गित है।
// यह नृत्य िबहू उत्सव का एक अिभन्न अंग है, जो मौसम के बदलाव और राज्य म कृ िष चक्र के िविभन्न चरणों का प्रतीक है।
// नतक पारंप रक असिमया पोशाक पहनते ह, जैसे मिहलाओं के िलए मूगा िसल्क मेखला चादर और पुरुषों के िलए धोती-गमोसा।
// Information Booster:
// िबहू के प्रकार: तीन मुख्य िबहू त्यौहार ह: अप्रैल म रोंगाली (बोहाग िबहू), अ ू बर म कोंगाली (काटी िबहू), और जनवरी म भोगली (माघ िबहू)।
// वाद्ययंत्र: उपयोग िकए जाने वाले पारंप रक वाद्ययंत्रों म ढोल (डम), पेपा (भस के सींग से बना हॉन पाइप), गोगोना (jew's harp), और ताल (झांझ) शािमल ह।
// िवश्व रकॉड: अप्रैल 2023 म, असम ने एक ही स्थान पर 11,000 से अिधक कलाकारों के साथ सबसे बड़े िबहू नृत्य प्रदशन के िलए िगनीज वल्ड रकॉड बनाया।
// Additional Knowledge:
// ित्रपुरा: होजिगरी जैसे लोक नृत्यों के िलए प्रिसद्ध है, जो रयांग समुदाय ारा िकया जाता है िजसम िसर पर जार को संतुिलत करना शािमल है।
// मेघालय: खासी जनजाित ारा िकए जाने वाले वांगला (100 डम महोत्सव) नृत्य और नोंगक्रेम नृत्य के िलए जाना जाता है।
// िस क्कम: िसंघी छम ( ो लायन डांस) और मारूनी नृत्य के िलए प्रिसद्ध है।
// Q.100  मुगल काल के दौरान, कृ िष उपज पर कौन सा कर लगाया जाता था?
// A. ज़कात
// B. खराज
// C. उश्र
// D. जिज़या
// Answer: B
// Sol: सही उत्तर (b) खराज है।
// व
// ्
// या ा:
// · खराज इ ामी कानून के तहत गैर-मु म प्रजा पर लगाया गया कृ िष भूिम और उपज पर कर था, िजसे मुगल प्रशासन ने अपनाया था।
// · मुगल युग के दौरान, िवशेष रूप से अकबर की ज़ब्त प्रणाली के तहत, राज्य आमतौर पर औसत उपज का एक-ितहाई से आधा िह ा दावा करता था।
// · इसकी गणना भूिम की उवरता और उगाई गई फसलों के प्रकार के आधार पर की जाती थी।
// Information Booster:
// · अकबर के िवत्त मंत्री राजा टोडरमल ने दहशाला प्रणाली की शुरुआत की, िजसने अिधक सटीक खराज/भू-राजस्व िनधारत करने के िलए कीमतों और पैदावार के 10-वषय
// औसत का उपयोग िकया।
// · भूिम को चार श्रेिणयों म वगकृ त िकया गया था: पोलज (वािषक खेती), परती (1-2 साल के िलए खाली छोड़ी गई), चाचर (3-4 साल के िलए खाली), और बंजर (5+ साल के िलए
// खाली)।
// Additional Knowledge:
// · (a) ज़कात: धमाथ उद्देश्यों के िलए मुसलमानों ारा भुगतान िकया जाने वाला एक धािमक कर (आमतौर पर धन का 2.5%)।
// · (c) उश्र: िवशेष रूप से मुसलमानों के पास मौजूद भूिम के िलए एक भूिम कर, आमतौर पर उपज का 10%।
// · (d) जिज़या: सैन्य छू ट के बदले म गैर-मु म प्रजा (िध ी) पर लगाया गया सुरक्षा कर; इसे अकबर ने समाप्त कर िदया था लेिकन औरंगज़ेब ने िफर से शुरू कर िदया।
// Copyright © 2026 Adda24]