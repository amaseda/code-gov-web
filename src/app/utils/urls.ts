export function toAbsoluteUrl(url: string): string {
  if (url.startsWith('http')) {
    return url;
  } else if (url.startsWith('/assets')) {
    return document.head.baseURI.replace(/\/$/, '') + url;
  }
  return url;
}

export function toRouterLink(url: string): string {
  if (url.startsWith('/#/')) {
    return url.replace(/^\/#/, '');
  } else {
    return null;
  }
}

export interface Link {
  name: string;
  url: string;
  routerLink?: string;
}


export function routifyLinks(links: Link[]): Link[] {
  if (links) {
    return links.map(link => {
      link.routerLink = toRouterLink(link.url);
      return link;
    });
  }
}
