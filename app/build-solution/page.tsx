import { redirect } from 'next/navigation'

// Alias route to ensure users reach the Build page
export default function BuildSolutionRedirect() {
  redirect('/build')
}

