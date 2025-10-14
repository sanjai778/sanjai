import React from 'react';
import './globals.css'

export const metadata = {
  title: 'Testimonial Slider',
  description: 'A beautiful testimonial slider in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        <link href='/app/styles/visitdesk_icons.css' rel='stylesheet' />
      </head>
      <body>{children}</body>
    </html>
  )
}
