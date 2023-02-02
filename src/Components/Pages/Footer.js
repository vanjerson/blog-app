import '../Css/footer.css'

function Footer() {
    return(

        <footer className="footer-distributed">

        <div className="footer-left">
            <img src='https://aws.wideinfo.org/ourplanetary.com/wp-content/uploads/2017/07/06151035/logo_blog-1-2.png' style={{height:'60px', width:'100px'}}/>
            

            <p className="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">About</a>
                |
                <a href="#">Contact</a>
                |
                <a href="#">Blog</a>
            </p>

            <p className="footer-company-name">Copyright © 2023 <strong>Blog</strong> All rights reserved</p>
        </div>

        <div className="footer-center">
            <div>
            <ion-icon name="navigate-outline" id="icons"></ion-icon>
                <p>Philippines</p>
            </div>

            <div>
            <ion-icon name="call-outline" id="icons"></ion-icon>
                <p>+63-906-8069-596</p>
            </div>
            <div>
            <ion-icon name="mail-outline" id="icons"></ion-icon>
                <p><a href="mailto:vanjerson2@gmail.com">sample@gmail.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About</span>
                <strong>Blog</strong> is an online journal or informational website displaying information in reverse chronological order, with the latest posts appearing first, at the top. It is a platform where a writer or a group of writers share their views on an individual subject.
            </p>
            <div className="footer-icons">
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
            </div>
        </div>
    </footer>

    )  
}

export default Footer;