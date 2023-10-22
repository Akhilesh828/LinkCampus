import { Dots, NewRoom, Search } from "../../../svg";
import Contact from "./Contact";
import "./style.css";
export default function RightHome({ user }) {
  const color = "#65676b";
  return (
    <div className="right_home">
      <div className="heading">Sponsored</div>
      <div className="splitter1"></div>
      <div className="contacts_wrap">
        <div className="contacts_header">
          {/* <div className="contacts_header_left">Contacts</div> */}
          <div className="contacts_header_right">
            {/* <div className="contact_circle hover1">
              <NewRoom color={color} />
            </div>
            <div className="contact_circle hover1">
              <Search color={color} />
            </div>
            <div className="contact_circle hover1">
              <Dots color={color} />
            </div> */}
          </div>
        </div>
        {/* <div className="contacts_list">
          <Contact user={user} />
        </div> */}
        <img src="../../icons/farewell.jpeg" width="110%" alt="ltcead"/>
        {/* <img src="../../icons/ltceads.png" width="110%" alt="ltcead2"/> */}
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", paddingTop:"20px"}}>      
          <div style={{color:"blue", fontWeight:"bold"}}>Today's Quotes</div>
          <a href="https://www.canva.com/learn/25-quotes-show-education-important/#:~:text=%E2%80%9CGive%20a%20man%20a%20fish%20and%20you%20feed%20him%20for%20a%20day%3B%20teach%20a%20man%20to%20fish%20and%20you%20feed%20him%20for%20a%20lifetime.%E2%80%9D%20%E2%80%94Maimonides"
        style={{ fontWeight: "bold" }}>
        “Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.”
      </a></div>
      </div>
    </div>
  );
}
