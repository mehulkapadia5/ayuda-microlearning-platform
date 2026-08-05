'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { tracks, categories } from '@/lib/mock-data';
import TrackGrid from '@/components/home/TrackGrid';

export default function ExplorePage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tracks.filter(t => {
      const matchCat = category === 'All' || t.category === category;
      const matchQ = !q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="content">
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text)', margin: '0 0 6px', letterSpacing: '-0.02em' }}>Explore</h1>
        <p style={{ fontSize: 15, color: 'var(--text-2)', margin: 0 }}>Bite-sized tracks to level up a specific skill.</p>
      </div>

      {/* Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 48, padding: '0 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, marginBottom: 18, maxWidth: 560 }}>
        <Search size={18} color="var(--text-3)" />
        <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search tracks, topics…"
          style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--text)', fontSize: 15, flex: 1, minWidth: 0 }}
        />
      </div>

      {/* Category chips */}
      <div className="hide-scrollbar" style={{ display: 'flex', gap: 10, overflowX: 'auto', marginBottom: 28, paddingBottom: 2 }}>
        {categories.map(cat => {
          const active = cat === category;
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                flexShrink: 0, padding: '9px 16px', borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                border: '1px solid', borderColor: active ? 'var(--purple)' : 'var(--border)',
                background: active ? 'var(--purple)' : 'var(--surface)',
                color: active ? '#fff' : 'var(--text-2)',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <TrackGrid tracks={filtered} />
      ) : (
        <div style={{ textAlign: 'center', padding: '64px 20px', color: 'var(--text-3)' }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: '0 0 4px' }}>No tracks found</p>
          <p style={{ fontSize: 14, margin: 0 }}>Try a different search or category.</p>
        </div>
      )}
    </motion.div>
  );
}
