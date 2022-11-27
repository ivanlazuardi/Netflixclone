import React from "react";
import { useSelector } from "react-redux";
import { selecUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
    const user = useSelector(selecUser)

  return (
    <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img 
                    src="https://i.pinimg.com/474x/ac/94/19/ac94196a41dd07e90bdf830d6c599202.jpg" 
                    alt="" 
                    />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <button 
                            onClick={() => auth.signOut()} 
                            className="profileScreen__signOut"
                            >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen