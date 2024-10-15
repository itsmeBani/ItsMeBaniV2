
import  "../styles/FeaturedProjects.css"

function Card(prop) {
    return (
        <div className="childcon dark">
            <div className="childcon2" >
                <div className="con1"><img src={prop?.image}/></div>
                <div className="con2">
                    <h4><span> {prop?.h} </span>{prop?.title} </h4>
                    <p >{prop.description}</p>
                    <div>
                        {prop?.logo1 && <a><img alt="" src={prop?.logo1}/></a>}
                        {prop?.logo2 && <a><img alt="" src={prop?.logo2}/></a>}
                        {prop?.logo3 && <a><img alt="" src={prop?.logo3}/></a>}
                        {prop?.logo4 && <a><img alt="" src={prop?.logo4}/></a>}
                    </div>
                    <button onClick={()=>{alert()}}>Take a Look</button>

                </div>
            </div>

        </div>
    );
}

export default Card;