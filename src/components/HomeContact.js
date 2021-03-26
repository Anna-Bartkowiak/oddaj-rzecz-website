import React, { useState } from "react";
import FromBackground from "../assets/Background_Image.png";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/Facebook.png";
import { db } from "./firebase";
import Modal from "./modal";

export const HomeContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                setLoader(false);
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setMessage("");
        setEmail("");
    };

    return (
        <>
            <div className="contact" id="contact">
                <div className="contact__img">
                    <img src={FromBackground} alt="decoration" />
                </div>
                <div className="form">
                    <div className="form__header">
                        <h3>Skontaktuj się z nami</h3>
                        <div className="form__decoration"></div>
                    </div>
                    <form onSubmit={handleSubmit} className="form__content">
                        <div>
                            <label htmlFor="name">Wpis swoję imię</label>
                            <label htmlFor="mail">Wpisz swój e-mail</label>
                        </div>
                        <div>
                            <input
                                placeholder="name"
                                id="name"
                                className="form-control"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                            <input
                                type="mail"
                                placeholder="e-mail"
                                id="mail"
                                className="form-control"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        {email.indexOf("@") === -1 ? (
                            <div className="invalid-feedback" id="inv_mail">
                                Wpisz e-mail
              </div>
                        ) : (
                                ""
                            )}
                        <div className="form__content--text">
                            <label htmlFor="validationCustom01">Wpisz swoją wiadomość</label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Wpisz tekst"
                                required
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                            {message.length <= 5 ? (
                                <div className="invalid-feedback">Wpisz wiadomość</div>
                            ) : (
                                    ""
                                )}
                        </div>
                        <button
                            type="submit"
                            style={{ background: loader ? "#ccc" : "#ffffffc9" }}
                        >
                            Wyślij
                        </button>
                    </form>
                </div>
                <div className="footer">
                    <p>Copyright by CodersLab</p>
                    <div className="footer__img">
                        <img src={instagram} alt="instagram" />
                        <img src={facebook} alt="facebook" />
                    </div>
                </div>
            </div>
            {loader && <Modal />}
        </>
    );
}

export default HomeContact;
