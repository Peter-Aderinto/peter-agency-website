import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isRegionKey, mapCountryToRegion } from './lib/regions'

const geolocation = (request: NextRequest) => ({
  country:
    (request as NextRequest & { geo?: { country?: string } }).geo?.country ??
    request.headers.get('x-vercel-ip-country') ??
    undefined,
  countryRegion: request.headers.get('x-vercel-ip-country-region') ?? undefined,
  city: request.headers.get('x-vercel-ip-city') ?? undefined,
})

export function proxy(request: NextRequest) {
  const existingRegion = request.cookies.get('region')?.value
  const hasStoredRegion = isRegionKey(existingRegion)
  const geo = geolocation(request)
  const region = hasStoredRegion ? existingRegion : mapCountryToRegion(geo.country)
  const requestHeaders = new Headers(request.headers)

  requestHeaders.set('x-empire-region', region)
  if (geo.country) requestHeaders.set('x-empire-country', geo.country)
  if (geo.countryRegion) {
    requestHeaders.set('x-empire-country-region', geo.countryRegion)
  }
  if (geo.city) requestHeaders.set('x-empire-city', geo.city)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  if (!hasStoredRegion) {
    response.cookies.set('region', region, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
    })
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map|txt|xml)$).*)',
  ],
}
