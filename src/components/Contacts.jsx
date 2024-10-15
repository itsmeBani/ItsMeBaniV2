
import  "../styles/Contacts.css"
import  Me from "../assets/me.webp"
function Contacts(props) {
    return (
        <>


            <div className="con" id="contacts">

                <div className="con11" >


                    <img src={Me}/>
                </div>
                <div className="con12" >

                    <form>
                        <h1>Message Us!</h1>
                        <label htmlFor="">Your Email</label>
                        <input type="text" placeholder="Email...." />
                        <label htmlFor="">Message</label>


                        <textarea placeholder="Messagge...." ></textarea>
                        <div>
                            <button type="submit" onClick={()=>{alert()}}>Send</button>
                        </div>

                    </form>
                </div>

            </div>


        </>

    );
}

export default Contacts;