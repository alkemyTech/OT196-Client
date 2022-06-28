import { useEffect, useState } from "react";
import axios from "axios";
import { MemberItem } from "./MemberItem";
// import { members } from './MemberFakeData'

const Listmembers = () => {
    const url = "http://localhost:3000/members";
    const [members, setMembers] = useState();
    const axiosApi = async() => {
        const res = await axios.get(url)
        setMembers(res.data);
    }

    useEffect(() => {
        axiosApi()
    }, []);

    return (
        <div>
            {!members? (
                    <div className="d-flex mt-3 justify-content-center">
                    <strong className="">Loading...</strong>
                    <div
                    className="d-flex ms-3 spinner-border"
                    role="status"
                    aria-hidden="true"
                    ></div>
                    </div>
                )
                : //if get members, extract data of each member
                (members.map((member) => {
                        return(
                            <div className="d-flex justify-content-center">
                            <MemberItem 
                            key={member.id}
                            member={member}
                            />
                            </div>
                        )
                    }
                ))
            }
        </div>
    )
}

export default Listmembers;