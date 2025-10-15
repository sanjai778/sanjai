import "reflect-metadata";
import React from 'react';
import './globals.css';
export var metadata = {
    title: 'Testimonial Slider',
    description: 'A beautiful testimonial slider in Next.js',
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>
      </head>
      <body>{children}</body>
    </html>);
}
