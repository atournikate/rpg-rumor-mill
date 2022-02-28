import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p className="footer font-weight-light text-center mt-5">
            Copyright &copy;{today.getFullYear()} atournikate
        </p>
    
    </footer>
  )
}

export default Footer