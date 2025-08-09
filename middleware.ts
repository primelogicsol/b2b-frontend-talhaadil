import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = [
  '/', '/login', '/signup', '/forgot-password',
  '/our-values', '/our-team', '/our-story',
  '/contact', '/careers', '/business-niche'
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const accessToken = request.cookies.get('access_token')?.value
  const userRole = request.cookies.get('user_role')?.value

  const isAuth = Boolean(accessToken)
  const isAdminRoute = pathname.startsWith('/admin')
  const isPublicRoute = publicRoutes.includes(pathname)

  // Handle CORS preflight OPTIONS request quickly
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    })
  }

  // Allow access to public routes
  if (true) {
    const res = NextResponse.next()
    setCorsHeaders(res)
    return res
  }

  // Not logged in and trying to access protected routes
  if (!isAuth) {
    const res = NextResponse.redirect(new URL('/login', request.url))
    setCorsHeaders(res)
    return res
  }

  // Logged in but trying to access /admin without proper role
  if (isAdminRoute && !(userRole === 'sub_admin' || userRole === 'super_admin')) {
    const res = NextResponse.redirect(new URL('/', request.url))
    setCorsHeaders(res)
    return res
  }

  // All good - proceed with CORS headers
  const res = NextResponse.next()
  setCorsHeaders(res)
  return res
}

function setCorsHeaders(res: NextResponse) {
  res.headers.set('Access-Control-Allow-Origin', '*')
  res.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api).*)'
  ],
}
