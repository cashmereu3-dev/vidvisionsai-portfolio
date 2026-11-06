import { ArrowLeft, Bot, ClipboardList, Headphones, PhoneCall, Database, ShieldCheck, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { name: 'Natural-language parts lookup', detail: 'Recognizes common vehicle and part requests, asks for missing information, and returns available sample-catalog results.', icon: Bot },
  { name: 'Phone-call workflow', detail: 'Twilio voice webhooks provide guided phone interactions, with trial-account restrictions described accurately.', icon: PhoneCall },
  { name: 'Call history and outcomes', detail: 'An operations dashboard records call summaries, transcripts, and conversation outcomes.', icon: ClipboardList },
  { name: 'Callback management', detail: 'Tracks requests for unavailable parts and queues customers for follow-up.', icon: MessageSquare },
  { name: 'Parts catalog', detail: 'A demonstrator dataset covers 5,170 parts, 110 vehicles, and 45 part types.', icon: Database },
  { name: 'Dashboard and testing', detail: 'Five sections: Dashboard, Test a Call, Call Log, Callbacks, and Catalog.', icon: Headphones },
];

export default function AutoPartsCaseStudy() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white mb-10">
        <ArrowLeft className="w-4 h-4" /> Back to all projects
      </Link>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-5">AI Systems · Automotive · Case study</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">Auto Parts <span className="text-blue-400">Voice Assistant</span></h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">A completed voice-assisted automotive parts counter demo that interprets customer requests, searches a structured sample catalog, and organizes customer follow-ups in one operations dashboard.</p>
          <div className="rounded-2xl p-5 border border-blue-500/20 bg-blue-500/5">
            <p className="text-blue-200 font-semibold text-sm flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Completed demonstration build</p>
            <p className="text-gray-400 text-sm mt-2">The implementation and demo catalog are available in the project source. This is not promoted as an always-on public phone service: a Twilio trial, phone verification, SMS activation, live retailer inventory integration, and permanent hosting are separate production requirements.</p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#090f1b]">
          <img src="/auto-parts-voice-assistant-cover.svg" alt="Illustrative cover for the Auto Parts Voice Assistant project" className="w-full h-auto" />
        </div>
      </div>
      <div className="mt-20">
        <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Built around a real counter workflow.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ name, detail, icon: Icon }) => (
            <div key={name} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <Icon className="text-blue-400 w-7 h-7 mb-5" />
              <h3 className="font-bold text-lg mb-3">{name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-7">
        <h2 className="text-2xl font-bold mb-3">Implementation</h2>
        <p className="text-gray-300 leading-relaxed">Node.js / Express server, structured sample inventory data, speech-oriented conversation handling, Twilio webhook integration, call and callback records, an HTML dashboard, and deployment configuration for an always-on host. The source includes an automated smoke-test suite.</p>
        <p className="text-gray-400 mt-4 text-sm">This case study describes the completed demo implementation; production integrations have not been represented as live features.</p>
      </div>
    </div>
  );
}
