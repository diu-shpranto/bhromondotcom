import { EnvelopeIcon } from '@heroicons/react/24/outline';

const LegalLayout = ({ title, children, showContact = false }) => {
  return (
    <div className="min-h-screen bg-sand">
      {/* Forest header band */}
      <div className="bg-forest">
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 md:pt-28 md:pb-16">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white">{title}</h1>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mt-5"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 md:py-14">
        <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-10">
          {children}

          {showContact && (
            <div className="mt-10 rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 p-6">
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-emerald-700" />
                <h2 className="font-display text-lg font-bold text-stone-900">যোগাযোগ</h2>
              </div>
              <p className="text-stone-600 leading-relaxed mt-3">
                কোনো প্রশ্ন বা অনুরোধ থাকলে আমাদের ইমেইল করুন:{' '}
                <a href="mailto:legal@bhramon.com" className="text-emerald-700 font-bold">
                  legal@bhramon.com
                </a>
              </p>
              <a
                href="mailto:legal@bhramon.com"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition"
              >
                <EnvelopeIcon className="h-5 w-5" />
                ইমেইল করুন
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalLayout;
