import {ReactComponent as NbaIcon} from './assets/svg/NbaIcon.svg'
function Footer() {
    const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-gray-700 
        text-primary-content footer-center">
            <div>
                <NbaIcon 
                    width='50'
                    height='50'                
                />
                
                <p>Copyright &copy; {footerYear} Habeeb Kareem All rights reserved.</p>
            </div>
    </footer>
  )
}

export default Footer