export default function DashboardLayout({
  children,
  user,
  analytic,
}: {
  children: React.ReactNode
  user: React.ReactNode
  analytic: React.ReactNode
}) {
    return (
      <div>
        <nav>
          <h1>NAVBAR</h1>
        </nav>
        <div>
          {children}
        </div>
        <div>
          {user}
        </div>
        <div>
          {analytic}
        </div>
      </div>
    )
}