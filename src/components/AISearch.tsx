import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, Brain, Clock } from "lucide-react";

const AISearch = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSearch = () => {
    setIsSearching(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setResult({
        answer: "Yesterday's team meeting covered three key topics: Q4 roadmap planning, new feature prioritization, and budget allocation. You discussed launching the mobile app by December, hiring 2 developers, and increasing marketing spend by 30%.",
        highlights: ["Q4 roadmap", "Mobile app launch", "Budget increase"],
        timestamp: "Yesterday 2:30 PM",
        confidence: "95%"
      });
      setIsSearching(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-semibold">Ask Your Memory</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Search Your Entire Memory
            </h2>
            <p className="text-xl text-gray-600">
              Ask anything about your past conversations, meetings, or notes
            </p>
          </div>

          {/* Search Interface */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100">
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What did I discuss with my team yesterday?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-purple-200 rounded-2xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                />
              </div>
              <Button
                onClick={handleSearch}
                disabled={!query || isSearching}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl font-bold text-lg"
              >
                {isSearching ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  "Search"
                )}
              </Button>
            </div>

            {/* AI Processing Animation */}
            {isSearching && (
              <div className="mb-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <p className="text-purple-700 font-semibold mt-3">AI is searching through your memories...</p>
              </div>
            )}

            {/* Search Result */}
            {result && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 animate-fade-in">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-800">Memory Found</span>
                  <div className="ml-auto flex items-center space-x-2 text-sm text-green-600">
                    <Clock className="w-4 h-4" />
                    <span>{result.timestamp}</span>
                  </div>
                </div>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  {result.answer}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {result.highlights.map((highlight: string, index: number) => (
                    <span key={index} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-green-600 font-semibold">
                  Confidence: {result.confidence}
                </div>
              </div>
            )}
          </div>

          {/* Example Queries */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              "What decisions were made in last week's meeting?",
              "Show me all tasks assigned to John",
              "What ideas did I save about the new product?"
            ].map((example, index) => (
              <button
                key={index}
                onClick={() => setQuery(example)}
                className="p-4 bg-white rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all text-left"
              >
                <p className="text-gray-700 text-sm">{example}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISearch;