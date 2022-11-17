import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const error = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {router.push('/')}, 3000)
  }, []);
  
  return (
    <div>
      <h1> Page IS NOT FOUND 💢</h1>
      <Link href="/">Go Home page</Link>
    </div>
  )
}

export default error
