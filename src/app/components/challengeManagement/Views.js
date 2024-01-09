import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'

import "../transaction/imageview.css";

import css from '../../../assets/styles/view.module.css'

const styles = {
    color: '#fff !important',
}


function Views() {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const beckendLocalApiUrl = process.env.REACT_APP_BACKEND_LOCAL_API;
    const beckendLiveApiUrl = process.env.REACT_APP_BACKEND_LIVE_API;
    const nodeMode = process.env.NODE_ENV;
    if (nodeMode === "development") {
      var baseUrl = beckendLocalApiUrl;
    } else {
      baseUrl = beckendLiveApiUrl;
    }

    const [game, setall] = useState()
    const [winner, setWinner] = useState(null)
        const [mount, setMount] = useState(false);
    const Allchallenge = () => {

        const access_token = localStorage.getItem('token')
        const headers = {
            Authorization: `Bearer ${access_token}`
        }
        axios.get(baseUrl+`challange/${path}`, { headers })
            .then((res) => {
                setall(res.data)
                console.log(res.data)
                imageViewer();

                // console.log(res.data);
            }).catch((e) => {
                alert(e)
            })

    }

    
    const dateFormat = (e) => {

        const date = new Date(e);
        const newDate = date.toLocaleString('default', { month: 'long', day: 'numeric', hour: 'numeric', hour12: true, minute: 'numeric' });
        return newDate;
    }

    function winnAmount(gameAmount) {
        let profit = null;
        if (gameAmount >= 50 && gameAmount <= 250)
            profit = gameAmount * 10 / 100;
        else if (gameAmount > 250 && gameAmount <= 500)
            profit = 25;
        else if (gameAmount > 500)
            profit = gameAmount * 5 / 100;
        return gameAmount - profit;
    }
    // Allchallenge()

    const CancelGame = async () => {
        const confirm = window.confirm("are you sure to cancel")

        if (confirm) {
            //alert(confirm)
            const access_token = localStorage.getItem('token')
            const headers = {
                Authorization: `Bearer ${access_token}`

            }
            axios.patch(baseUrl+`challange/Cancel/admin/${path}`, { Cancelled_by: access_token }, { headers })
                .then((res) => {
                    console.log(res)
                    Allchallenge()
                    Allchallenge()
                })
        }
        else {
            window.alert("sorry try again")
        }
    }



    const updateadmin = async (id) => {
        const confirm = window.confirm("are you sure to update")
        if (confirm) {
            let access_token = localStorage.getItem('token')
            access_token = localStorage.getItem('token')
            const headers = {
                Authorization: `Bearer ${access_token}`
            }
            axios.post(baseUrl+`challange/admin/result/${path}`, {
                winner:id,
                Status_Update_By: access_token
            }, { headers })
                .then((res) => {
                    Allchallenge()
                })
        }
        else {
            window.alert("sorry try again")
        }
    }
    
    //add penalty to user for wrong update
    const [bonus, setBonus] = useState(25);
    const handleChange = event => {
        setBonus(event.target.value);
      };

    const updatePenalty = (id) => {
        const confirm = window.confirm("Are you sure, you want to add penalty to this user?")
        if (confirm) {
        const access_token = localStorage.getItem("token")
        const headers = {
            Authorization: `Bearer ${access_token}`
        }
        
        axios.post(baseUrl+`user/penlaty/${id}`,
            {
                bonus: JSON.parse(bonus)
            },
            { headers })
            .then((res) => {
                
                if(res.data.status==0){
                    alert('User wallet balance already low.');
                }else{
                    alert('Penalty successfully added.')
                }
                Allchallenge()
            })
        }
    }
    
    
    function imageViewer() {
        let imgs = document.getElementsByClassName("img"),
            out = document.getElementsByClassName("img-out")[0];

        for (let i = 0; i < imgs.length; i++) {

            if (!imgs[i].classList.contains("el")) {

                imgs[i].classList.add("el");
                imgs[i].addEventListener("click", lightImage);
                function lightImage() {
                    let container = document.getElementsByClassName("img-panel")[i];
                    container.classList.toggle("img-panel__selct");
                };

                imgs[i].addEventListener("click", openImage);
                function openImage() {
                    let imgElement = document.createElement("img"),
                        imgWrapper = document.createElement("div"),
                        imgClose = document.createElement("div"),
                        container = document.getElementsByClassName("img-panel")[i];
                    container.classList.add("img-panel__selct");
                    imgElement.setAttribute("class", "image__selected");
                    imgElement.src = imgs[i].src;
                    imgWrapper.setAttribute("class", "img-wrapper");
                    imgClose.setAttribute("class", "img-close");
                    imgWrapper.appendChild(imgElement);
                    imgWrapper.appendChild(imgClose);


                    setTimeout(
                        function () {
                            imgWrapper.classList.add("img-wrapper__initial");
                            imgElement.classList.add("img-selected-initial");
                        }, 50);

                    out.appendChild(imgWrapper);
                    imgClose.addEventListener("click", function () {
                        container.classList.remove("img-panel__selct");
                        out.removeChild(imgWrapper);
                    });
                }
            }
        }
    }

    useEffect(() => {
        Allchallenge()
    }, [])

    if (game == undefined) {
        return null
    }
    
    var gameBgImage = 'url(/wp3731787.jpg)';
    if(game.Game_type=="Ludo Classics"){
        gameBgImage = 'url(/ludoclassic.jpg)';
    }
    else if(game.Game_type == "Ludo Ulta"){
        gameBgImage = 'url(/ludoultra.jpg)';
    }
    else if(game.Game_type == "Ludo Popular"){
        gameBgImage = 'url(/ludopopular.jpg)';
    }else{
        gameBgImage = 'url(/ludonocut.jpg)';
    }
    
    let currentTime = Date.now();
    let gameCreatedAt = new Date(game.createdAt).getTime();

    return (
            mount ?
        <div className="" style={{ "height": "100%", "display": "flex", "alignItems": "center", "justifyContent": "center", "top": "0", "left": "0", "right": "0", "bottom": "0", "zIndex": "9999", "backgroundColor": "rgb(255, 255, 255)" }}>
          <img
            src={'https://rkludo.in/Images/LandingPage_img/loader1.gif'}
            style={{ width: "150px", height: "80px" }}
          />
        </div> :
        <div>
            <div className="img-out"></div>
            {/* new layout start */}
            <div className="content d-flex flex-column flex-column-fluid snipcss-Kdfx3" id="kt_content">
                {/*begin::Entry*/}
                <div className="d-flex flex-column-fluid">
                    <div className="container-fluid">
                        <div className={css.row}>
                            <div className="col-xl-12">
                                <div className={`${css.card} ${css.card_custom} ${css.bgi_no_repeat} ${css.gutter_b}`} style={{ minHeight: '250px', backgroundColor: '#1B283F', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: gameBgImage }}>
                                    <div className={css.card_body} style={{ background:'rgba(0,0,0,0.5)' }}>
                                    
                                        <div className='row'>
                                            <h3 className={`text-white ${css.font_weight_bolder} snip-h3`}>Match Details</h3>

                                            {
                                            // game.Status!="cancelled"&&game.Status!="completed"&&game.Status!="pending"&&game.Status!="running" &&
                                            game.Status!="cancelled" && game.Status!="completed" && game.Status!="pending" && game.Status!="running" &&
                                            <button onClick={CancelGame} className="btn btn-danger ml-auto rounded-pill">
                                                Cancel Match
                                                </button>
                                            }

                                            {
                                                (game.Created_by._id==game.Accepetd_By._id && (game.Status!="cancelled" && game.Status!="completed"))? <button onClick={CancelGame} className="btn btn-danger ml-auto rounded-pill">
                                                Force Cancel Match
                                                </button>:''
                                            }

                                            {
                                                (game.Status!="cancelled" && game.Status!="completed" && (parseInt(gameCreatedAt) + 3000) < currentTime)? <button onClick={CancelGame} className="btn btn-danger ml-auto rounded-pill">
                                                Force Cancel Match, Time Limit Exceeded
                                                </button>:''
                                            }

                                        </div>
                                        
                                        <p className={`${css.text_muted} ${css.font_size_lg} mt-5 mb-10 snip-p`}>
                                            Check participants data, and announced result.
                                        </p>
                                        <div className="row">
                                            <div className="col-lg-2" style={{ borderRight: '1px solid #fff' }}>
                                                <h4 className={`text-white ${css.font_weight_bolder} snip-h4`}>
                                                    Match Fee: {game.Game_Ammount}
                                                </h4>
                                            </div>
                                            <div className="col-lg-2" style={{ borderRight: '1px solid #fff' }}>
                                                <h4 className={`text-white ${css.font_weight_bolder} snip-h4`}>
                                                    Prize: {game.Game_Ammount + winnAmount(game.Game_Ammount)}
                                                </h4>
                                            </div>
                                            <div className="col-lg-2" style={{ borderRight: '1px solid #fff' }}>
                                                <h4 className={`text-white ${css.font_weight_bolder} snip-h4`}>
                                                    Type: {(game.Game_type=="Ludo 1 Goti")?"Ludo No Cut":game.Game_type}
                                                </h4>
                                            </div>
                                            <div className="col-lg-2">
                                                <h4 className={`text-white ${css.font_weight_bolder} snip-h4`}>
                                                    Status: <span className={`${css.label} ${css.label_primary} ${css.font_weight_bolder} ${css.label_pill} ${css.label_inline} bg-white text-dark py-3`} style={{ fontSize: '1.2rem' }}>{game.Status}</span>
                                                </h4>
                                            </div>
                                            <div className="col-lg-2">
                                                <h4 className={`text-white ${css.font_weight_bolder} snip-h4`}>
                                                    Room Code: <span style={{ color: '#f4bc41' }}>{game.Room_code}</span>
                                                </h4>
                                            </div>
                                            
                                            {/* Added by team */}
                                            <div className="col-lg-2">
                                                <h6 className={`text-white ${css.font_weight_bolder} snip-h4`}>
                                                    Last Updated By: 
                                                    <span style={{ color: '#f4bc41' }}>{game.action_by?game.action_by.Name:"N/A"}</span>
                                                    (<span style={{ color: '#f4bc41' }}>{game.actionby_Date?dateFormat(game.actionby_Date).split(',')[0]:"N/A"}</span>)
                                                </h6>
                                            </div>
                                            {/* Added by team */}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={css.row}>
                            <div className="col-lg-6">
                                <div className={`${css.card} ${css.card_custom} ${css.card_stretch}  ${css.gutter_b}`}>
                                    <div className={`${css.card_body} d-flex p-0`}>
                                        <div className={`${css.flex_grow_1} ${css.p_12} ${css.card_rounded} ${css.bgi_no_repeat} d-flex flex-column justify-content-center align-items-start`} style={{ backgroundColor: '#FFF4DE', backgroundPosition: 'right bottom', backgroundSize: '20% auto', backgroundImage: 'url(/custom-8.svg)' }}>
                                            <h2 className={`${css.font_weight_bolder} snip-h2 mb-4`}>
                                                Creator
                                            </h2>
                                            <ul className="snip-ul">
                                                <li>
                                                    User Name: <Link to={`/user/view_user/${game.Created_by._id}`} className={`btn ${css.btn_success} ${css.font_weight_bold} ${css.py_2} ${css.px_6} mr-2 snip-a`} >
                                                    {game.Created_by && game.Created_by.Name}
                                                </Link>
                                                </li>
                                                <li>
                                                    hold balance :{game.Created_by.hold_balance}
                                                </li> 
                                                <li>
                                                    Created Time: {dateFormat(game.createdAt).split(',')[0]}
                                                </li>
                                                <li>
                                                    Participant Status:
                                                    {game.Creator_Status&&<span className={`${css.label} ${game.Creator_Status=="winn"?css.label_success:css.label_danger} ${css.font_weight_bolder} ${css.label_pill} ${css.label_inline} ml-2`}>{game.Creator_Status}</span>}

                                                </li>
                                                {/* <li>
                                                    Final Result:
                                                    <span className={`${css.label} ${css.label_primary} ${css.label_pill} ${css.label_inline}`}>
                                                        Pending
                                                    </span>
                                                </li> */}
                                                {game.Creator_Status_Updated_at&&<li>
                                                    Status Updated At: {dateFormat(game.Creator_Status_Updated_at).split(',')[0]}
                                                </li>}
                                                 {game.Creator_Status_Reason&&<li>
                                                    Cancel Reason: {game.Creator_Status_Reason}
                                                </li>}
                                                
                                                {game.Creator_Screenshot&&<li>
                                                    Proof:
                                                    {/* <a href="../" target="_blank" className="snip-a">
                                                        View in new tab
                                                    </a> */}
                                                </li>}
                                                <br />
                                                <div className='img-panel' >
                                                    {game.Creator_Screenshot&&<img alt='Creator Screenshot' src={baseUrl+`${game.Creator_Screenshot}`} className="img-responsive img w-auto" height={200} />}
                                                </div> 
                                            </ul>
                                            <p className="snip-p">
                                            </p>
                                            {(game.Status=="pending"||game.Status=="conflict")&&<div className="form-group">
                                                <button href="match-summery?partiId=2&aid=4132&mtid=2" className={`btn ${css.btn_success} ${css.font_weight_bold} ${css.py_2} ${css.px_6} mr-2 snip-a`} onClick={()=>{updateadmin(game.Created_by._id)}}>
                                                    Win
                                                </button>
                                                <button href="match-summery?partiId=2&rid=4132&mtid=2" className={`btn btn-danger ${css.font_weight_bold} ${css.py_2} ${css.px_6} mr-2 snip-a`} onClick={()=>{updateadmin(game.Accepetd_By._id)}}>
                                                    Lose
                                                </button>
                                                
                                                <div>
                                                
                                                <h5 className='mt-4'>Add Penalty</h5>
                                                <input  type="number" id='penaltyval' className="form-control  input-sm" style={{ minWidth: '100px' }} placeholder="Penalty Amount"
                                                onChange={handleChange} value={bonus} />
                                                <button className="btn btn-sm btn-primary mt-2" onClick={() => updatePenalty(game.Created_by._id)}>Add Penalty</button>

                                                </div>
                                                
                                                
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                         {game.Accepetd_By &&   <div className="col-lg-6">
                                <div className={`card ${css.card_custom} ${css.card_stretch}  ${css.gutter_b}`}>
                                    <div className={`${css.card_body} d-flex p-0`}>
                                        <div className={`${css.flex_grow_1} ${css.p_12} ${css.card_rounded} ${css.bgi_no_repeat} d-flex flex-column justify-content-center align-items-start`} style={{ backgroundColor: '#FFF4DE', backgroundPosition: 'right bottom', backgroundSize: '20% auto', backgroundImage: 'url(/custom-8.svg)' }}>
                                            <h2 className={`${css.font_weight_bolder} snip-h2 mb-4`}>
                                                Acceptor
                                            </h2>
                                            <ul className="snip-ul">
                                               {game.Accepetd_By &&<li>
                                                    User Name: <Link to={`/user/view_user/${game.Accepetd_By&&game.Accepetd_By._id}`} className={`btn ${css.btn_success} ${css.font_weight_bold} ${css.py_2} ${css.px_6} mr-2 snip-a`} >
                                                    {game.Accepetd_By&&game.Accepetd_By.Name}
                                                </Link>
                                                    
                                                </li>}
                                                <li>
                                                    hold balance :{game.Accepetd_By.hold_balance}
                                                </li> 
                                                <li>
                                                    Join Time: {dateFormat(game.Acceptor_by_Creator_at).split(',')[0]}
                                                </li>
                                                <li>
                                                    Participant Status:
                                                    {game.Acceptor_status&&<span className={`${css.label} ${game.Acceptor_status=="winn"?css.label_success:css.label_danger} ${css.font_weight_bolder} ${css.label_pill} ${css.label_inline} ml-2`}>{game.Acceptor_status}</span>}
                                                </li>
                                                {/* <li>
                                                    Final Result:
                                                    <span className={`${css.label} ${css.label_primary} ${css.label_pill} ${css.label_inline}`}>
                                                        Pending
                                                    </span>
                                                </li> */}
                                                {game.Acceptor_status_reason&&<li>
                                                    Cancel Reason: {game.Acceptor_status_reason}
                                                </li>}
                                                {game.Acceptor_status_Updated_at&&<li>
                                                    Status Updated At : {dateFormat(game.Acceptor_status_Updated_at).split(',')[0]}
                                                </li>}
                                                {game.Acceptor_screenshot&&<li>
                                                    Proof:
                                                    {/* <a href="../" target="_blank" className="snip-a">
                                                        View in new tab
                                                    </a> */}
                                                </li>}
                                                <br />
                                                <div className='img-panel'>
                                                    {game.Acceptor_screenshot&&<img alt='Acceptor Screenshot' src={baseUrl+`${game.Acceptor_screenshot}`} className="img-responsive img w-auto"  height={200}/>}
                                                </div>
                                            </ul>
                                            <p className="snip-p">
                                            </p>
                                            {(game.Status=="pending"||game.Status=="conflict")&&<div className="form-group">
                                                <button href="match-summery?partiId=2&aid=8&mtid=2" className={`btn ${css.btn_success} ${css.font_weight_bold} ${css.py_2} ${css.px_6} mr-2 snip-a`} onClick={()=>{updateadmin(game.Accepetd_By._id)}}>
                                                    Win
                                                </button>
                                                &nbsp;&nbsp;
                                                <button href="match-summery?partiId=2&rid=8&mtid=2" className={`btn btn-danger ${css.font_weight_bold} ${css.py_2} ${css.px_6} mr-2 snip-a`} onClick={()=>{updateadmin(game.Created_by._id)}}>
                                                    Lose
                                                </button>
                                                
                                                <div>
                                                
                                                <h5 className='mt-4'>Add Penalty</h5>
                                                <input  type="number" id='penaltyval' className="form-control  input-sm" style={{ minWidth: '100px' }} placeholder="Penalty Amount"
                                                onChange={handleChange} value={bonus} />
                                                <button className="btn btn-sm btn-primary mt-2" onClick={() => updatePenalty(game.Accepetd_By._id)}>Add Penalty</button>

                                                </div>
                                                
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        {/* <div className="row">
                            <div className="col-xl-12">
                                <div className={`card ${css.card_custom}`}>
                                    <div className="card-header align-items-center px-4 py-3">
                                        <div className="text-center flex-grow-1">
                                            <div className="text-dark-75 font_weight_bold font-size-h5">
                                                Chat History
                                            </div>
                                            <div>
                                                <span className="label label-sm label-dot label-success">
                                                </span>
                                                <span className="font_weight_bold text-muted font-size-sm">
                                                    Active
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="${css.card_body}" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                        <div className="scroll scroll-pull" data-mobile-height={350}>
                                            <div className="messages" id="messages">
                                                <span>
                                                    Loading...
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/*end::Entry*/}
            </div>

            {/* new layout end */}

        </div>
    )
}

export default Views