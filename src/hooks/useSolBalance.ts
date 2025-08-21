import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

export function useSolBalance() {
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const [balance, setBalance] = React.useState<bigint>(0n)

  React.useEffect(() => {
    if (!publicKey) {
      setBalance(0n)
      return
    }
    let cancelled = false
    connection.getBalance(publicKey).then((lamports) => {
      if (!cancelled) setBalance(BigInt(lamports))
    })
    const listener = connection.onAccountChange(
      publicKey,
      (account) => setBalance(BigInt(account.lamports)),
      'confirmed',
    )
    return () => {
      cancelled = true
      connection.removeAccountChangeListener(listener)
    }
  }, [connection, publicKey])

  return { balance }
}
