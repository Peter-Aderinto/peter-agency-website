import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const countryToRegion: Record<string, string> = {
  NG: 'nigeria',
  GB: 'uk',
  CA: 'canada',
  AU: 'australia',
  US: 'usa',
}

const geolocation = (request: NextRequest) => ({
  country: request.headers.get('x-vercel-ip-country') ?? undefined,
})

export function proxy(request: NextRequest) {
  const geo = geolocation(request)
  const country = geo?.country ?? 'US'
  const region = countryToRegion[country] ?? countryToRegion.US
  const url = request.nextUrl.clone()

  url.searchParams.set('region', region)

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map|txt|xml)$).*)',
  ],
}
