import '../App.css'
import emailjs from 'emailjs-com'
import { FaMapMarkedAlt, FaPhone, FaEnvelopeOpenText } from "react-icons/fa"

const Footer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_4do5ex8',
            'template_73d6prs',
            e.target, 'user_FBWeDGGAg4iQ3mRXAhcdj'
        ).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }
    return (
        <div id="contact">

            <div className="footer mt-5  text-center" >
                <div class="row">
                    <div className="col-lg-4 col-sm-12  mt-4">
                        <span style={{"color":"white"}}>   < FaPhone id="footIcon"/>062 299 6061</span> <br></br>  <br></br>
                        <span style={{ "color": "white" }}>   < FaEnvelopeOpenText id="footIcon"/> sgadcere@gmail.com</span><br></br> <br></br>

                        <span style={{ "color": "white" }}>   < FaMapMarkedAlt id="footIcon"/> Address</span><br></br>  <br></br>



                    </div>
                    <form className="col-lg-8  col-sm-12" onSubmit={sendEmail}>
                        <div >
                            <div class="form-group mt-2">

                                <input type="email" name="email" className="form-control w-75" aria-describedby="emailHelp" placeholder="Email"></input>
                            </div>
                            <div class="form-group mt-2">

                                <input type="text" name="subject" class="form-control w-75"  aria-describedby="emailHelp" placeholder="Subject"></input>
                            </div>

                            <div class="form-group mt-2">

                                <input type="text" name="userName" class="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="FirstName LastName"></input>
                            </div>


                            <div class="form-group mt-2">

                                <textarea class="form-control w-75" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                            </div>

                            <button type="submit" name="submit" class="btn btn-dark mt-2">submit</button>

                        </div>
                    </form>


                </div>


            </div>
        </div>
    )
}

export default Footer
