const Superpowers = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Superpowers for people who can't do it all
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Notes that never get lost */}
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 group" onClick={() => {
            const element = event.currentTarget;
            element.style.transform = 'scale(0.95)';
            setTimeout(() => {
              element.style.transform = 'scale(1.05)';
              setTimeout(() => {
                element.style.transform = 'scale(1)';
              }, 150);
            }, 100);
          }}>
            <h3 className="text-2xl font-bold text-blue-800 mb-4 group-hover:text-blue-900">
              Notes that never get lost
            </h3>
            <p className="text-blue-600 mb-6">
              Shopping lists, ideas, or whatever. Just say it, type it, or drop it in and your list is saved.
            </p>
            
            {/* Chat Interface */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-end mb-2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
                  Memorae, add Stranger Things to my watch list!
                </div>
              </div>
              <div className="text-xs text-gray-500 text-right mb-3">17:48</div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl max-w-xs">
                  Added 'Stranger Things' to your watch list.
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-3">17:48</div>
            </div>
          </div>

          {/* All your calendars in one chat */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 group" onClick={() => {
            const element = event.currentTarget;
            element.style.transform = 'scale(0.95)';
            setTimeout(() => {
              element.style.transform = 'scale(1.05)';
              setTimeout(() => {
                element.style.transform = 'scale(1)';
              }, 150);
            }, 100);
          }}>
            <h3 className="text-2xl font-bold text-green-800 mb-4 group-hover:text-green-900">
              All your calendars in one chat
            </h3>
            <p className="text-green-600 mb-6">
              Google, Outlook. Your appointments, events, and tasks together. You won't miss a thing, even if you try.
            </p>
            
            {/* Chat Interface */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-end mb-2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
                  Memorae, cancel all events after Thursday at 6PM.
                </div>
              </div>
              <div className="text-xs text-gray-500 text-right mb-3">17:48</div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl max-w-xs">
                  Cancelled all your events after Thursday at 6pm.
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-3">17:48</div>
            </div>
          </div>

          {/* Voice notes that become tasks */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Voice notes that become tasks
            </h3>
            <p className="text-gray-600 mb-6">
              Your voice is enough. Memorae listens, transcribes, and organizes what you say. That easy.
            </p>
            
            {/* Chat Interface */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-end mb-2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full mr-2"></div>
                  🎤
                </div>
              </div>
              <div className="text-xs text-gray-500 text-right mb-3">17:48</div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl max-w-xs">
                  Created reminder: family lunch at Aunt Luisa's Sunday at 1:00 PM.
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-3">17:48</div>
            </div>
          </div>

          {/* Unlimited automatic reminders */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Unlimited automatic reminders
            </h3>
            <p className="text-gray-600 mb-6">
              Unique or repeating. Weekly, monthly, with or without excuses. Scheduled or spontaneous — Memorae reminds you whenever needed!
            </p>
            
            {/* Chat Interface */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-end mb-2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
                  Remind me to meditate tomorrow at 8AM!
                </div>
              </div>
              <div className="text-xs text-gray-500 text-right mb-3">17:48</div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl max-w-xs">
                  I've set your reminder for tomorrow at 8:00 to meditate. Don't forget to take that time to take care of yourself! 🧘‍♀️
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-3">17:48</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Superpowers;