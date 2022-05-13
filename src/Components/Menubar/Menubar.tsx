import { useState } from "react";
import * as S from "./Style";
import bird from "../../Assets/tlqkfto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faGear, faArrowRightFromBracket, faBookmark} from "@fortawesome/free-solid-svg-icons";

export default function Menubar() {

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <>
            <S.Navigation toggle={toggle}>
                <S.UserBox toggle={toggle}>
                    <S.ImgBox>
                        <img src={bird} />
                    </S.ImgBox>
                    <S.UserName>강경민</S.UserName>
                </S.UserBox>
                <S.MenuToggle onClick={() => setToggle(!toggle)} toggle={toggle}></S.MenuToggle>
                <S.Menu>
                    <ul> 
                        <li><FontAwesomeIcon icon={faUser} /> 프로필</li>
                        <li><FontAwesomeIcon icon={faGear} /> 설정</li>
                        <li><FontAwesomeIcon icon={faBookmark} /> 북마크 </li>
                        <li><FontAwesomeIcon icon={faArrowRightFromBracket} /> 로그아웃</li>
                    </ul>
                </S.Menu>
            </S.Navigation>
        </>
    );
}