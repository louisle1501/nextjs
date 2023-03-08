import React from 'react'

interface Props {
	children: React.ReactNode
}

export default function Container({children}: Props) {
  return (
    <div className = 'max-w-7xl w-full mx-auto'>
			{children}
		</div>
  )
}
