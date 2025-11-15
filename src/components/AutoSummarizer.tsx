import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, Zap, Copy } from "lucide-react";

const AutoSummarizer = () => {
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState<any>(null);

  const sampleText = `Today's team meeting was productive. We discussed the Q4 roadmap and decided to prioritize the mobile app launch. Sarah will lead the development team, and we need to hire 2 additional developers by next month. The marketing budget will increase by 30% to support the launch. We also talked about the new user onboarding flow and agreed to A/B test two different approaches. The deadline for the mobile app is December 15th, and we'll have weekly check-ins every Tuesday at 2 PM.`;

  const generateSummary = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      setSummary({
        title: "📱 Q4 Mobile App Launch Meeting",
        keyPoints: [
          "🎯 Mobile app launch prioritized for Q4",
          "👥 Sarah leads development, need 2 new developers",
          "💰 Marketing budget increased by 30%",
          "🔄 A/B test user onboarding flows",
          "📅 Deadline: December 15th"
        ],
        actionItems: [
          "Hire 2 developers by next month",
          "Weekly check-ins every Tuesday 2 PM",
          "Finalize A/B testing strategy"
        ],
        tags: ["Mobile App", "Q4 Planning", "Team Meeting", "Budget", "Hiring"],
        sentiment: "Positive",
        duration: "45 minutes estimated"
      });
      setIsProcessing(false);
    }, 2500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 text-orange-600" />
              <span className="text-orange-700 font-semibold">Magic Summarizer</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Turn Any Text Into
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Smart Summaries
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Paste meeting notes, emails, or documents. Get instant AI summaries with action items.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Input Text
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputText(sampleText)}
                    className="text-sm"
                  >
                    Use Sample
                  </Button>
                </div>
                
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste your meeting notes, emails, or any text here..."
                  className="w-full h-64 p-4 border border-gray-300 rounded-xl resize-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                />
                
                <Button
                  onClick={generateSummary}
                  disabled={!inputText || isProcessing}
                  className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-bold"
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating Summary...</span>
                    </div>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Smart Summary
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Output Side */}
            <div className="space-y-6">
              {isProcessing && (
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <p className="text-orange-700 font-semibold text-center">AI is analyzing your text...</p>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-orange-200 rounded animate-pulse"></div>
                    <div className="h-2 bg-orange-200 rounded animate-pulse w-3/4"></div>
                    <div className="h-2 bg-orange-200 rounded animate-pulse w-1/2"></div>
                  </div>
                </div>
              )}

              {summary && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 animate-fade-in">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-green-800 text-lg">{summary.title}</h3>
                    <Button variant="outline" size="sm" className="text-green-600">
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </Button>
                  </div>
                  
                  {/* Key Points */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">📋 Key Points</h4>
                    <ul className="space-y-2">
                      {summary.keyPoints.map((point: string, index: number) => (
                        <li key={index} className="text-gray-700">{point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Items */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">✅ Action Items</h4>
                    <ul className="space-y-2">
                      {summary.actionItems.map((item: string, index: number) => (
                        <li key={index} className="text-gray-700 flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-3">🏷️ Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {summary.tags.map((tag: string, index: number) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex justify-between text-sm text-gray-600 pt-4 border-t border-green-200">
                    <span>Sentiment: <span className="font-semibold text-green-600">{summary.sentiment}</span></span>
                    <span>Duration: <span className="font-semibold">{summary.duration}</span></span>
                  </div>
                </div>
              )}

              {!summary && !isProcessing && (
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
                  <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Your AI summary will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoSummarizer;