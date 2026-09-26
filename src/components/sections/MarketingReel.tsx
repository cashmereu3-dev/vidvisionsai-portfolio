import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import { cn } from '../../lib/utils';

const CLD = 'https://res.cloudinary.com/uixsjwlk/video/upload';

type Ad = {
  id: string;
  title: string;
  kind: string;
  runtime: string;
  poster: string;
  src: string;
  roles: string[];
};

// Footage lives in Cloudinary (Portfolio folder); posters ship with the site in public/reel/posters.
const ADS: Ad[] = [
  {
    id: 'bt',
    title: 'B&T Automotive',
    kind: 'Commercial · Tire & Auto Shop',
    runtime: '1:11',
    poster: '/reel/posters/bt.jpg',
    src: `${CLD}/q_auto,vc_h264/portfolio/work-3632969.mp4`,
    roles: ['Drone', 'Camera', 'Edit'],
  },
  {
    id: 'bhg',
    title: 'Black History Gallery',
    kind: 'Community Film · McComb, MS',
    runtime: '3:00',
    poster: '/reel/posters/bhg.jpg',
    src: `${CLD}/q_auto,vc_h264/portfolio/work-8659344.mp4`,
    roles: ['Drone', 'Camera', 'Edit'],
  },
  {
    id: 'sno',
    title: 'Sno-Ball Stand',
    kind: 'Social Spot · McComb, MS',
    runtime: '1:08',
    poster: '/reel/posters/sno.jpg',
    src: `${CLD}/c_crop,w_1080,h_608,g_center/q_auto,vc_h264/portfolio/work-2434185.mp4`,
    roles: ['Drone', 'Camera', 'Edit'],
  },
  {
    id: 'lake',
    title: 'Dixie Springs Mallard',
    kind: 'Real Estate · Aerial Tour',
    runtime: '1:21',
    poster: '/reel/posters/lake.jpg',
    src: `${CLD}/q_auto,vc_h264/portfolio/work-6463661.mp4`,
    roles: ['Drone', 'Edit'],
  },
  {
    id: 'town',
    title: 'Hometown From Above',
    kind: 'Aerial Film · Southwest MS',
    runtime: '1:53',
    poster: '/reel/posters/town.jpg',
    src: `${CLD}/q_auto,vc_h264/portfolio/work-6716578.mp4`,
    roles: ['Drone', 'Camera', 'Edit'],
  },
];

// A short silent loop of the lead ad that plays behind its poster until someone taps play.
const FEATURED_PREVIEW = `${CLD}/so_2,du_8,w_960,c_scale,q_auto,vc_h264,ac_none/portfolio/work-3632969.mp4`;

export default function MarketingReel() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [featured, ...rest] = ADS;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <AdCard ad={featured} featured playing={playing === featured.id} onPlay={() => setPlaying(featured.id)} className="md:col-span-2 md:row-span-2" />
      {rest.map((ad, i) => (
        <AdCard key={ad.id} ad={ad} playing={playing === ad.id} onPlay={() => setPlaying(ad.id)} delay={0.05 * (i + 1)} />
      ))}
      <motion.a
        href="/reel/"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="group rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/15 to-red-600/10 p-8 flex flex-col justify-between min-h-[220px] hover:border-orange-400/40 transition-colors"
      >
        <div className="text-[10px] font-mono text-orange-400 uppercase tracking-[0.2em] font-bold">Visions4U · Captured by Cashmere</div>
        <div>
          <div className="text-3xl font-bold text-orange-100 tracking-tighter italic mb-3">See the full reel</div>
          <p className="text-sm text-orange-100/60 leading-relaxed mb-6">Every film with credits, plus the story behind each shoot.</p>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-300 group-hover:text-orange-100 transition-colors">
            Open reel <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </motion.a>
    </div>
  );
}

function AdCard({
  ad,
  featured = false,
  playing,
  onPlay,
  className,
  delay = 0,
}: {
  ad: Ad;
  featured?: boolean;
  playing: boolean;
  onPlay: () => void;
  className?: string;
  delay?: number;
}) {
  const previewRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = previewRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn('rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col', className)}
    >
      <div className={cn('relative bg-black', featured ? 'aspect-video md:aspect-auto md:flex-1 md:min-h-[360px]' : 'aspect-video')}>
        {playing ? (
          <video
            key={ad.id}
            src={ad.src}
            poster={ad.poster}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-contain bg-black"
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play ${ad.title}, ${ad.runtime}`}
            className="group absolute inset-0 w-full h-full text-left"
          >
            {featured ? (
              <video
                ref={previewRef}
                src={FEATURED_PREVIEW}
                poster={ad.poster}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <img src={ad.poster} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span
              className={cn(
                'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-orange-400 group-hover:border-orange-400',
                featured ? 'w-20 h-20' : 'w-14 h-14'
              )}
            >
              <Play className={cn('text-white fill-white ml-1 group-hover:text-black group-hover:fill-black', featured ? 'w-7 h-7' : 'w-5 h-5')} />
            </span>
            <span className="absolute right-3 bottom-3 px-2 py-1 rounded bg-black/70 text-white text-[11px] font-mono tracking-wider">{ad.runtime}</span>
          </button>
        )}
      </div>
      <div className={cn('p-6', featured && 'md:p-8')}>
        <div className="text-[10px] font-mono text-orange-400 uppercase tracking-[0.2em] font-bold mb-2">{ad.kind}</div>
        <h3 className={cn('font-bold text-white tracking-tight', featured ? 'text-3xl md:text-4xl' : 'text-xl')}>{ad.title}</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {ad.roles.map((r) => (
            <span key={r} className="px-2 py-1 border border-white/10 rounded-md text-[9px] font-bold uppercase tracking-widest text-gray-400">{r}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
