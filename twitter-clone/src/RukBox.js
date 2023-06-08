import React from 'react'
import "./RukBox.css"
import { Avatar, Button} from "@material-ui/core";

function RukBox() {
    return (
        <div className="rukBox">
            <form>
                <div className="rukBox__input">
                    <Avatar src="https://i.pinimg.com/474x/8c/0d/61/8c0d61bced72bd57841930aa4697494a--ippo-makunouchi-hajime-no-ippo-anime.jpg"/>
                    <input placeholder="How's it going?" type='text'/>                    
                </div>
                <input className="rukBox__inputImage" placeholder="Enter image URL" type='text'/>
                <Button className="rukBox__rukButton">Ruk</Button>
            </form>
        </div>
    )
}

export default RukBox
