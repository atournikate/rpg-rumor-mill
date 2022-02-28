import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p className="font-weight-light text-center">
            Copyright &copy;{today.getFullYear()} atournikate
        </p>
    
    </footer>
  )
}

export default Footer