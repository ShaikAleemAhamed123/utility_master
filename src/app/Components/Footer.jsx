import "../styles/footer-styles.css"

function Footer() {
    return <>
        <footer className="bg-dark text-center text-white footer">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i>
                    </a> */}

                    <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/terminus_being" role="button"
                    ><i className="fab fa-twitter"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="mailto:shaikaleemahamed786@gmail.com" role="button"
                    ><i className="fab fa-google"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/aleemahamedshaik/" role="button"
                    ><i className="fab fa-instagram"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/aleem-ahamed-shaik-81123a1ab/" role="button"
                    ><i className="fab fa-linkedin-in"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/ShaikAleemAhamed123" role="button"
                    ><i className="fab fa-github"></i>
                    </a>
                </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2023 Copyright : Aleem Ahamed Shaik
            </div>
        </footer>
    </>
}

export default Footer;