import './globals.css'; // Make sure this is imported

// ... other imports
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ADD THIS LINE IF IT'S NOT THERE */}
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body>
        {/* ... */}
        {children}
        {/* ... */}
      </body>
    </html>
  );
}