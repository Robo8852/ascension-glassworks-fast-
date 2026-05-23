'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

const SITE_HOST_HINT = 'ascensionglassworks';

function isOutboundLink(href: string): boolean {
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin === window.location.origin) return false;
    return !url.hostname.includes(SITE_HOST_HINT);
  } catch {
    return false;
  }
}

function extractTrackParams(el: HTMLElement): Record<string, string> {
  const params: Record<string, string> = {};
  for (const attr of Array.from(el.attributes)) {
    if (attr.name.startsWith('data-track-')) {
      const key = attr.name.slice('data-track-'.length).replace(/-/g, '_');
      params[key] = attr.value;
    }
  }
  return params;
}

export function AnalyticsListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const search = searchParams?.toString();
    const path = search ? `${pathname}?${search}` : pathname;
    trackEvent('page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a');
      if (anchor instanceof HTMLAnchorElement) {
        const href = anchor.getAttribute('href') || '';
        if (href.startsWith('tel:')) {
          trackEvent('click_to_call', {
            phone_number: href.replace('tel:', ''),
            link_location: anchor.dataset.trackLocation || 'unknown',
          });
        } else if (href.startsWith('mailto:')) {
          trackEvent('click_to_email', {
            email_address: href.replace('mailto:', '').split('?')[0],
            link_location: anchor.dataset.trackLocation || 'unknown',
          });
        } else if (href && isOutboundLink(href)) {
          trackEvent('outbound_click', {
            link_url: href,
            link_text: (anchor.textContent || '').trim().slice(0, 100),
          });
        }
      }

      const trackable = target.closest<HTMLElement>('[data-track]');
      if (trackable) {
        const name = trackable.dataset.track;
        if (name) {
          trackEvent(name, extractTrackParams(trackable));
        }
      }
    };

    document.addEventListener('click', handler, { capture: true });
    return () => document.removeEventListener('click', handler, { capture: true });
  }, []);

  return null;
}
