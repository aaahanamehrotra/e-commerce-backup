import footerStyles from './Footer.module.css'

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.title}>&copy; E-commerce {new Date().getFullYear()}-{(new Date().getFullYear()+1)%100}</div>
    </footer>
  )
}

export default Footer