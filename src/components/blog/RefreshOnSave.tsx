'use client'

import { RefreshRouteOnSave as PayloadRefresh } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

export function RefreshOnSave({ serverURL }: { serverURL: string }) {
  const router = useRouter()
  return <PayloadRefresh refresh={() => router.refresh()} serverURL={serverURL} />
}
