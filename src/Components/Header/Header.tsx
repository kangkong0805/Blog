import Menubar from "../Menubar/Menubar";
import { HeaderLayout } from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {

    const [content, setContent] = useState('');

    return (
        <HeaderLayout>
            <div>
                <input value={content} onChange={(e) => setContent(e.target.value)} />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <Menubar />
        </HeaderLayout>
    );
}