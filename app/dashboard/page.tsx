
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardClient from './DashboardClient'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const [{ data: profile }, { data: trees }, { data: logs }] =
    await Promise.all([
      supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle(),

      supabase
        .from('trees')
        .select('*')
        .order('created_at', { ascending: false }),

      supabase
        .from('farm_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20),
    ])

  return (
    <DashboardClient
      initialTrees={trees ?? []}
      initialLogs={logs ?? []}
      profile={profile}
      email={user.email ?? ''}
    />
  )
}
