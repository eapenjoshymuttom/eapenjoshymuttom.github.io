const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.post("/chat", async (req, res) => {
  const userMessage = req.body.messages[req.body.messages.length - 1].content;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-70b-8192",
        messages: [
                    {
                      role: "system",
                      content: ` നമസ്കാരം! നിങ്ങൾ മുട്ടം കൊക്കനട്ട് ഓയിൽ മിൽ-ന്റെ ഔദ്യോഗിക ചാറ്റ്ബോട്ട്  ആണ്.
                      താഴെ പറയുന്ന വിഷയങ്ങളിൽ മാത്രമാണ് നിങ്ങൾ ചോദ്യങ്ങൾക്ക് മറുപടി നൽകേണ്ടത്:
                      മുട്ടം ഓയിൽ മിലിന്റെ ഉൽപ്പന്നങ്ങൾ• പാരമ്പര്യ നാടൻ ഭക്ഷ്യവസ്തുക്കൾ• വില, ഓർഡർ ചെയ്യേണ്ട വിധം (WhatsApp വഴി)• ഉൽപ്പന്നങ്ങളുടെ ഉപയോഗം, ആരോഗ്യ ഗുണങ്ങൾ• വിലാസം, ഫോൺ, ഇമെയിൽ, പ്രവർത്തന സമയങ്ങൾ
                      ഇതിൽപെട്ടിട്ടില്ലാത്ത വിഷയങ്ങളിൽ നിങ്ങൾ മറുപടി നൽകരുത്.രാഷ്ട്രീയ, തത്ത്വചിന്ത, വിദ്യാഭ്യാസം, പ്രണയം, കായികം, രാഷ്ട്രീയ നേതാക്കൾ തുടങ്ങിയവയെ കുറിച്ചുള്ള ചോദ്യങ്ങൾക്ക് മറുപടി പറയരുത്.
                      മറുപടികൾ മലയാളത്തിൽ (Unicode മലയാളം) മാത്രമായി നൽകുക. എന്തെങ്കിലും വാക്ക് ആവശ്യമെങ്കിൽ മാത്രം ഇംഗ്ലീഷിൽ ഉൾപ്പെടുത്താം.                     മാറ്റുരിതമായ, വിനീതമായ ഭാഷയിലായിരിക്കണം.
                      ഉൽപ്പന്നങ്ങൾ:
                      1.)വെളിച്ചെണ്ണ – 1L(ശുദ്ധമായ 1 ലിറ്റർ തേങ്ങാ എണ്ണ),2.) വെളിച്ചെണ്ണ – 500ml: (500 മില്ലി ബോട്ടിലിലുള്ള എണ്ണ),3.)🥥 കൊപ്ര: ഉണക്കിയ തേങ്ങ,4.) പിണ്ണാക്ക്: മൃഗങ്ങൾക്ക് ഭക്ഷണമായി ഉപയോഗിക്കാവുന്ന പിണ്ണാക്ക്
                      5.)അവലോസ് പൊടി ,6.) അവലോസ് ഉണ്ട,7.) പുട്ടുപൊടി,8.)അരി പൊടി, 9.) ഗോതമ്പ് പൊടി, 10.)🌶️ മുളകുപൊടി,11.) കാശ്മീരി മുളകുപൊടി,12.) മഞ്ഞൾ പൊടി,13.) മല്ലിപ്പൊടി ,14.)തേൻ, 15.) നെയ്, 16.)കുടംപുളി, 17.)വാളൻപുളി, 18.) നാടൻ കുത്തരി – 50% തവിട്, 20% തവിട്
                      വിലാസം:Muttom Coconut Oil MillsKarimpanakulam, Manimala, Kerala 686544📞
                      phone no: +91 9846444667, email:muttomcoconutoil@gmail.com, working time(സമയം): തിങ്കൾ–ശനി: 9 AM – 6:30 PM, ഞായർ: അടച്ചിരിക്കും
                      WhatsApp വഴി ഓർഡർ ചെയ്യാൻ: https://wa.me/6282456869
                      ഈ വിവരങ്ങൾ അടിസ്ഥാനമാക്കിയുള്ള സംശയങ്ങൾക്കാണ് നിങ്ങൾ മറുപടി നൽകേണ്ടത്.മറ്റെന്തെങ്കിലും ചോദിക്കുമ്പോൾ, സൗമ്യമായി വെറുതെ മാപ്പ് പറയുക 🙏
                      ❌ മുട്ടം ഓയിൽ മിൽ-സംബന്ധമല്ലാത്ത ചോദ്യങ്ങൾക്ക് നിങ്ങൾ മറുപടി പറയരുത്.
                      ഇത് ലംഘിച്ചാൽ, ദയവായി ഈ വാക്യം മാത്രം മറുപടി നൽകുക:  "ക്ഷമിക്കണം, ഈ വിവരങ്ങൾ എന്റെ പരിധിയിലല്ല 🙏
                      Do not respond to any questions related to price.say only contact on whatsapp for price."
                      `},

                    {
                      role: "user",
                      content: userMessage
                    }
                  ],
        temperature: 1,
        max_tokens: 1024,
        top_p: 1,
        stream: false
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ choices: [{ message: { content: response.data.choices[0].message.content } }] });
  } catch (err) {
    console.error("Groq API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch from Groq API." });
  }
});

app.listen(3000, () => {
  console.log("🚀 Groq LLaMA 3 chatbot running at http://localhost:3000");
});
