import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const countryToRegion: Record<string, string> = {
  US: 'usa',
  GB: 'uk',
  CA: 'canada',
  AU: 'australia',
  NG: 'nigeria',
}

type GeoRequest = NextRequest & {
  geo?: {
    country?: string
  }
}

export function middleware(request: NextRequest) {
  const country = (request as GeoRequest).geo?.country
  const region = country ? countryToRegion[country] : undefined

  if (!region) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.searchParams.set('region', region)

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map|txt|xml)$).*)',
  ],
}
