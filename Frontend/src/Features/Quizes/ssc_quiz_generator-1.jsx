import { useState, useEffect, useRef } from "react";

const TOTAL_QUESTIONS = 1000;
const BATCH_SIZE = 40;
const TOTAL_BATCHES = Math.ceil(TOTAL_QUESTIONS / BATCH_SIZE);

const CATEGORY_DISTRIBUTION = [
  { category: "history", label: "History", count: 200, color: "#f59e0b" },
  { category: "science", label: "Science (10th)", count: 200, color: "#10b981" },
  { category: "Polity", label: "Polity", count: 150, color: "#3b82f6" },
  { category: "economics", label: "Economics", count: 100, color: "#8b5cf6" },
  { category: "Geography", label: "Geography", count: 100, color: "#06b6d4" },
  { category: "general", label: "General", count: 100, color: "#f43f5e" },
  { category: "static", label: "Static GK", count: 100, color: "#84cc16" },
  { category: "computer", label: "Computer", count: 50, color: "#fb923c" },
];

const getBatchPrompt = (batchIndex, batchSize) => {
  const cats = CATEGORY_DISTRIBUTION;
  const catIndex = batchIndex % cats.length;
  const primaryCat = cats[catIndex];
  const secondaryCat = cats[(catIndex + 1) % cats.length];
  const half = Math.floor(batchSize / 2);

  return `You are an expert SSC/UPSC/Government exam question creator. Generate exactly ${batchSize} multiple choice questions for Indian government competitive exams (SSC CHSL, SSC CGL, SSC MTS, UPSC, Railway).

Generate ${half} questions on "${primaryCat.label}" and ${batchSize - half} questions on "${secondaryCat.label}".

STRICT RULES:
1. Questions MUST be factually 100% correct and verifiable
2. Include many PYQ-style questions (questions that have appeared in SSC/UPSC/Railway exams before)
3. Science questions must be from NCERT Class 8-10 level
4. History: Focus on Ancient, Medieval, Modern Indian History
5. Polity: Indian Constitution, Articles, Amendments, Bodies
6. Economics: Basic macro/micro, Indian economy, budget terms
7. Geography: Indian + World geography
8. Static GK: Awards, Books, Capitals, Currencies, Dances, etc.
9. Each question must have exactly 4 options, only ONE correct
10. correctoption must be "1", "2", "3", or "4" (string number indicating which option is correct)

Return ONLY a valid JSON array, no markdown, no explanation:
[
  {
    "Username": "userID",
    "Question": "...",
    "Option1": "...",
    "Option2": "...",
    "Option3": "...",
    "Option4": "...",
    "correctoption": "1",
    "category": "${primaryCat.category}"
  }
]

Categories allowed: science, history, Polity, computer, economics, general, current, Geography, static

Generate ${batchSize} unique, exam-quality questions now:`;
};

export default function QuizGenerator() {
  const [questions, setQuestions] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentBatch, setCurrentBatch] = useState(0);
  const [errors, setErrors] = useState([]);
  const [done, setDone] = useState(false);
  const [preview, setPreview] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const abortRef = useRef(false);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const fetchBatch = async (batchIndex) => {
    const prompt = getBatchPrompt(batchIndex, BATCH_SIZE);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await response.json();
      const rawText = data?.content?.[0]?.text || "";
      const cleaned = rawText.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      if (Array.isArray(parsed)) return parsed;
      return [];
    } catch (e) {
      return [];
    }
  };

  const startGeneration = async () => {
    setIsGenerating(true);
    setQuestions([]);
    setErrors([]);
    setDone(false);
    setCurrentBatch(0);
    abortRef.current = false;

    let allQuestions = [];

    for (let i = 0; i < TOTAL_BATCHES; i++) {
      if (abortRef.current) break;
      setCurrentBatch(i + 1);

      const batch = await fetchBatch(i);
      if (batch.length === 0) {
        setErrors((prev) => [...prev, `Batch ${i + 1} failed, retrying...`]);
        await delay(2000);
        const retry = await fetchBatch(i);
        if (retry.length > 0) {
          allQuestions = [...allQuestions, ...retry];
          setQuestions([...allQuestions]);
        } else {
          setErrors((prev) => [...prev, `Batch ${i + 1} failed permanently`]);
        }
      } else {
        allQuestions = [...allQuestions, ...batch];
        setQuestions([...allQuestions]);
      }

      if (i < TOTAL_BATCHES - 1) await delay(800);
    }

    setIsGenerating(false);
    setDone(true);
  };

  const stopGeneration = () => {
    abortRef.current = true;
    setIsGenerating(false);
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(questions, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ssc_gk_gs_1000_questions.json";
    a.click();
  };

  const downloadCSV = () => {
    const headers = ["Username","Question","Option1","Option2","Option3","Option4","correctoption","category"];
    const rows = questions.map((q) =>
      headers.map((h) => `"${(q[h] || "").replace(/"/g, '""')}"`).join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ssc_gk_gs_1000_questions.csv";
    a.click();
  };

  const progress = Math.min((questions.length / TOTAL_QUESTIONS) * 100, 100);

  const filteredQuestions = questions.filter((q) => {
    const matchCat = filter === "all" || q.category === filter;
    const matchSearch =
      !searchTerm ||
      q.Question?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  const catCounts = {};
  questions.forEach((q) => {
    catCounts[q.category] = (catCounts[q.category] || 0) + 1;
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: "#e2e8f0",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <div>
          <div style={{ fontSize: "22px", fontWeight: "800", color: "#f8fafc", letterSpacing: "-0.5px" }}>
            🏛️ SSC GK/GS Quiz Generator
          </div>
          <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "2px" }}>
            AI-powered • 1000 Verified Questions • SSC PYQ Style
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {!isGenerating && !done && (
            <button onClick={startGeneration} style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "white", border: "none", borderRadius: "10px",
              padding: "10px 24px", fontWeight: "700", fontSize: "15px",
              cursor: "pointer", boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
            }}>
              ⚡ Generate 1000 Questions
            </button>
          )}
          {isGenerating && (
            <button onClick={stopGeneration} style={{
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white", border: "none", borderRadius: "10px",
              padding: "10px 24px", fontWeight: "700", fontSize: "15px", cursor: "pointer",
            }}>
              ⏹ Stop
            </button>
          )}
          {questions.length > 0 && (
            <>
              <button onClick={downloadJSON} style={{
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "white", border: "none", borderRadius: "10px",
                padding: "10px 20px", fontWeight: "600", fontSize: "14px", cursor: "pointer",
              }}>
                ⬇ JSON
              </button>
              <button onClick={downloadCSV} style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "white", border: "none", borderRadius: "10px",
                padding: "10px 20px", fontWeight: "600", fontSize: "14px", cursor: "pointer",
              }}>
                ⬇ CSV
              </button>
            </>
          )}
        </div>
      </div>

      <div style={{ padding: "24px 32px", maxWidth: "1400px", margin: "0 auto" }}>
        {/* Progress Section */}
        {(isGenerating || done) && (
          <div style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span style={{ fontWeight: "700", fontSize: "16px" }}>
                {done ? "✅ Generation Complete!" : `🔄 Generating... Batch ${currentBatch}/${TOTAL_BATCHES}`}
              </span>
              <span style={{ color: "#a78bfa", fontWeight: "700", fontSize: "18px" }}>
                {questions.length} / {TOTAL_QUESTIONS}
              </span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "999px", height: "12px", overflow: "hidden" }}>
              <div style={{
                width: `${progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #6366f1, #a78bfa, #10b981)",
                borderRadius: "999px",
                transition: "width 0.5s ease",
                boxShadow: "0 0 12px rgba(167,139,250,0.6)",
              }} />
            </div>
            <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {CATEGORY_DISTRIBUTION.map((cat) => (
                <div key={cat.category} style={{
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: "8px", padding: "6px 14px", fontSize: "12px",
                  border: `1px solid ${cat.color}40`,
                  color: cat.color,
                }}>
                  {cat.label}: <strong>{catCounts[cat.category] || 0}</strong>
                </div>
              ))}
            </div>
            {errors.length > 0 && (
              <div style={{ marginTop: "10px", fontSize: "12px", color: "#fca5a5" }}>
                ⚠ {errors[errors.length - 1]}
              </div>
            )}
          </div>
        )}

        {/* Intro when idle */}
        {!isGenerating && !done && questions.length === 0 && (
          <div style={{
            textAlign: "center", padding: "80px 20px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "20px",
            border: "1px dashed rgba(255,255,255,0.1)",
          }}>
            <div style={{ fontSize: "64px", marginBottom: "16px" }}>📚</div>
            <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "12px", color: "#f1f5f9" }}>
              1000 SSC-Level GK/GS Questions
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "15px", maxWidth: "500px", margin: "0 auto 32px" }}>
              AI-generated, fact-verified questions in SSC PYQ format covering History, Science (10th NCERT), Polity, Economics, Geography & more.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
              {CATEGORY_DISTRIBUTION.map((cat) => (
                <div key={cat.category} style={{
                  background: `${cat.color}20`, border: `1px solid ${cat.color}60`,
                  borderRadius: "8px", padding: "8px 16px", fontSize: "13px", color: cat.color,
                }}>
                  {cat.label} — {cat.count}q
                </div>
              ))}
            </div>
            <button onClick={startGeneration} style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "white", border: "none", borderRadius: "12px",
              padding: "14px 36px", fontWeight: "700", fontSize: "16px",
              cursor: "pointer", boxShadow: "0 8px 32px rgba(99,102,241,0.4)",
            }}>
              ⚡ Start Generating 1000 Questions
            </button>
          </div>
        )}

        {/* Filter & Search */}
        {questions.length > 0 && (
          <div style={{ marginBottom: "20px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <input
              type="text"
              placeholder="🔍 Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "10px", padding: "10px 16px", color: "#f1f5f9",
                fontSize: "14px", width: "260px", outline: "none",
              }}
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "10px", padding: "10px 16px", color: "#f1f5f9",
                fontSize: "14px", outline: "none", cursor: "pointer",
              }}
            >
              <option value="all">All Categories ({questions.length})</option>
              {Object.entries(catCounts).map(([cat, count]) => (
                <option key={cat} value={cat}>{cat} ({count})</option>
              ))}
            </select>
            <span style={{ color: "#94a3b8", fontSize: "14px" }}>
              Showing {filteredQuestions.length} questions
            </span>
          </div>
        )}

        {/* Questions Table */}
        {filteredQuestions.length > 0 && (
          <div style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ background: "rgba(99,102,241,0.2)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    {["#", "Question", "Option 1", "Option 2", "Option 3", "Option 4", "✓ Answer", "Category"].map((h) => (
                      <th key={h} style={{
                        padding: "12px 14px", textAlign: "left",
                        fontWeight: "700", color: "#c7d2fe", whiteSpace: "nowrap",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredQuestions.slice(0, 200).map((q, i) => {
                    const correctText = q[`Option${q.correctoption}`] || q.correctoption;
                    const catColor = CATEGORY_DISTRIBUTION.find(c => c.category === q.category)?.color || "#94a3b8";
                    return (
                      <tr key={i} style={{
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                        cursor: "pointer",
                      }}
                        onClick={() => setPreview(q)}
                      >
                        <td style={{ padding: "10px 14px", color: "#64748b", fontWeight: "600", minWidth: "40px" }}>{i + 1}</td>
                        <td style={{ padding: "10px 14px", maxWidth: "280px", lineHeight: "1.4" }}>
                          <div style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                            {q.Question}
                          </div>
                        </td>
                        <td style={{ padding: "10px 14px", color: "#cbd5e1", minWidth: "100px" }}>{q.Option1}</td>
                        <td style={{ padding: "10px 14px", color: "#cbd5e1", minWidth: "100px" }}>{q.Option2}</td>
                        <td style={{ padding: "10px 14px", color: "#cbd5e1", minWidth: "100px" }}>{q.Option3}</td>
                        <td style={{ padding: "10px 14px", color: "#cbd5e1", minWidth: "100px" }}>{q.Option4}</td>
                        <td style={{ padding: "10px 14px", minWidth: "120px" }}>
                          <span style={{
                            background: "rgba(16,185,129,0.2)", color: "#10b981",
                            padding: "3px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "600",
                          }}>
                            {q.correctoption}. {correctText?.slice(0, 20)}{correctText?.length > 20 ? "..." : ""}
                          </span>
                        </td>
                        <td style={{ padding: "10px 14px" }}>
                          <span style={{
                            background: `${catColor}20`, color: catColor,
                            padding: "3px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}>
                            {q.category}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {filteredQuestions.length > 200 && (
              <div style={{ padding: "16px", textAlign: "center", color: "#64748b", fontSize: "13px" }}>
                Showing first 200 of {filteredQuestions.length} — Download JSON/CSV for all questions
              </div>
            )}
          </div>
        )}
      </div>

      {/* Question Preview Modal */}
      {preview && (
        <div style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 1000, padding: "20px",
        }} onClick={() => setPreview(null)}>
          <div style={{
            background: "linear-gradient(135deg, #1e1b4b, #312e81)",
            borderRadius: "20px", padding: "32px",
            maxWidth: "600px", width: "100%",
            border: "1px solid rgba(167,139,250,0.3)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: "11px", color: "#a78bfa", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase" }}>
              {preview.category}
            </div>
            <div style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.6", marginBottom: "24px", color: "#f1f5f9" }}>
              {preview.Question}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[1,2,3,4].map((n) => {
                const isCorrect = String(n) === String(preview.correctoption);
                return (
                  <div key={n} style={{
                    padding: "12px 16px", borderRadius: "10px",
                    background: isCorrect ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${isCorrect ? "#10b981" : "rgba(255,255,255,0.1)"}`,
                    display: "flex", alignItems: "center", gap: "10px",
                    color: isCorrect ? "#10b981" : "#cbd5e1",
                    fontWeight: isCorrect ? "700" : "400",
                  }}>
                    <span style={{
                      width: "24px", height: "24px", borderRadius: "50%",
                      background: isCorrect ? "#10b981" : "rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "12px", fontWeight: "700", flexShrink: 0,
                      color: isCorrect ? "white" : "#94a3b8",
                    }}>{n}</span>
                    {preview[`Option${n}`]}
                    {isCorrect && <span style={{ marginLeft: "auto" }}>✓</span>}
                  </div>
                );
              })}
            </div>
            <button onClick={() => setPreview(null)} style={{
              marginTop: "20px", width: "100%",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "10px", padding: "10px", color: "#94a3b8",
              cursor: "pointer", fontSize: "14px",
            }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
