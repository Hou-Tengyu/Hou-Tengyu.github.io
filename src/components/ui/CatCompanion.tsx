'use client';

import { useEffect, useState } from 'react';
import { useMessages } from '@/lib/i18n/useMessages';

export default function CatCompanion() {
  const messages = useMessages();
  const [greeting, setGreeting] = useState(0);

  useEffect(() => {
    if (!greeting) return;
    const timer = window.setTimeout(() => setGreeting(0), 3000);
    return () => window.clearTimeout(timer);
  }, [greeting]);

  return (
    <div className="cat-companion" data-active={greeting > 0}>
      <button
        type="button"
        className="cat-pet-target"
        aria-label={messages.cat.pet}
        title={messages.cat.pet}
        onClick={() => setGreeting((value) => value + 1)}
      />
      <p className="cat-greeting" role="status" aria-live="polite" aria-atomic="true">
        {greeting > 0 ? messages.cat.greeting : ''}
      </p>
    </div>
  );
}
