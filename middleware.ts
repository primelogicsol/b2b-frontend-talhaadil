// // middleware.ts
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl
//   const accessToken = request.cookies.get('access_token')?.value
//   const userRole = request.cookies.get('user_role')?.value

//   const isAuth = Boolean(accessToken)

//   const isAdminRoute = pathname.startsWith('/admin')
//   const isPublicRoute = publicRoutes.includes(pathname)

//   // Allow access to public routes
//   if (isPublicRoute) return NextResponse.next()

//   // Not logged in and trying to access protected routes
//   if (!isAuth) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   // Logged in but trying to access /admin without proper role
//   if (isAdminRoute && !(userRole === 'sub_admin' || userRole === 'super_admin')) {
//     return NextResponse.redirect(new URL('/', request.url))
//   }

//   // All good
//   return NextResponse.next()
// }

// const publicRoutes = ['/', '/login', '/signup', '/forgot-password','/our-values','/our-team','/our-story','/contact','/careers','/business-niche']

// export const config = {
//   matcher: [
//     /*
//      * Match all routes except:
//      * - static files (_next)
//      * - API routes (/api)
//      * - images/fonts etc
//      */
//     '/((?!_next|static|.*\\..*|api).*)',
//   ],
// }




import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*', // apply to all routes
}
