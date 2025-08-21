import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

/**
 * Watches the connected wallet's SOL balance and returns it as a number of lamports.
 */
export function useSolBalance() {
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const [balance, setBalance] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (!publicKey) {
      setBalance(null)
      return
    }

    let disposed = false

    const update = async () => {
      const lamports = await connection.getBalance(publicKey)
      if (!disposed) setBalance(lamports)
    }

    update()

    const id = connection.onAccountChange(publicKey, info => {
      if (!disposed) setBalance(Number(info.lamports))
    })

    return () => {
      disposed = true
      connection.removeAccountChangeListener(id)
    }
  }, [connection, publicKey])

  return { balance }
}
